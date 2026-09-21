# System Instructions: Full Hybrid Stack Web Application Architecture
**Target Brand:** ZITRAC Technologies  
**Target Environment:** cPanel Hosting Platform (`public_html` & Private Directories)  
**Core Metrics:** Sub-second Page Rendering, 100/100 Technical SEO Performance, Universal Accessibility (a11y), Extensible Client App Matrix  
**Database Infrastructure:** Local MySQL / MariaDB  
**Asset Management Vault:** External Cloudflare R2 Object Storage (S3-Compatible API)  
**Mail Gateway Integration:** Secure SMTP (`mail.zitrac.co.zw` via TLS Port 465)

---

## 1. Approved Technical Stack & Deployment Blueprint

The AI Agent must partition development into a cohesive **Split-Architecture Blueprint** tailored to maximize the capabilities of standard cPanel hosting with Python application runtimes:

1. **The Public SEO Frontend Layer (Next.js + Tailwind CSS):** Compiles down via `output: 'export'` into flat static HTML, CSS, and lightweight JS. These assets sit natively inside the cPanel `public_html` root directory, forcing extreme loading speeds and instant crawlability for search engines.
2. **The App Controller & Backend Engine (Python Flask):** Deployed via cPanel's **"Setup Python App"** tool. It executes server-side computations, securely runs custom database operations under the specified `ADMIN_URL_PREFIX`, manages active mailing queues, and updates transaction states without introducing rendering latency to public visitors.

---

## 2. Directory Tree Layout (`zitrac-directory-tree.md`)

The AI Agent must structure the codebase strictly adhering to the file layout below to isolate marketing components from private backend application models:

```text
zitrac-project/
├── frontend-nextjs/               # Next.js 15+ Source Code Directory
│   ├── app/
│   │   ├── layout.js              # Global HTML structural setup & Open Graph handlers
│   │   ├── page.js                # Core Homepage marketing hub (ISR compiled)
│   │   ├── about/
│   │   │   └── page.js            # Corporate profile (Trust/Authority signals)
│   │   ├── contact/
│   │   │   └── page.js            # Accessible web contact layout with local schema
│   │   └── services/
│   │       ├── page.js            # Main services categorical index view
│   │       ├── it-consulting/
│   │       │   └── page.js        # IT Consulting high-intent page view
│   │       ├── web-design-development/
│   │       │   └── page.js        # Web Design niche page view
│   │       ├── software-development/
│   │       │   └── page.js        # Software Development page view (AI integrated)
│   │       ├── web-hosting-domain-registration/
│   │       │   └── page.js        # Web Hosting & Domain registration page view
│   │       └── cyber-security/
│   │           └── page.js        # Cyber Security advanced threat page view
│   ├── public/
│   │   └── assets/                # Static local interface components & branding marks
│   ├── next.config.mjs            # Hardcoded static export rules (output: 'export')
│   └── tailwind.config.js         # CSS configuration file enforcing dead-code pruning
│
├── backend-flask/                 # Private Python Backend Application Directory
│   ├── app/
│   │   ├── __init__.py            # Flask core registration & blueprint hooks
│   │   ├── models.py              # Relational MySQL tables definition (SQLAlchemy)
│   │   ├── routes_api.py          # Asynchronous endpoints processing form requests
│   │   ├── routes_admin.py        # Secure admin dashboard controls (ADMIN_URL_PREFIX)
│   │   └── mailer.py              # SMTP SSL delivery controller module
│   ├── instances/
│   ├── config.py                  # Environment parsing scripts
│   ├── passenger_wsgi.py          # Mandatory cPanel WSGI server entry hook
│   └── requirements.txt           # Explicit Python component locks (Flask, SQLAlchemy)
│
└── output-production-build/       # Compiled production files ready for cPanel
    ├── frontend.zip               # Contents of Next.js '/out' dropped into public_html
    └── backend.zip                # Flask runtime code extracted above public_html
```

---

## 3. Page Routing, Keyword Maps, & CMS Field Injections

