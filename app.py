import os
import re
import hmac
import time
import math
import smtplib
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
from urllib.parse import urlparse, quote_plus
from functools import wraps

import random
from flask import Flask, render_template, request, redirect, url_for, jsonify, session
from flask_wtf import CSRFProtect
from dotenv import load_dotenv
from werkzeug.utils import secure_filename

import data
from models import db, Post, Subscriber

import pymysql
pymysql.install_as_MySQLdb()

load_dotenv()

app = Flask(__name__)
app.url_map.strict_slashes = False
app.secret_key = os.environ.get('FLASK_SECRET_KEY')
app.config['WTF_CSRF_TIME_LIMIT'] = None

USE_MYSQL = os.environ.get('USE_MYSQL', 'false').lower() == 'true'

if USE_MYSQL:
    DB_HOST = os.environ.get('DB_HOST', 'localhost')
    DB_NAME = os.environ.get('DB_NAME')
    DB_USER = os.environ.get('DB_USER')
    DB_PASS = quote_plus(os.environ.get('DB_PASS', ''))
    app.config['SQLALCHEMY_DATABASE_URI'] = (
        f'mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}/{DB_NAME}'
    )
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(app.root_path, 'zitrac.db')

app.config['SESSION_COOKIE_SECURE'] = True
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'

csrf = CSRFProtect(app)

db.init_app(app)

with app.app_context():
    db.create_all()

NAV_ITEMS = [
    ('home', '/', 'Home'),
    ('about', '/about', 'About'),
    ('services', '/services', 'Services'),
    ('blog', '/blog', 'Blog'),
    ('contact', '/contact', 'Contact'),
]

SMTP_HOST = os.environ.get('SMTP_HOST')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 465))
SMTP_USER = os.environ.get('SMTP_USER')
SMTP_PASS = os.environ.get('SMTP_PASS')
MAIL_TO = os.environ.get('MAIL_TO')

if not all([SMTP_HOST, SMTP_USER, MAIL_TO]):
    app.logger.warning("SMTP settings incomplete — contact form email sending will fail.")

ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL')
if not ADMIN_EMAIL:
    raise RuntimeError("ADMIN_EMAIL must be set — the address that receives login verification codes.")

OTP_VALID_SECONDS = 300

ADMIN_PREFIX = 'admin'

_login_attempts = {}
MAX_ATTEMPTS = 5
LOCKOUT_SECONDS = 300

IMAGE_DIR = os.path.join(app.root_path, 'static', 'images')
IMAGE_EXTS = ('jpg', 'png', 'jpeg')
BLOG_IMAGE_DIR = os.path.join(app.root_path, 'static', 'images', 'blog')
os.makedirs(BLOG_IMAGE_DIR, exist_ok=True)


def estimate_read_time(html_content):
    text = re.sub('<[^<]+?>', '', html_content)
    word_count = len(text.split())
    minutes = max(1, math.ceil(word_count / 200))
    return minutes


def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')


def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not session.get('is_admin'):
            return redirect(url_for('admin_login', next=request.path))
        return f(*args, **kwargs)
    return decorated


def is_safe_admin_next(next_url):
    if not next_url:
        return False
    parsed = urlparse(next_url)
    if parsed.netloc or parsed.scheme:
        return False
    return next_url.startswith(f'/{ADMIN_PREFIX}/')


@app.route(f'/{ADMIN_PREFIX}')
@app.route(f'/{ADMIN_PREFIX}/')
def admin_index():
    return redirect(url_for('admin_posts'))


