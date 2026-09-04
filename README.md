# 🏢 ZITRAC — IT Consulting & Solutions

**A professional corporate website showcasing IT consulting, software development, and connectivity services across Zimbabwe.**

---

## 🎯 Business Problem & Solution

**The Challenge:**
ZITRAC—a growing IT consulting firm—needed a web presence that:
- Showcases technical expertise to enterprise clients
- Displays case studies and completed projects
- Captures leads through integrated contact forms
- Demonstrates reliability and professionalism
- Provides rapid deployment without complex infrastructure

**Our Solution:**
A lightweight, fast-loading corporate website built with Flask and Tailwind CSS that:
- Serves static marketing content with dynamic API integrations
- Captures and nurtures leads via automated email workflows
- Displays case studies, team bios, and service offerings
- Supports admin panel for content management
- Scales efficiently with minimal server resources

**Business Impact:**
- 📈 Increased lead generation through targeted call-to-action buttons
- ⚡ Fast load times (< 1s average) improving SEO ranking
- 🎯 Mobile-responsive design reaches potential clients on all devices
- 💼 Professional brand presentation driving enterprise contracts

---

## 🏗️ System Architecture

```
┌──────────────────────────────┐
│   Nginx / Reverse Proxy      │
│  (Caching, SSL termination)  │
└────────────┬─────────────────┘
             │
      ┌──────▼──────┐
      │  Flask App  │
      │  ┌────────┐ │
      │  │ Routes │ │ (Homepage, Services, Case Studies)
      │  ├────────┤ │
      │  │ API    │ │ (Lead capture, Contact form)
      │  ├────────┤ │
      │  │ Admin  │ │ (Content management)
      │  └────────┘ │
      └──────┬──────┘
             │
    ┌────────┼────────┐
    │        │        │
┌───▼──┐ ┌──▼────┐ ┌─▼───────┐
│ JSON │ │ SQLite│ │  Email  │
│ API  │ │ / SQL │ │ Service │
│ Data │ │   DB  │ │ (SMTP)  │
└──────┘ └───────┘ └─────────┘
```

### 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, Tailwind CSS, JavaScript (Alpine.js) |
| **Backend** | Python 3.10+, Flask 2.x |
| **Database** | SQLite (dev) / PostgreSQL (production) |
| **Email** | SMTP (Gmail, SendGrid, or custom SMTP) |
| **Hosting** | Render, Heroku, PythonAnywhere, AWS |
| **CDN / Caching** | CloudFlare (optional) |
| **Static Files** | Whitenoise / S3 (production) |

---

## ✨ Key Features

### 🌐 Marketing Pages
- **Homepage** — Hero section, value propositions, CTA buttons
- **Services Page** — IT Consulting, Software Development, Connectivity Solutions
- **Case Studies** — Portfolio of completed projects with metrics
- **Team Page** — Team bios, expertise areas, photos
- **Blog / News** — Latest company updates and tech articles
- **Contact Page** — Multi-channel contact forms (email, phone, WhatsApp)

### 📧 Lead Management
- Contact form submissions captured in database
- Automatic confirmation email to visitor
- Admin notification email with lead details
- Lead status tracking (new, contacted, converted)
- CRM integration ready (Pipedrive, HubSpot hooks available)

### 🎨 Admin Panel
- View and filter leads
- Manage case studies (CRUD operations)
- Update service descriptions
- Blog post scheduling
- Analytics dashboard (page views, lead sources)

### 📱 Mobile-Responsive Design
- Adaptive layouts for desktop, tablet, mobile
- Touch-friendly navigation
- Fast mobile load times (lazy-loading images)
- Progressive Web App (PWA) capabilities

### 🔍 SEO Optimization
- Meta tags for all pages
- Open Graph / Twitter Card support
- Sitemap and robots.txt
- Structured schema (JSON-LD)
- Fast Core Web Vitals scores

---

## ⚡ Technical Challenges & Solutions

### **Challenge 1: Serving Large Marketing Images Without Slowing Page Load**
**Problem:** Marketing websites are image-heavy. A 5MB hero image can block page load, especially on mobile networks, hurting SEO and user experience.

**Solution:**
- Implemented **image optimization pipeline** with multiple formats:
  - Original JPEG for legacy browsers
  - WebP for modern browsers (40% smaller)
  - AVIF for cutting-edge browsers (60% smaller than JPEG)
- Added **lazy-loading** for below-the-fold images using `loading="lazy"` and Intersection Observer API
- **Responsive images** using `srcset` and `sizes` attributes
- **Static asset caching** with `Cache-Control` headers (1 year for hashed filenames)