The AI Agent must map metadata and heading arrays precisely to match verified corporate footprints. All text fields must be pulled from the headless CMS (`Sanity.io`) and injected into the static code layout at build time:

### 1. Homepage Hub (`app/page.js`)
* **Page Title:** `Managed IT Services & Software Development Zimbabwe | ZITRAC`
* **Meta Description:** `Partner with ZITRAC Technologies, a leading IT consulting firm in Zimbabwe. We deliver enterprise software development, cybersecurity, and hosting solutions.`
* **H1 Main Heading:** `Enterprise IT Consulting and Custom Software Development in Zimbabwe`
* **Target Core Copy Block:** At ZITRAC Technologies, we bridge the gap between complex computing concepts and active enterprise deployment. As a premier **IT support company in Zimbabwe**, we engineer bespoke technological solutions designed to streamline workflows, protect digital assets, and drive operational efficiency. From our engineering hub, our **tech consultants in Harare** provide end-to-end management of corporate networks, cloud computing transitions, and full-stack systems built to stay working.

### 2. IT Consulting Directory (`app/services/it-consulting/page.js`)
* **Page Title:** `Professional IT Consultant & Technical Support Zimbabwe | ZITRAC`
* **Meta Description:** `Maximize operational efficiency with ZITRAC Technologies, a premier IT consultant firm in Zimbabwe. We translate theoretical knowledge into practical tech solutions.`
* **H1 Main Heading:** `Practical IT Consulting Services for Businesses Across Zimbabwe`

### 3. Web Design & Development Directory (`app/services/web-design-development/page.js`)
* **Page Title:** `Custom Web Design & Development Services Harare | ZITRAC`
* **Meta Description:** `Get fast, reliable, custom-made websites. ZITRAC delivers high-converting web design and development solutions for businesses throughout Zimbabwe.`
* **H1 Main Heading:** `Tailored Web Design and Full-Stack Development Solutions`

### 4. Software Development Directory (`app/services/software-development/page.js`)
* **Page Title:** `Custom Software Development Companies in Zimbabwe | ZITRAC`
* **Meta Description:** `Scale your business operations with custom software development integrated with artificial intelligence. Explore advanced software solutions with ZITRAC.`
* **H1 Main Heading:** `Enterprise Software Development with Artificial Intelligence Integration`
* **Semantic Instruction:** Explicitly emphasize **AI implementation** and business flow automation directly within the structural copy fields.

### 5. Web Hosting & Domain Registration Directory (`app/services/web-hosting-domain-registration/page.js`)
* **Page Title:** `Fast Web Hosting and Domain Registration Zimbabwe | ZITRAC`
* **Meta Description:** `Secure your digital visibility. ZITRAC offers fast, reliable web hosting packages and local .co.zw domain registration services for local businesses.`
* **H1 Main Heading:** `Reliable Web Hosting Packages and Domain Registration`

### 6. Cyber Security Directory (`app/services/cyber-security/page.js`)
* **Page Title:** `Enterprise Cyber Security Company in Zimbabwe | ZITRAC`
* **Meta Description:** `Protect your corporate data assets. ZITRAC leverages advanced AI automated watchdogs to deliver comprehensive cyber security solutions.`
* **H1 Main Heading:** `Advanced Cyber Security and Automated Threat Mitigation`
* **Semantic Instruction:** Incorporate descriptions referencing **AI automated threat detection watchdogs** guarding data bounds.

---

## 4. Technical SEO Automation & Social Optimization

* **Automated XML Mapping:** The AI Agent must embed an automation script within the Next.js compilation chain. Every build run must generate a valid `sitemap.xml` file containing all dynamic CMS paths, written directly to the `/out` directory root.
* **Open Graph (OG) Isolation:** Inject explicit metadata protocols into the head architecture. Every page layout must output unique semantic social parameters:
  * `og:type` forced to `website`.
  * `og:site_name` set hard to `ZITRAC Technologies`.
  * `og:url` dynamically mapping the strict path using clean trailing slashes.
  * `og:image` linking to a dedicated `1200x630` pixel image element unique to that service path, pulled straight from Cloudflare R2.