def send_otp_email(code):
    subject = "Your ZITRAC admin login code"

    text_body = (
        f"ZITRAC Admin Login\n\n"
        f"Your verification code is: {code}\n\n"
        f"This code expires in 5 minutes.\n\n"
        f"If you didn't request this, someone may have your admin password — "
        f"consider changing it immediately."
    )

    html_body = f"""\
    <html>
      <body style="margin:0; padding:0; background-color:#f4f4f5; font-family:Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding:40px 0;">
          <tr>
            <td align="center">
              <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border:1px solid #e5e7eb;">

                <tr>
                  <td style="padding:32px 40px 24px 40px; text-align:center; border-bottom:1px solid #e5e7eb;">
                    <img src="cid:zitrac_logo" alt="ZITRAC" style="height:36px;">
                  </td>
                </tr>

                <tr>
                  <td style="padding:40px;">
                    <p style="margin:0 0 8px 0; font-size:13px; letter-spacing:1px; text-transform:uppercase; color:#dc2626; font-weight:700;">
                      Admin Login
                    </p>
                    <h1 style="margin:0 0 16px 0; font-size:22px; color:#111827;">
                      Your verification code
                    </h1>
                    <p style="margin:0 0 24px 0; font-size:14px; line-height:1.6; color:#4b5563;">
                      Use the code below to complete your login to the ZITRAC admin panel.
                    </p>

                    <div style="background-color:#f9fafb; border:1px solid #e5e7eb; padding:20px; text-align:center; margin-bottom:24px;">
                      <span style="font-size:32px; font-weight:800; letter-spacing:8px; color:#111827;">
                        {code}
                      </span>
                    </div>

                    <p style="margin:0 0 4px 0; font-size:13px; color:#6b7280;">
                      This code expires in <strong>5 minutes</strong>.
                    </p>
                    <p style="margin:24px 0 0 0; font-size:13px; line-height:1.6; color:#6b7280; border-top:1px solid #e5e7eb; padding-top:20px;">
                      If you didn't request this code, someone may have your admin password.
                      Consider changing it immediately and reviewing recent account activity.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 40px; background-color:#0d1117; text-align:center;">
                    <p style="margin:0; font-size:11px; color:#9ca3af; letter-spacing:0.5px;">
                      &copy; {datetime.now().year} ZITRAC &middot; Harare, Zimbabwe
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    """

    msg = MIMEMultipart('related')
    msg['Subject'] = subject
    msg['From'] = f"ZITRAC Admin <{SMTP_USER}>"
    msg['To'] = ADMIN_EMAIL

    msg_alternative = MIMEMultipart('alternative')
    msg.attach(msg_alternative)
    msg_alternative.attach(MIMEText(text_body, 'plain', _charset='utf-8'))
    msg_alternative.attach(MIMEText(html_body, 'html', _charset='utf-8'))

    logo_path = os.path.join(app.root_path, 'static', 'images', 'zitracLogo.png')
    try:
        with open(logo_path, 'rb') as f:
            logo_img = MIMEImage(f.read())
            logo_img.add_header('Content-ID', '<zitrac_logo>')
            logo_img.add_header('Content-Disposition', 'inline', filename='zitracLogo.png')
            msg.attach(logo_img)
    except FileNotFoundError:
        app.logger.warning(f"Logo file not found at {logo_path} — sending OTP email without logo.")

    if not SMTP_PASS:
        app.logger.warning("SMTP_PASS not set — OTP email not actually sent (dev mode).")
        return False

    try:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, [ADMIN_EMAIL], msg.as_string())
        return True
    except Exception as e:
        app.logger.error(f"Failed to send OTP email: {e}")
        return False


@app.route(f'/{ADMIN_PREFIX}/login', methods=['GET', 'POST'])
def admin_login():
    error = None
    stage = session.get('login_stage', 'password')
    client_ip = request.remote_addr
    now = time.time()

    attempts = [t for t in _login_attempts.get(client_ip, []) if now - t < LOCKOUT_SECONDS]
    _login_attempts[client_ip] = attempts

    if len(attempts) >= MAX_ATTEMPTS:
        error = 'Too many attempts. Please try again in a few minutes.'
        return render_template('admin/login.html', error=error, stage='password')

    if request.method == 'POST':

        if stage == 'code':
            submitted_code = request.form.get('code', '').strip()
            real_code = session.get('pending_otp')
            issued_at = session.get('pending_otp_time', 0)

            expired = (time.time() - issued_at) > OTP_VALID_SECONDS
            code_correct = bool(real_code) and hmac.compare_digest(submitted_code, real_code) and not expired

            if code_correct:
                session.pop('pending_otp', None)
                session.pop('pending_otp_time', None)
                session.pop('login_stage', None)
                session['is_admin'] = True
                next_url = request.args.get('next')
                target = next_url if is_safe_admin_next(next_url) else url_for('admin_posts')
                return redirect(target)

            _login_attempts.setdefault(client_ip, []).append(now)
            error = 'Incorrect or expired code. Please try again.' if not expired else 'Code expired — please log in again.'
            if expired:
                session.pop('pending_otp', None)
                session.pop('pending_otp_time', None)
                session.pop('login_stage', None)
                stage = 'password'
            return render_template('admin/login.html', error=error, stage=stage)

        password = request.form.get('password', '')
        password_correct = bool(ADMIN_PASSWORD) and hmac.compare_digest(password, ADMIN_PASSWORD)

        if password_correct:
            code = f"{random.randint(0, 999999):06d}"
            session['pending_otp'] = code
            session['pending_otp_time'] = time.time()
            session['login_stage'] = 'code'
            send_otp_email(code)
            return render_template('admin/login.html', error=None, stage='code', info='Code sent to your email.')

        _login_attempts.setdefault(client_ip, []).append(now)
        error = 'Incorrect password.'
        return render_template('admin/login.html', error=error, stage='password')

    return render_template('admin/login.html', error=error, stage=stage)