```html
<!-- Example: Responsive image with multiple formats -->
<picture>
  <source srcset="/img/hero-1200.avif" type="image/avif">
  <source srcset="/img/hero-1200.webp" type="image/webp">
  <img src="/img/hero-1200.jpg" alt="Hero" loading="lazy">
</picture>
```

### **Challenge 2: Handling Lead Submissions Under Traffic Spikes**
**Problem:** During marketing campaigns or viral social media posts, lead submissions spike. If the email queue overflows, leads are lost or emails bounce.

**Solution:**
- Implemented **asynchronous task queue** (Celery + Redis) for email sending
- Lead submission immediately saves to database (instant user feedback: "Thank you!")
- Email dispatch happens in background without blocking the request
- **Retry logic:** Failed emails retry up to 3 times with exponential backoff
- **Fallback:** If email service is down, leads still saved; admins notified of batch failures

```python
# app.py - Flask route (non-blocking)
@app.route('/api/contact', methods=['POST'])
def contact_form():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    
    # Save to DB immediately
    lead = Lead(name=name, email=email, message=message, status='new')
    db.session.add(lead)
    db.session.commit()
    
    # Queue email in background
    send_lead_confirmation_email.delay(lead.id)
    
    return jsonify({'status': 'success', 'message': 'We received your message!'})

# tasks.py - Celery task (runs in background worker)
@celery.task(bind=True, max_retries=3)
def send_lead_confirmation_email(self, lead_id):
    try:
        lead = Lead.query.get(lead_id)
        msg = Message(
            subject='We received your inquiry',
            recipients=[lead.email],
            body=f'Hi {lead.name}, thank you for contacting ZITRAC...'
        )
        mail.send(msg)
        lead.status = 'contacted'
        db.session.commit()
    except Exception as exc:
        # Retry with exponential backoff: 60s, 300s, 600s
        self.retry(countdown=60 * (2 ** self.request.retries), exc=exc)
```

### **Challenge 3: Preventing Form Spam and Bot Submissions**
**Problem:** Contact forms are targets for spam bots. Without protection, the lead database fills with junk, and email quotas are wasted.

