"""
ZITRAC Technologies - cPanel Passenger WSGI Entry Hook
Mandatory server entrypoint recognized by cPanel 'Setup Python App' utility.
"""

import sys
import os

# Guarantee the application directory is inside Python's system path
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
if CURRENT_DIR not in sys.path:
    sys.path.insert(0, CURRENT_DIR)

from app import create_app

# Expose WSGI application object for Phusion Passenger
application = create_app()

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=5000, debug=False)