@app.route(f'/{ADMIN_PREFIX}/logout')
def admin_logout():
    session.pop('is_admin', None)
    return redirect(url_for('admin_login'))


@app.route(f'/{ADMIN_PREFIX}/posts')
@login_required
def admin_posts():
    posts = Post.query.order_by(Post.published_at.desc()).all()
    return render_template('admin/posts_list.html', posts=posts, active='posts')


@app.route(f'/{ADMIN_PREFIX}/posts/new', methods=['GET', 'POST'])
@login_required
def admin_post_new():
    error = None
    if request.method == 'POST':
        error = save_post_from_form(request)
        if not error:
            return redirect(url_for('admin_posts'))
    return render_template('admin/post_form.html', post=None, error=error)


@app.route(f'/{ADMIN_PREFIX}/posts/<int:post_id>/edit', methods=['GET', 'POST'])
@login_required
def admin_post_edit(post_id):
    post = Post.query.get_or_404(post_id)
    error = None
    if request.method == 'POST':
        error = save_post_from_form(request, post=post)
        if not error:
            return redirect(url_for('admin_posts'))
    return render_template('admin/post_form.html', post=post, error=error)


@app.route(f'/{ADMIN_PREFIX}/posts/<int:post_id>/delete', methods=['POST'])
@login_required
def admin_post_delete(post_id):
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for('admin_posts'))


def save_post_from_form(request, post=None):
    title = request.form.get('title', '').strip()
    excerpt = request.form.get('excerpt', '').strip()
    content = request.form.get('content', '').strip()
    month = request.form.get('month', '').strip().upper()
    year = request.form.get('year', '').strip()
    slug = request.form.get('slug', '').strip() or slugify(title)

    if not all([title, excerpt, content, month, year]):
        return 'Please fill in all required fields.'

    existing = Post.query.filter_by(slug=slug).first()
    if existing and (not post or existing.id != post.id):
        return 'That slug is already in use by another post.'

    try:
        published_at = datetime.strptime(f"{month} {year} 01", "%b %Y %d")
    except ValueError:
        return 'Month/year format not recognised — use e.g. JUL / 2026.'

    image_filename = post.image if post else None
    file = request.files.get('image')
    if file and file.filename:
        safe_name = secure_filename(file.filename)
        ext = os.path.splitext(safe_name)[1].lower()
        if ext not in ('.jpg', '.jpeg', '.png'):
            return 'Image must be a JPG or PNG file.'
        final_name = f"{slug}{ext}"
        file.save(os.path.join(BLOG_IMAGE_DIR, final_name))
        image_filename = f"blog/{slug}"

    if post:
        post.slug = slug
        post.title = title
        post.excerpt = excerpt
        post.content = content
        post.month = month
        post.year = year
        post.published_at = published_at
        if image_filename:
            post.image = image_filename
    else:
        post = Post(
            slug=slug, title=title, excerpt=excerpt, content=content,
            month=month, year=year, published_at=published_at,
            image=image_filename,
        )
        db.session.add(post)

    db.session.commit()
    return None


def resolve_image(basename, directory=IMAGE_DIR, exts=IMAGE_EXTS, fallback_ext='jpg'):
    stem = os.path.splitext(basename)[0]
    for ext in exts:
        candidate = f'{stem}.{ext}'
        if os.path.isfile(os.path.join(directory, candidate)):
            return candidate
    return basename if '.' in basename else f'{basename}.{fallback_ext}'


def resolve_hero_images(count=10):
    images = []
    for i in range(1, count + 1):
        filename = f'hero_{i}'
        for ext in IMAGE_EXTS:
            candidate = f'{filename}.{ext}'
            if os.path.isfile(os.path.join(IMAGE_DIR, candidate)):
                images.append(candidate)
                break
    return images


def resolve_case_studies(case_studies):
    resolved = []
    for case in case_studies:
        item = dict(case)
        item['image'] = resolve_image(case['image'])
        resolved.append(item)
    return resolved


@app.context_processor
def inject_helpers():
    return dict(resolve_image=resolve_image)


MAINTENANCE_MODE = os.environ.get('MAINTENANCE_MODE', 'false').lower() == 'true'
MAINTENANCE_NOTICE = os.environ.get('MAINTENANCE_NOTICE', 'false').lower() == 'true'
MAINTENANCE_NOTICE_START = os.environ.get('MAINTENANCE_NOTICE_START', '')
MAINTENANCE_NOTICE_END = os.environ.get('MAINTENANCE_NOTICE_END', '')


@app.context_processor
def inject_globals():
    return dict(
        nav_items=NAV_ITEMS,
        current_year=datetime.now().year,
        maintenance_notice=MAINTENANCE_NOTICE,
        maintenance_notice_start=MAINTENANCE_NOTICE_START,
        maintenance_notice_end=MAINTENANCE_NOTICE_END,
    )


