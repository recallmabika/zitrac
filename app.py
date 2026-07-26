import os
import re
import smtplib
from datetime import datetime
from email.mime.text import MIMEText
import math

from flask import Flask, render_template, request, redirect, url_for, jsonify
from dotenv import load_dotenv

import data
from models import db, Post

from functools import wraps
from flask import session
from werkzeug.utils import secure_filename

load_dotenv()

app = Flask(__name__)
app.url_map.strict_slashes = False
app.secret_key = os.environ.get('FLASK_SECRET_KEY')

MAINTENANCE_FLAG = os.path.join(app.root_path, 'MAINTENANCE_MODE')

@app.before_request
def check_maintenance():
    if os.path.exists(MAINTENANCE_FLAG) and not request.path.startswith('/admin'):
        return render_template('errors/maintenance.html'), 503

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(app.root_path, 'zitrac.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
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
    app.logger.warning(
    )

def estimate_read_time(html_content):
    """Rough word count from HTML content, ~200 words/minute."""
    text = re.sub('<[^<]+?>', '', html_content)  # strip tags
    word_count = len(text.split())
    minutes = max(1, math.ceil(word_count / 200))
    return minutes

IMAGE_DIR = os.path.join(app.root_path, 'static', 'images')
IMAGE_EXTS = ('jpg', 'png', 'jpeg')

ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD')
BLOG_IMAGE_DIR = os.path.join(app.root_path, 'static', 'images', 'blog')
os.makedirs(BLOG_IMAGE_DIR, exist_ok=True)


def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not session.get('is_admin'):
            return redirect(url_for('admin_login', next=request.path))
        return f(*args, **kwargs)
    return decorated


def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

@app.route('/admin')
@app.route('/admin/')
def admin_index():
    return redirect(url_for('admin_posts'))

@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    error = None
    if request.method == 'POST':
        password = request.form.get('password', '')
        if ADMIN_PASSWORD and password == ADMIN_PASSWORD:
            session['is_admin'] = True
            next_url = request.args.get('next') or url_for('admin_posts')
            return redirect(next_url)
        error = 'Incorrect password.'
    return render_template('admin/login.html', error=error)


@app.route('/admin/logout')
def admin_logout():
    session.pop('is_admin', None)
    return redirect(url_for('admin_login'))


@app.route('/admin/posts')
@login_required
def admin_posts():
    posts = Post.query.order_by(Post.published_at.desc()).all()
    return render_template('admin/posts_list.html', posts=posts, active='posts')


@app.route('/admin/posts/new', methods=['GET', 'POST'])
@login_required
def admin_post_new():
    error = None
    if request.method == 'POST':
        error = save_post_from_form(request)
        if not error:
            return redirect(url_for('admin_posts'))
    return render_template('admin/post_form.html', post=None, error=error)


@app.route('/admin/posts/<int:post_id>/edit', methods=['GET', 'POST'])
@login_required
def admin_post_edit(post_id):
    post = Post.query.get_or_404(post_id)
    error = None
    if request.method == 'POST':
        error = save_post_from_form(request, post=post)
        if not error:
            return redirect(url_for('admin_posts'))
    return render_template('admin/post_form.html', post=post, error=error)


@app.route('/admin/posts/<int:post_id>/delete', methods=['POST'])
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
        stem = os.path.splitext(safe_name)[0]
        ext = os.path.splitext(safe_name)[1].lower()
        if ext not in ('.jpg', '.jpeg', '.png'):
            return 'Image must be a JPG or PNG file.'
        final_name = f"{slug}{ext}"
        file.save(os.path.join(BLOG_IMAGE_DIR, final_name))
        image_filename = f"blog/{stem if False else slug}"  # store without extension, matches resolve_image()

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

@app.errorhandler(404)
def not_found(e):
    return render_template('errors/404.html'), 404

@app.errorhandler(500)
def server_error(e):
    return render_template('errors/500.html'), 500


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

@app.context_processor
def inject_globals():
    return dict(nav_items=NAV_ITEMS, current_year=datetime.now().year)

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
            subject = f"New enquiry from zitrac.co.zw" + (f" — {service}" if service else "")
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


if __name__ == '__main__':
    app.run(debug=True)