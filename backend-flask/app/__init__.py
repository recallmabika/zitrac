"""
ZITRAC Technologies - Flask Core Application Factory
Initializes database, CORS, and registers API and Admin blueprints.
"""

from flask import Flask
from flask_cors import CORS
from config import Config
from app.models import db, User


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize CORS allowing requests from the frontend static build
    CORS(app, resources={
        r"/api/*": {
            "origins": "*",
            "methods": ["GET", "POST", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    })

    # Initialize SQLAlchemy
    db.init_app(app)

    # Register Public API Blueprint
    from app.routes_api import api_bp
    app.register_blueprint(api_bp)

    # Register Secure Admin Blueprint under ADMIN_URL_PREFIX
    from app.routes_admin import admin_bp
    admin_prefix = app.config.get('ADMIN_URL_PREFIX', '/9879741a6b17ee6c')
    app.register_blueprint(admin_bp, url_prefix=admin_prefix)

    # Root redirect to help verify cPanel setup
    @app.route('/')
    def index():
        return {
            "name": "ZITRAC Technologies Enterprise Application Engine",
            "status": "online",
            "api_endpoints": "/api/health, /api/contact, /api/subscribe, /api/hosting-request",
            "admin_portal": f"{admin_prefix}/login"
        }

    # Automatically create tables if needed
    with app.app_context():
        try:
            db.create_all()
            # Seed superuser if absent
            admin_email = app.config.get('ADMIN_EMAIL')
            admin_pass = app.config.get('ADMIN_PASSWORD')
            if admin_email and not User.query.filter_by(email=admin_email).first():
                superuser = User(
                    username='zitrac_admin',
                    email=admin_email,
                    is_active=True,
                    is_superuser=True
                )
                superuser.set_password(admin_pass or 'BigZITRAC@2029')
                db.session.add(superuser)
                db.session.commit()
        except Exception as exc:
            app.logger.warning(f"Database table verification deferred: {exc}")

    return app
