"""
ZITRAC Technologies - Secure Admin Dashboard Controls
Mounted strictly under ADMIN_URL_PREFIX.
Features:
- Authentication & Session Controls
- Management for Hosting Requests, Subscriptions, and Admins
- Direct-to-Cloudflare R2 Object Storage streaming via boto3 (Zero local disk writes)
"""

import os
import boto3
from botocore.config import Config as BotoConfig
from functools import wraps
from werkzeug.utils import secure_filename
from flask import (
    Blueprint, render_template_string, request, redirect,
    url_for, session, flash, current_app, jsonify
)
from app.models import db, User, HostingRequest, Subscription

admin_bp = Blueprint('admin', __name__)


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('admin_logged_in'):
            return redirect(url_for('admin.login'))
        return f(*args, **kwargs)
    return decorated_function


def get_r2_client():
    """Build S3-compatible client for Cloudflare R2."""
    config = current_app.config
    endpoint = config.get('r2_endpoint_url')
    access_key = config.get('R2_ACCESS_KEY_ID')
    secret_key = config.get('R2_SECRET_ACCESS_KEY')

    if not endpoint or not access_key or not secret_key:
        return None

    return boto3.client(
        's3',
        endpoint_url=endpoint,
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
        config=BotoConfig(signature_version='s3v4'),
        region_name='auto'
    )


ADMIN_BASE_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ZITRAC Admin Portal</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-gray-100 min-h-screen">
  <nav class="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
    <div class="flex items-center space-x-3">
      <span class="text-xl font-bold text-red-500 tracking-wider">ZITRAC</span>
      <span class="text-xs bg-red-950 text-red-300 px-2 py-1 rounded font-mono">ADMIN ENGINE</span>
    </div>
    {% if session.get('admin_logged_in') %}
    <div class="flex items-center space-x-6 text-sm">
      <a href="{{ url_for('admin.dashboard') }}" class="hover:text-red-400">Dashboard</a>
      <a href="{{ url_for('admin.hosting_orders') }}" class="hover:text-red-400">Hosting Orders</a>
      <a href="{{ url_for('admin.subscriptions_list') }}" class="hover:text-red-400">Subscriptions</a>
      <a href="{{ url_for('admin.media_vault') }}" class="hover:text-red-400">R2 Media Vault</a>
      <a href="{{ url_for('admin.logout') }}" class="text-red-400 hover:text-red-300 font-semibold">Logout</a>
    </div>
    {% endif %}
  </nav>

  <div class="max-w-7xl mx-auto px-6 py-8">
    {% with messages = get_flashed_messages(with_categories=true) %}
      {% if messages %}
        <div class="mb-6 space-y-2">
          {% for category, message in messages %}
            <div class="p-4 rounded text-sm {% if category == 'error' %}bg-red-900/60 border border-red-700 text-red-200{% else %}bg-green-900/60 border border-green-700 text-green-200{% endif %}">
              {{ message }}
            </div>
          {% endfor %}
        </div>
      {% endif %}
    {% endwith %}

    {% block content %}{% endblock %}
  </div>