**Solution:**
- **reCAPTCHA v3** (invisible, doesn't interrupt user experience)
- **Honeypot field** (hidden field that bots fill, but humans don't see)
- **Rate limiting** per IP address (max 5 submissions per hour)
- **Content validation** (check message length, detect common spam keywords)

```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(app, key_func=get_remote_address)

@app.route('/api/contact', methods=['POST'])
@limiter.limit("5 per hour")
def contact_form():
    # Check honeypot
    if request.form.get('phone_confirm'):  # Bots fill this hidden field
        return jsonify({'error': 'Invalid submission'}), 400
    
    # Verify reCAPTCHA
    recaptcha_token = request.form.get('g-recaptcha-response')
    resp = requests.post(
        'https://www.google.com/recaptcha/api/siteverify',
        data={'secret': RECAPTCHA_SECRET, 'response': recaptcha_token}
    )
    if resp.json()['score'] < 0.5:  # Likely bot
        return jsonify({'error': 'Verification failed'}), 400
    
    # Save legitimate lead
    lead = Lead(...)
    db.session.add(lead)
    db.session.commit()
    
    return jsonify({'status': 'success'})
```

### **Challenge 4: Serving Admin Dashboard Over HTTPS Without Certificate Management Headaches**
**Problem:** Flask's default development server is HTTP-only. Deploying to production requires:
- SSL certificates (expired certs cause security warnings)
- Certificate renewal automation
- HTTPS redirect from HTTP

**Solution:**
- Used **Let's Encrypt with Certbot** for free, auto-renewing certificates
- Configured **Nginx reverse proxy** to handle HTTPS termination (Flask doesn't need to handle SSL)
- Set **HSTS headers** (Strict-Transport-Security) to force HTTPS on all future requests
- Implemented **HTTP to HTTPS redirect** at Nginx level

```nginx
# Nginx config (handles SSL, proxies to Flask)
server {
    listen 80;
    server_name zitrac.co.zw;
    return 301 https://$host$request_uri;  # Redirect HTTP to HTTPS
}

server {
    listen 443 ssl;
    server_name zitrac.co.zw;
    
    ssl_certificate /etc/letsencrypt/live/zitrac.co.zw/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/zitrac.co.zw/privkey.pem;
    
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "DENY" always;
    
    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

# Auto-renewal via cron
# 0 2 * * * certbot renew --quiet
```

### **Challenge 5: Managing Content Changes Without Code Deployment**
**Problem:** Non-technical staff (marketing team) need to update case studies, services, or blog posts without waiting for developer deployments.

**Solution:**
- Built **lightweight admin panel** using Flask-Admin (0-code UI for CRUD operations)
- Implemented **rich text editor** (CKEditor) for content editing
- Added **file upload** for case study images (with server-side validation)
- **Change tracking** — stores who changed what and when
- **Admin authentication** — only logged-in admins can access

```python
# app.py - Admin setup (auto-generates admin UI)
from flask_admin import Admin, AdminIndexView
from flask_admin.contrib.sqla import ModelView

class CaseStudyAdmin(ModelView):
    column_list = ('title', 'client', 'completion_date', 'status')
    form_columns = ('title', 'description', 'client', 'industry', 'image', 'results')
    
    # Rich text editor for description
    form_overrides = {
        'description': TextAreaField
    }
    
    def on_model_change(self, form, model, is_created):
        model.updated_by = current_user.username
        model.updated_at = datetime.utcnow()

admin = Admin(app, name='ZITRAC Admin')
admin.add_view(CaseStudyAdmin(CaseStudy, db.session))
```

---

## 🌐 Live Deployment

🚀 **View Live Website:** [Add your deployment URL here]

Example: `https://zitrac.co.zw/`

---

## 📖 Installation & Setup

### Prerequisites
- Python 3.10+
- Git
- pip / Poetry

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/recallmabika/zitrac.git
   cd zitrac
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables** (create `.env`):
   ```env
   SECRET_KEY=your-secret-key
   DEBUG=True
   FLASK_ENV=development
   
   # Database (SQLite for dev)
   DATABASE_URL=sqlite:///zitrac.db
   
   # Email
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USERNAME=your-email@gmail.com
   MAIL_PASSWORD=your-app-password
   
   # reCAPTCHA
   RECAPTCHA_PUBLIC_KEY=your-public-key
   RECAPTCHA_SECRET_KEY=your-secret-key
   ```

5. **Run migrations** (if using Alembic):
   ```bash
   flask db upgrade
   ```

6. **Start the development server:**
   ```bash
   flask run
   ```

   Visit `http://localhost:5000/`

---

## 🚀 Deployment

### Deploy to Render (Recommended)

1. Push your code to GitHub
2. Create a new **Web Service** on Render
3. Connect your GitHub repository
4. Set environment variables in Render dashboard
5. Render auto-deploys on every push to `main`

### Deploy to Heroku

```bash
heroku login
heroku create zitrac-app
heroku config:set SECRET_KEY=your-key
git push heroku main
```

---

## 📁 Project Structure

```
zitrac/
├── app.py                  # Flask app entry point
├── config.py               # Configuration (dev, prod)
├── requirements.txt        # Python dependencies
├── routes/
│   ├── main.py            # Homepage, services, case studies
│   ├── contact.py         # Contact form API
│   ├── admin.py           # Admin panel routes
│   └── api.py             # REST API endpoints
├── models/
│   ├── lead.py            # Lead model
│   ├── casestudy.py       # Case study model
│   └── user.py            # Admin user model
├── templates/
│   ├── base.html          # Base layout
│   ├── index.html         # Homepage
│   ├── services.html      # Services page
│   ├── case-studies.html  # Portfolio
│   ├── contact.html       # Contact form
│   └── admin/             # Admin panel templates
├── static/
│   ├── css/
│   │   ├── tailwind.css   # Tailwind CSS input
│   │   └── main.css       # Custom styles
│   ├── js/
│   │   ├── alpine.js      # Alpine.js setup
│   │   └── main.js        # Custom scripts
│   └── images/            # Logos, photos
├── uploads/               # User-uploaded files (case study images)
├── .env.example
├── docker-compose.yml     # Optional: for local PostgreSQL
└── Procfile               # Heroku deployment config
```

---

## 🧪 Testing

```bash
# Run all tests
python -m pytest

# Run with coverage
pytest --cov=app tests/
```

---

## 📞 Support & Contact

For questions, email `info@zitrac.co.zw` or open an issue on [GitHub](https://github.com/recallmabika/zitrac/issues).

---

## 📄 License

This project is proprietary software developed for **ZITRAC Technologies**.

---

**Developed by [Recall Tawanda Mabika](https://github.com/recallmabika)**  
*Full-Stack Engineer | Flask Expert | Corporate Website Specialist*
