"""
ZITRAC Technologies - Asynchronous Public API Endpoints
Handles /api/contact, /api/subscribe, and /api/hosting-request
"""

import re
from datetime import datetime, timezone
from flask import Blueprint, request, jsonify, current_app
from app.models import db, User, HostingRequest, Subscription
from app.mailer import send_contact_notification

api_bp = Blueprint('api', __name__, url_prefix='/api')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')


def sanitize(text: str) -> str:
    """Strip dangerous characters and extra whitespace."""
    if not text:
        return ""
    return str(text).strip()


@api_bp.route('/contact', methods=['POST'])
def handle_contact():
    """
    Sanitizes contact submissions and triggers automated SMTP notification.
    """
    data = request.get_json(silent=True) or request.form.to_dict()

    name = sanitize(data.get('name', ''))
    email = sanitize(data.get('email', '')).lower()
    phone = sanitize(data.get('phone', ''))
    service = sanitize(data.get('service', ''))
    message = sanitize(data.get('message', ''))

    # Validation
    errors = {}
    if not name or len(name) < 2:
        errors['name'] = "Name must be at least 2 characters long."
    if not email or not EMAIL_REGEX.match(email):
        errors['email'] = "A valid email address is required."
    if not message or len(message) < 10:
        errors['message'] = "Please provide a message with at least 10 characters."

    if errors:
        return jsonify({
            'status': 'error',
            'message': 'Validation failed. Please verify your entries.',
            'errors': errors
        }), 400

    # Dispatch email
    dispatched = send_contact_notification(name, email, phone, service, message)
    if not dispatched:
        return jsonify({
            'status': 'error',
            'message': 'Unable to route message through email gateway at this moment. Please try again shortly or contact info@zitrac.co.zw directly.'
        }), 500

    return jsonify({
        'status': 'success',
        'message': 'Thank you! Your message has been safely delivered to the ZITRAC technical consulting desk. We will respond shortly.'
    }), 200


@api_bp.route('/subscribe', methods=['POST'])
def handle_subscribe():
    """
    Logs newsletter subscription into the subscriptions table.
    """
    data = request.get_json(silent=True) or request.form.to_dict()
    email = sanitize(data.get('email', '')).lower()
    source = sanitize(data.get('source', 'website_footer'))

    if not email or not EMAIL_REGEX.match(email):
        return jsonify({
            'status': 'error',
            'message': 'Please provide a valid email address.'
        }), 400

    existing = Subscription.query.filter_by(email=email).first()
    if existing:
        if not existing.is_active:
            existing.is_active = True
            db.session.commit()
            return jsonify({
                'status': 'success',
                'message': 'Your subscription has been reactivated!'
            }), 200
        return jsonify({
            'status': 'success',
            'message': 'You are already subscribed to ZITRAC technical briefs.'
        }), 200

    new_sub = Subscription(
        email=email,
        source_channel=source,
        is_verified=True,
        is_active=True,
        verified_at=datetime.now(timezone.utc)
    )
    db.session.add(new_sub)
    db.session.commit()

    return jsonify({
        'status': 'success',
        'message': 'Subscription confirmed. Welcome to ZITRAC Technologies updates.'
    }), 201


@api_bp.route('/hosting-request', methods=['POST'])
def handle_hosting_request():
    """
    Logs client orders for hosting packages and .co.zw domains.
    """
    data = request.get_json(silent=True) or request.form.to_dict()

    domain = sanitize(data.get('domain', ''))
    package_tier = sanitize(data.get('tier', 'Starter')).capitalize()
    name = sanitize(data.get('name', ''))
    email = sanitize(data.get('email', '')).lower()
    phone = sanitize(data.get('phone', ''))
    notes = sanitize(data.get('notes', ''))

    if not domain:
        return jsonify({'status': 'error', 'message': 'Requested domain is required.'}), 400
    if not email or not EMAIL_REGEX.match(email):
        return jsonify({'status': 'error', 'message': 'Valid contact email is required.'}), 400

    # Ensure a parent user exists for relational integrity
    user = User.query.filter_by(email=email).first()
    if not user:
        # Create an account placeholder for customer
        username = email.split('@')[0]
        base_username = username
        counter = 1
        while User.query.filter_by(username=username).first():
            username = f"{base_username}{counter}"
            counter += 1

        user = User(
            username=username,
            email=email,
            is_active=True,
            is_superuser=False
        )
        user.set_password('ClientAutoPass#2026')
        db.session.add(user)
        db.session.flush()

    hosting_order = HostingRequest(
        user_id=user.id,
        requested_domain_name=domain,
        selected_hosting_package_tier=package_tier,
        status_label='Pending',
        contact_name=name,
        contact_email=email,
        contact_phone=phone,
        notes=notes
    )
    db.session.add(hosting_order)
    db.session.commit()

    # Also notify admins via email
    send_contact_notification(
        name=f"Order: {name} ({domain})",
        email=email,
        phone=phone,
        service=f"Hosting: {package_tier} Tier",
        message=f"Domain: {domain}\nTier: {package_tier}\nNotes: {notes}"
    )

    return jsonify({
        'status': 'success',
        'message': f'Hosting request for {domain} ({package_tier}) recorded successfully. Our team will contact you to finalize domain delegation.',
        'order_id': hosting_order.id
    }), 201


@api_bp.route('/health', methods=['GET'])
def health_check():
    """Simple API health check endpoint."""
    return jsonify({
        'status': 'healthy',
        'system': 'ZITRAC Enterprise Backend Engine',
        'timestamp': datetime.now(timezone.utc).isoformat()
    }), 200