---

## 5. Accessibility Rules & Interactive Form Controls

The AI Agent must configure all input fields against absolute screen-reader rules:
* **Explicit Label Mapping:** Placeholders inside text entries are completely banned as accessible references. Every text box, input dropdown, and text area element must be bound to a distinct visual `<label>` node using matching `htmlFor` properties.
* **Live Error State Tracking:** Any structural processing validation errors shown on the interface must carry an `aria-live="assertive"` property container to alert assistive reading tools instantly.
* **Keyboard Focus Visibility:** To ensure users can traverse the entire site using only a keyboard, every interactive contact, purchase button, and input element must force high-contrast focus lines via Tailwind: `focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2`.

---

## 6. Backend API Data Schemas & External Infrastructure

### 1. Database Table Configurations (MySQL/MariaDB)
The AI Agent must connect the Flask engine using SQLAlchemy to construct and track three internal relational datasets automatically:
* `subscriptions`: Holds unique subscriber strings, email address logs, verification markers, and submission date signatures.
* `hosting_requests`: Manages incoming user package requests. Must track `user_id`, `requested_domain_name`, `selected_hosting_package_tier` (e.g., Starter, Business, Enterprise), `status_label` (e.g., *Pending, Approved, Fulfilled*), and processing timestamps.
* `users`: Stores admin-level verification credentials, securely encrypted via modern password-hashing scripts (like `bcrypt` or `PBKDF2`).

### 2. External Cloudflare R2 Media Integration
* **Disk Bypass Automation:** When the administrative dashboard (`ADMIN_URL_PREFIX`) or a client uploads portfolios, contract specifications, or image/video media, the Flask backend must intercept the binary sequence and stream it immediately to **Cloudflare R2 Object Storage** via an S3-compatible script pipeline (`boto3`).
* **Text Tracking:** The server must bypass local disk write-actions entirely, extracting only the resulting public asset URL string and writing that lightweight link record directly into the local MySQL database instance.

### 3. Asynchronous SMTP Contact Automation
When a user posts details to the contact interface layout:
1. The Next.js client transmits an asynchronous AJAX post request straight to the Python application's `/api/contact` controller.
2. The Flask framework parses the text, checks parameters against security criteria, and routes an automated transmission over TLS using your exact credentials: `SMTP_HOST=mail.zitrac.co.zw`, `SMTP_PORT=465`, `SMTP_USER=no-reply@zitrac.co.zw`.
3. The email system sends a structured corporate lead summary instantly to `info@zitrac.co.zw`, while returning a confirmation state to the user's interface layout within milliseconds.

---

## 7. Configuration Variables Deployment Matrix

The AI Agent must construct isolated environment files (`.env`) inside the application roots mapping these production parameters exactly:

```ini
# --- Flask Backend Runtime Variables ---
FLASK_SECRET_KEY=your_generated_secure_system_hash
ADMIN_URL_PREFIX=/secure_custom_admin_portal_path

# --- Relational Database Parameters ---
DB_HOST=localhost
DB_NAME=cpanelPrefix_zitrac_webapp
DB_USER=cpanelPrefix_zitrac_dbuser
DB_PASSWORD=your_secure_cpanel_db_password

# --- Outbound Mail Service Parameters ---
SMTP_HOST=mail.zitrac.co.zw
SMTP_PORT=465
SMTP_USER=no-reply@zitrac.co.zw
SMTP_PASS=your_secure_noreply_email_password
MAIL_TO=info@zitrac.co.zw

# --- Cloudflare R2 Object Storage Credentials ---
R2_BUCKET_NAME=zitrac-media-vault
R2_ACCOUNT_ID=your_cloudflare_r2_account_id
R2_ACCESS_KEY_ID=your_cloudflare_generated_access_key
R2_SECRET_ACCESS_KEY=your_cloudflare_generated_secret_key
```