</body>
</html>
"""


@admin_bp.route('/login', methods=['GET', 'POST'])
def login():
    if session.get('admin_logged_in'):
        return redirect(url_for('admin.dashboard'))

    if request.method == 'POST':
        email = request.form.get('email', '').strip()
        password = request.form.get('password', '')

        user = User.query.filter_by(email=email).first()
        is_fallback_match = (
            email == current_app.config['ADMIN_EMAIL'] and
            password == current_app.config['ADMIN_PASSWORD']
        )

        if (user and user.is_superuser and user.check_password(password)) or is_fallback_match:
            session['admin_logged_in'] = True
            session['admin_email'] = email
            flash('Signed in successfully to ZITRAC Admin Portal.', 'success')
            return redirect(url_for('admin.dashboard'))
        else:
            flash('Invalid admin credentials provided.', 'error')

    template = ADMIN_BASE_TEMPLATE + """
    {% block content %}
    <div class="max-w-md mx-auto mt-16 bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-2xl">
      <h2 class="text-2xl font-bold mb-2 text-white">System Authentication</h2>
      <p class="text-gray-400 text-sm mb-6">Restricted administrative access point.</p>
      <form method="POST" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold uppercase text-gray-400 mb-1">Admin Email</label>
          <input type="email" name="email" required class="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-600">
        </div>
        <div>
          <label class="block text-xs font-semibold uppercase text-gray-400 mb-1">Password</label>
          <input type="password" name="password" required class="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-600">
        </div>
        <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded transition">Authenticate</button>
      </form>
    </div>
    {% endblock %}
    """
    return render_template_string(template)


@admin_bp.route('/logout')
def logout():
    session.clear()
    flash('Logged out safely.', 'success')
    return redirect(url_for('admin.login'))


@admin_bp.route('/')
@admin_bp.route('/dashboard')
@login_required
def dashboard():
    total_orders = HostingRequest.query.count()
    pending_orders = HostingRequest.query.filter_by(status_label='Pending').count()
    total_subs = Subscription.query.count()
    recent_orders = HostingRequest.query.order_by(HostingRequest.created_at.desc()).limit(5).all()

    template = ADMIN_BASE_TEMPLATE + """
    {% block content %}
    <div class="mb-8 flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold text-white">Operation Dashboard</h1>
        <p class="text-gray-400 text-sm">ZITRAC Core cPanel Application Engine</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div class="text-sm text-gray-400 font-medium uppercase">Pending Hosting Orders</div>
        <div class="text-3xl font-bold text-red-500 mt-2">{{ pending_orders }}</div>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div class="text-sm text-gray-400 font-medium uppercase">Total Hosting Requests</div>
        <div class="text-3xl font-bold text-white mt-2">{{ total_orders }}</div>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div class="text-sm text-gray-400 font-medium uppercase">Newsletter Subscribers</div>
        <div class="text-3xl font-bold text-green-400 mt-2">{{ total_subs }}</div>
      </div>
    </div>

    <div class="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <h2 class="text-lg font-bold text-white mb-4">Recent Hosting & Domain Registrations</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-900/50 text-gray-400 uppercase text-xs">
            <tr>
              <th class="p-3">Domain</th>
              <th class="p-3">Package Tier</th>
              <th class="p-3">Contact</th>
              <th class="p-3">Status</th>
              <th class="p-3">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-700">
            {% for req in recent_orders %}
            <tr>
              <td class="p-3 font-medium text-white">{{ req.requested_domain_name }}</td>
              <td class="p-3">{{ req.selected_hosting_package_tier }}</td>
              <td class="p-3 text-gray-300">{{ req.contact_email or 'N/A' }}</td>
              <td class="p-3"><span class="px-2 py-0.5 rounded text-xs {% if req.status_label == 'Pending' %}bg-yellow-900/60 text-yellow-300{% elif req.status_label == 'Approved' %}bg-blue-900/60 text-blue-300{% else %}bg-green-900/60 text-green-300{% endif %}">{{ req.status_label }}</span></td>
              <td class="p-3 text-gray-400">{{ req.created_at.strftime('%Y-%m-%d %H:%M') }}</td>
            </tr>
            {% else %}
            <tr><td colspan="5" class="p-4 text-center text-gray-500">No hosting orders registered yet.</td></tr>
            {% endfor %}
          </tbody>
        </table>
      </div>
    </div>
    {% endblock %}
    """
    return render_template_string(
        template,
        total_orders=total_orders,
        pending_orders=pending_orders,
        total_subs=total_subs,
        recent_orders=recent_orders
    )


@admin_bp.route('/hosting-orders')
@login_required
def hosting_orders():
    orders = HostingRequest.query.order_by(HostingRequest.created_at.desc()).all()
    template = ADMIN_BASE_TEMPLATE + """
    {% block content %}
    <h1 class="text-2xl font-bold text-white mb-6">Client Hosting & Domain Requests</h1>
    <div class="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <table class="w-full text-left text-sm">
        <thead class="bg-gray-900/50 text-gray-400 uppercase text-xs">
          <tr>
            <th class="p-4">ID</th>
            <th class="p-4">Domain</th>
            <th class="p-4">Tier</th>
            <th class="p-4">Contact</th>
            <th class="p-4">Attachment</th>
            <th class="p-4">Status</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-700">
          {% for r in orders %}
          <tr>
            <td class="p-4 font-mono text-gray-400">#{{ r.id }}</td>
            <td class="p-4 font-bold text-white">{{ r.requested_domain_name }}</td>
            <td class="p-4"><span class="bg-gray-700 px-2 py-0.5 rounded text-xs">{{ r.selected_hosting_package_tier }}</span></td>
            <td class="p-4">
              <div>{{ r.contact_name or 'N/A' }}</div>
              <div class="text-xs text-gray-400">{{ r.contact_email }}</div>
            </td>
            <td class="p-4">
              {% if r.attachment_r2_url %}
                <a href="{{ r.attachment_r2_url }}" target="_blank" class="text-blue-400 hover:underline text-xs">View Asset &rarr;</a>
              {% else %}
                <span class="text-gray-500 text-xs">None</span>
              {% endif %}
            </td>
            <td class="p-4">
              <form method="POST" action="{{ url_for('admin.update_order_status', order_id=r.id) }}" class="flex items-center space-x-2">
                <select name="status" class="bg-gray-900 text-xs border border-gray-700 rounded px-2 py-1 text-white">
                  <option value="Pending" {% if r.status_label == 'Pending' %}selected{% endif %}>Pending</option>
                  <option value="Approved" {% if r.status_label == 'Approved' %}selected{% endif %}>Approved</option>
                  <option value="Fulfilled" {% if r.status_label == 'Fulfilled' %}selected{% endif %}>Fulfilled</option>
                  <option value="Completed" {% if r.status_label == 'Completed' %}selected{% endif %}>Completed</option>
                  <option value="Cancelled" {% if r.status_label == 'Cancelled' %}selected{% endif %}>Cancelled</option>
                </select>
                <button type="submit" class="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs">Save</button>
              </form>
            </td>
            <td class="p-4">
              <form method="POST" action="{{ url_for('admin.delete_order', order_id=r.id) }}" onsubmit="return confirm('Delete this hosting request record?');">
                <button type="submit" class="text-red-400 hover:text-red-300 text-xs">Delete</button>
              </form>
            </td>
          </tr>
          {% else %}
          <tr><td colspan="7" class="p-6 text-center text-gray-500">No hosting orders found.</td></tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
    {% endblock %}
    """
    return render_template_string(template, orders=orders)


@admin_bp.route('/hosting-orders/<int:order_id>/update-status', methods=['POST'])
@login_required
def update_order_status(order_id):
    req = HostingRequest.query.get_or_404(order_id)
    new_status = request.form.get('status', req.status_label)
    req.status_label = new_status
    db.session.commit()
    flash(f"Order #{order_id} updated to {new_status}.", 'success')
    return redirect(url_for('admin.hosting_orders'))


@admin_bp.route('/hosting-orders/<int:order_id>/delete', methods=['POST'])
@login_required
def delete_order(order_id):
    req = HostingRequest.query.get_or_404(order_id)
    db.session.delete(req)
    db.session.commit()
    flash(f"Order #{order_id} removed.", 'success')
    return redirect(url_for('admin.hosting_orders'))


@admin_bp.route('/subscriptions')
@login_required
def subscriptions_list():
    subs = Subscription.query.order_by(Subscription.created_at.desc()).all()
    template = ADMIN_BASE_TEMPLATE + """
    {% block content %}
    <h1 class="text-2xl font-bold text-white mb-6">Newsletter Subscriptions</h1>
    <div class="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <table class="w-full text-left text-sm">
        <thead class="bg-gray-900/50 text-gray-400 uppercase text-xs">
          <tr>
            <th class="p-4">ID</th>
            <th class="p-4">Email</th>
            <th class="p-4">Channel</th>
            <th class="p-4">Active</th>
            <th class="p-4">Subscribed At</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-700">
          {% for s in subs %}
          <tr>
            <td class="p-4 font-mono text-gray-400">#{{ s.id }}</td>
            <td class="p-4 font-medium text-white">{{ s.email }}</td>
            <td class="p-4 text-gray-300">{{ s.source_channel }}</td>
            <td class="p-4"><span class="px-2 py-0.5 rounded text-xs {% if s.is_active %}bg-green-900/60 text-green-300{% else %}bg-red-900/60 text-red-300{% endif %}">{{ 'Active' if s.is_active else 'Inactive' }}</span></td>
            <td class="p-4 text-gray-400">{{ s.created_at.strftime('%Y-%m-%d %H:%M') }}</td>
          </tr>
          {% else %}
          <tr><td colspan="5" class="p-6 text-center text-gray-500">No subscribers registered yet.</td></tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
    {% endblock %}
    """
    return render_template_string(template, subs=subs)


@admin_bp.route('/media-vault', methods=['GET', 'POST'])
@login_required
def media_vault():
    """
    Direct-to-Cloudflare R2 Object Storage streaming.
    Completely bypasses local disk writes to keep cPanel quota clean.
    """
    uploaded_url = None
    if request.method == 'POST':
        file = request.files.get('file')
        if not file or file.filename == '':
            flash('Please select a file to upload.', 'error')
        else:
            filename = secure_filename(file.filename)
            r2_client = get_r2_client()
            bucket_name = current_app.config.get('R2_BUCKET_NAME')
            public_domain = current_app.config.get('R2_PUBLIC_DOMAIN', '').rstrip('/')

            if not r2_client or not bucket_name:
                flash('Cloudflare R2 credentials are not fully configured in .env.', 'error')
            else:
                try:
                    # Stream directly to R2 memory buffer without saving to cPanel disk
                    r2_client.upload_fileobj(
                        file.stream,
                        bucket_name,
                        f"uploads/{filename}",
                        ExtraArgs={'ContentType': file.content_type or 'application/octet-stream'}
                    )
                    uploaded_url = f"{public_domain}/uploads/{filename}"
                    flash(f"Asset successfully streamed directly to Cloudflare R2: {uploaded_url}", 'success')
                except Exception as exc:
                    flash(f"R2 Upload failed: {exc}", 'error')

    template = ADMIN_BASE_TEMPLATE + """
    {% block content %}
    <h1 class="text-2xl font-bold text-white mb-2">Cloudflare R2 Media Vault</h1>
    <p class="text-gray-400 text-sm mb-6">Streams media directly to external S3-compatible storage. Zero cPanel disk consumption.</p>

    <div class="bg-gray-800 rounded-lg border border-gray-700 p-6 max-w-xl">
      <form method="POST" enctype="multipart/form-data" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold uppercase text-gray-400 mb-2">Select Asset (Image / PDF / Document)</label>
          <input type="file" name="file" required class="w-full bg-gray-900 border border-gray-700 rounded p-2 text-sm text-gray-300">
        </div>
        <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded text-sm transition">Stream directly to Cloudflare R2</button>
      </form>

      {% if uploaded_url %}
      <div class="mt-6 p-4 bg-gray-900 rounded border border-gray-700">
        <div class="text-xs text-gray-400 uppercase font-semibold mb-1">Generated Public R2 Asset URL</div>
        <input type="text" readonly value="{{ uploaded_url }}" class="w-full bg-gray-800 text-xs text-green-400 p-2 rounded border border-gray-700 select-all font-mono">
      </div>
      {% endif %}
    </div>
    {% endblock %}
    """
    return render_template_string(template, uploaded_url=uploaded_url)