@app.route('/')
def home():
    latest_posts = Post.query.order_by(Post.published_at.desc()).limit(3).all()
    return render_template(
        'index.html',
        current_page='home',
        services=data.SERVICES,
        stats=data.STATS,
        case_studies=resolve_case_studies(data.CASE_STUDIES),
        testimonials=data.TESTIMONIALS,
        faqs=data.FAQS,
        blog_posts=latest_posts,
        hero_images=resolve_hero_images(),
    )


@app.route('/about')
def about():
    return render_template(
        'about.html',
        current_page='about',
        values=data.VALUES,
        disciplines=data.DISCIPLINES,
        service_names=data.SERVICE_NAMES,
    )


@app.route('/services')
def services():
    return render_template(
        'services.html',
        current_page='services',
        services=data.SERVICES_DETAILED,
        process=data.PROCESS,
    )


@app.route('/terms')
def terms():
    return render_template('terms.html', current_page='terms')


@app.route('/blog', strict_slashes=False)
def blog():
    posts = Post.query.order_by(Post.published_at.desc()).all()
    return render_template('blog.html', current_page='blog', posts=posts)


@app.route('/blog/<slug>')
def blog_post(slug):
    post = Post.query.filter_by(slug=slug).first_or_404()
    read_time = estimate_read_time(post.content)
    return render_template('post.html', current_page='blog', post=post, read_time=read_time)


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form_status = request.args.get('sent')
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'

    if request.method == 'POST':
        if request.form.get('website'):
            if is_ajax:
                return jsonify(success=True)
            return redirect(url_for('contact', sent='1'))

        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip()
        phone = request.form.get('phone', '').strip()
        service = request.form.get('service', '').strip()
        message = request.form.get('message', '').strip()

        email_valid = re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', email) is not None
        is_valid = bool(name) and bool(message) and email_valid and message.count('http') <= 3

        if is_valid:
            subject = "New enquiry from zitrac.co.zw" + (f" — {service}" if service else "")
            body = (
                f"Name: {name}\n"
                f"Email: {email}\n"
                f"Phone: {phone or '—'}\n"
                f"Service: {service or '—'}\n\n"
                f"Message:\n{message}\n"
            )
            sent = send_contact_email(subject, body, reply_to=email)

            if is_ajax:
                if sent:
                    return jsonify(success=True)
                return jsonify(success=False, error="We couldn't send your message right now — please try again or email us directly."), 500

            return redirect(url_for('contact', sent='1' if sent else '0'))

        if is_ajax:
            return jsonify(success=False, error="Please check your details — something didn't look right."), 400
        return redirect(url_for('contact', sent='0'))

    return render_template(
        'contact.html',
        current_page='contact',
        form_status=form_status,
        service_options=data.SERVICE_OPTIONS,
        quick_contacts=data.QUICK_CONTACTS,
    )


def send_contact_email(subject, body, reply_to):
    if not SMTP_PASS:
        app.logger.warning("SMTP_PASS not set — skipping actual send (dev mode).")
        return False

    msg = MIMEText(body, _charset='utf-8')
    msg['Subject'] = subject
    msg['From'] = f"ZITRAC Website <{SMTP_USER}>"
    msg['To'] = MAIL_TO
    msg['Reply-To'] = reply_to

    try:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, [MAIL_TO], msg.as_string())
        return True
    except Exception as e:
        app.logger.error(f"Failed to send contact email: {e}")
        return False


@app.before_request
def check_maintenance_mode():
    if not MAINTENANCE_MODE:
        return

    path = request.path
    if path.startswith(f'/{ADMIN_PREFIX}') or path.startswith('/static/'):
        return

    return render_template('maintenance.html'), 503


@app.route('/subscribe', methods=['POST'])
def subscribe():
    email = request.form.get('email', '').strip()
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    email_valid = re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', email) is not None

    if not email_valid:
        if is_ajax:
            return jsonify(success=False, error="Please enter a valid email address."), 400
        return redirect(url_for('home'))

    existing = Subscriber.query.filter_by(email=email).first()
    if not existing:
        db.session.add(Subscriber(email=email))
        db.session.commit()
        send_contact_email("New newsletter subscriber", f"New subscriber: {email}", reply_to=email)

    if is_ajax:
        return jsonify(success=True)
    return redirect(url_for('home'))


@app.errorhandler(404)
def handle_404(e):
    return render_template('errors/404.html'), 404


@app.errorhandler(500)
def handle_500(e):
    return render_template('errors/500.html'), 500


if __name__ == '__main__':
    app.run(debug=True)