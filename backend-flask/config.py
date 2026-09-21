"""
ZITRAC Technologies - Backend Configuration Manager
Loads parameters from environment with MySQL and Cloudflare R2 integrations.
"""

import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / '.env')


class Config:
    # Flask Security
    SECRET_KEY = os.getenv('FLASK_SECRET_KEY', 'default-dev-secret-key-zitrac-2026')
    ADMIN_URL_PREFIX = os.getenv('ADMIN_URL_PREFIX', '/9879741a6b17ee6c')
    if not ADMIN_URL_PREFIX.startswith('/'):
        ADMIN_URL_PREFIX = f"/{ADMIN_URL_PREFIX}"

    ADMIN_EMAIL = os.getenv('ADMIN_EMAIL', 'admin@zitrac.co.zw')
    ADMIN_PASSWORD = os.getenv('ADMIN_PASSWORD', 'BigZITRAC@2029')

    # Relational Database Configuration
    USE_MYSQL = os.getenv('USE_MYSQL', 'true').lower() in ('true', '1', 'yes')
    DB_USER = os.getenv('DB_USER', 'zadmin')
    DB_PASSWORD = os.getenv('DB_PASSWORD', os.getenv('DB_PASS', ''))
    DB_HOST = os.getenv('DB_HOST', 'localhost')
    DB_PORT = os.getenv('DB_PORT', '3306')
    DB_NAME = os.getenv('DB_NAME', 'zt2029')

    if USE_MYSQL and DB_PASSWORD:
        SQLALCHEMY_DATABASE_URI = (
            f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}?charset=utf8mb4"
        )
    else:
        # Fallback local sqlite for development if MySQL is unreachable
        instances_dir = BASE_DIR / 'instances'
        instances_dir.mkdir(exist_ok=True)
        SQLALCHEMY_DATABASE_URI = f"sqlite:///{instances_dir / 'zitrac_local.db'}"

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ENGINE_OPTIONS = {
        'pool_recycle': 280,
        'pool_pre_ping': True,
    }

    # SMTP Configuration (TLS / SSL over Port 465)
    SMTP_HOST = os.getenv('SMTP_HOST', 'mail.zitrac.co.zw')
    SMTP_PORT = int(os.getenv('SMTP_PORT', 465))
    SMTP_USER = os.getenv('SMTP_USER', 'no-reply@zitrac.co.zw')
    SMTP_PASS = os.getenv('SMTP_PASS', '')
    MAIL_TO = os.getenv('MAIL_TO', 'info@zitrac.co.zw')

    # Cloudflare R2 Object Storage
    R2_BUCKET_NAME = os.getenv('R2_BUCKET_NAME', 'zitrac-media-vault')
    R2_ACCOUNT_ID = os.getenv('R2_ACCOUNT_ID', '')
    R2_ACCESS_KEY_ID = os.getenv('R2_ACCESS_KEY_ID', '')
    R2_SECRET_ACCESS_KEY = os.getenv('R2_SECRET_ACCESS_KEY', '')
    R2_PUBLIC_DOMAIN = os.getenv('R2_PUBLIC_DOMAIN', 'https://media.zitrac.co.zw')

    @property
    def r2_endpoint_url(self):
        if self.R2_ACCOUNT_ID:
            return f"https://{self.R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
        return None
