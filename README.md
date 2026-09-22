# ZITRAC Technologies

ZITRAC's website is split into a static Next.js frontend and a Flask API/admin service.

## Repository layout

- `frontend-nextjs/` — public marketing site. It uses Next.js static export and produces an `out/` directory for deployment.
- `backend-flask/` — Flask API, administration portal, database models, mail delivery, and Cloudflare R2 media upload support.

The former root-level Flask-rendered site has been removed. Deploy the frontend and backend as separate services, with `/api/*` routed to the Flask service.

## Frontend

```bash
cd frontend-nextjs
npm ci
npm run build
```

Publish `frontend-nextjs/out/` to the static web host.

## Backend

```bash
cd backend-flask
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
```

Configure environment variables for the Flask secret, admin credentials, database, SMTP, and (if used) Cloudflare R2. Do not use the development defaults in production.

Run it through the configured WSGI entry point, `passenger_wsgi.py`, or another production WSGI server.

## Deployment

The static host must proxy `/api/*` and the configured admin prefix to the backend Flask service. Keep secrets only in the backend's environment configuration.
