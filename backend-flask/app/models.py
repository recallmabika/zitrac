"""
ZITRAC Technologies - Core Relational Database Models
Architecture: Flask-SQLAlchemy with MySQL / MariaDB backend
Tables: 'users', 'hosting_requests', 'subscriptions'
"""

from datetime import datetime, timezone
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class User(db.Model):
    """
    Administrative verification credentials table.
    Controls authenticated access past the ADMIN_URL_PREFIX route.
    """
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(80), unique=True, nullable=False, index=True)
    email = db.Column(db.String(120), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)
    is_superuser = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        nullable=False
    )
    last_login = db.Column(db.DateTime, nullable=True)

    # Relationship to hosting requests initiated by or assigned to this user
    hosting_requests = db.relationship(
        'HostingRequest',
        backref='user',
        lazy='dynamic',
        cascade='all, delete-orphan'
    )

    def set_password(self, password: str) -> None:
        """Securely encrypts and stores modern hashed password credentials."""
        if not password or len(password) < 8:
            raise ValueError("Password must be at least 8 characters long.")
        self.password_hash = generate_password_hash(password, method='pbkdf2:sha256')

    def check_password(self, password: str) -> bool:
        """Validates input password hash against stored credentials."""
        if not self.password_hash or not password:
            return False
        return check_password_hash(self.password_hash, password)

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'is_active': self.is_active,
            'is_superuser': self.is_superuser,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'last_login': self.last_login.isoformat() if self.last_login else None,
        }

    def __repr__(self) -> str:
        return f"<User {self.username} ({self.email})>"


class HostingRequest(db.Model):
    """
    Tracks client web hosting and .co.zw domain registration orders.
    Logs package tiers, status transitions, and Cloudflare R2 asset links.
    """
    __tablename__ = 'hosting_requests'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id', ondelete='CASCADE'),
        nullable=False,
        index=True
    )
    requested_domain_name = db.Column(db.String(255), nullable=False, index=True)
    selected_hosting_package_tier = db.Column(
        db.String(50),
        nullable=False,
        default='Starter'
    )  # e.g., 'Starter', 'Business', 'Enterprise'
    status_label = db.Column(
        db.String(50),
        nullable=False,
        default='Pending',
        index=True
    )  # 'Pending', 'Approved', 'Fulfilled', 'Completed', 'Cancelled'

    # Contact reference information
    contact_name = db.Column(db.String(120), nullable=True)
    contact_email = db.Column(db.String(120), nullable=True)
    contact_phone = db.Column(db.String(50), nullable=True)

    # Lightweight Cloudflare R2 public URL referencing uploaded contracts/briefs
    attachment_r2_url = db.Column(db.String(500), nullable=True)
    notes = db.Column(db.Text, nullable=True)

    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
        index=True
    )
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False
    )

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'user_id': self.user_id,
            'requested_domain_name': self.requested_domain_name,
            'selected_hosting_package_tier': self.selected_hosting_package_tier,
            'status_label': self.status_label,
            'contact_name': self.contact_name,
            'contact_email': self.contact_email,
            'contact_phone': self.contact_phone,
            'attachment_r2_url': self.attachment_r2_url,
            'notes': self.notes,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
        }

    def __repr__(self) -> str:
        return f"<HostingRequest {self.requested_domain_name} [{self.selected_hosting_package_tier}] - {self.status_label}>"


class Subscription(db.Model):
    """
    Newsletter subscriber and corporate updates table.
    Tracks validated email strings, consent signatures, and delivery permissions.
    """
    __tablename__ = 'subscriptions'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False, index=True)
    is_verified = db.Column(db.Boolean, default=False, nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False, index=True)
    verification_token = db.Column(db.String(100), unique=True, nullable=True)
    source_channel = db.Column(db.String(100), default='website_footer', nullable=False)
    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
        index=True
    )
    verified_at = db.Column(db.DateTime, nullable=True)

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'email': self.email,
            'is_verified': self.is_verified,
            'is_active': self.is_active,
            'source_channel': self.source_channel,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'verified_at': self.verified_at.isoformat() if self.verified_at else None,
        }

    def __repr__(self) -> str:
        return f"<Subscription {self.email} (Active={self.is_active})>"
