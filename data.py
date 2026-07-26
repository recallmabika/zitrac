# All real site content lives here, kept separate from routing logic in app.py

SERVICES = [
    {"title": "IT Consulting", "desc": "Practical advice on the right technology and infrastructure for your business.", 
     "image": "services/it-consulting.jpg"},
    {"title": "Web Development", 
     "desc": "Fast, modern websites and web apps built to grow with your business.", 
     "image": "services/web-development.jpg"
    },
    {"title": "Starlink WiFi Installation", "desc": "Professional setup of Starlink connectivity for reliable internet anywhere.", "image": "services/starlink-wifi.png"},
    {"title": "Network Troubleshooting & Support", "desc": "Diagnosing and resolving network issues to keep your business online.", "image": "services/network-troubleshooting.jpg"},
    {"title": "Software Development", "desc": "Custom software built around the way your organisation actually works.", "image": "services/software-development.jpg"},
    {"title": "School Information Systems", "desc": "Purpose-built systems for managing student, staff, and school records.", "image": "services/zitrac.png"},
    {"title": "Point of Sale (POS) Systems", "desc": "Reliable POS setups that speed up sales and simplify stock tracking.", "image": "services/pos.png"},
    {"title": "CCTV & Surveillance Installation", "desc": "Camera systems and surveillance installs to keep your premises secure.", "image": "services/CCTV-Installation.jpg"},
    {"title": "E-Learning System Development", "desc": "Online learning platforms that make teaching and studying remotely easy.", "image": "services/e-learning.png"},
    {"title": "Cybersecurity Risk Assessment", "desc": "A full picture of where your business is exposed, before an attacker finds it first.", "image": "services/risk-assessment.jpg"},
    {"title": "Security Audit", "desc": "Identifying vulnerabilities in your systems and network before they become real problems.", "image": "services/security-audit.jpg"},
    {"title": "Firewall & Endpoint Protection", "desc": "Setting up and managing firewalls and endpoint security to keep threats out.", "image": "services/cybersecurity.jpg"},
    {"title": "Data Backup & Recovery Planning", "desc": "Reliable backup systems and recovery plans so a breach or failure doesn't cost you everything.", "image": "services/backup-recovery.png"},
]


STATS = [
    {"number": "10+", "label": "Core Services"},
    {"number": "24/7", "label": "Support Available"},
    {"number": "100%", "label": "Client Satisfaction"},
]

CASE_STUDIES = [
    {
        "title": "Full School Information System Rollout",
        "client": "Private College, Chipinge",
        "desc": "Replaced spreadsheets and paper registers with a single system for admissions, attendance, and results across the whole school.",
        "image": "zitrac",
    },
    {
        "title": "Web Platform for Tech Startup",
        "client": "Tech Startup, Gweru",
        "desc": "Developed a custom web platform to streamline operations and improve user experience.",
        "image": "hero_11",
    },
    {
        "title": "Starlink Installation & Configuration",
        "client": "Farming Estate, Manicaland",
        "desc": "Got a remote site online reliably with Starlink and did range extension.",
        "image": "hero_9.png",
    },
]

TESTIMONIALS = [
    {
        "id": "ZTRAC-customer-1",
        "quote": "ZITRAC rebuilt how our school handles records. What used to take our admin team a full day now takes minutes.",
        "name": "School Administrator",
        "org": "Private College, Chipinge",
    },
    {
        "id": "ZTRAC-customer-2",
        "quote": "They installed Starlink at our site and didn't just leave once it worked — they came back to sort out the power setup too.",
        "name": "Farm Operations Manager",
        "org": "Farming Estate, Manicaland",
    },
    {
        "id": "ZTRAC-customer-3",
        "quote": "Growing without the digital visibility was a major challenge for us. ZITRAC's custome tailored Website and Application has made it easy to manage our business and track our sales.",
        "name": "Startup Owner",
        "org": "Tech Startup, Gweru",
    },
]

FAQS = [
    {
        "q": "What areas do you service?",
        "a": "We work with businesses and schools across Zimbabwe, handling both on-site installation and remote support depending on the service.",
    },
    {
        "q": "How quickly can you respond to a support request?",
        "a": "Support requests are typically acknowledged within the same working day, with on-site visits scheduled based on urgency and location.",
    },
    {
        "q": "Do you build custom school management systems, or only sell off-the-shelf ones?",
        "a": "Both — we can deploy a ready system quickly, or build something custom around how your school already runs, depending on your needs and budget.",
    },
    {
        "q": "Can you install Starlink even in areas with unreliable power?",
        "a": "Yes — we can advise on and install backup power solutions alongside Starlink setups for sites with an unreliable grid.",
    },
    {
        "q": "Do you offer ongoing maintenance contracts, or one-off jobs only?",
        "a": "Both — plenty of clients start with a one-off installation and move to an ongoing support arrangement once we're familiar with their setup.",
    },
]

BLOG_POSTS = [
    {
        "title": "Choosing Between Off-the-Shelf and Custom School Systems",
        "excerpt": "What actually determines whether your school needs a custom build, and when a ready system is the smarter move.",
        "month": "JUN", "year": "2026",
    },
    {
        "title": "Starlink in Zimbabwe: What to Plan for Before Installation",
        "excerpt": "Power, mounting, and network setup considerations that come up on almost every Starlink install we do.",
        "month": "MAY", "year": "2026",
    },
    {
        "title": "Signs Your Business Network Needs a Proper Audit",
        "excerpt": "The recurring issues that usually mean patchwork fixes have stopped being enough.",
        "month": "APR", "year": "2026",
    },
]

# --- About page ---
VALUES = [
    {"title": "Reliability", "desc": "We build systems and install infrastructure that keeps working long after the invoice is paid."},
    {"title": "Practical Solutions", "desc": "No overselling. We recommend what actually fits your budget, site, and workflow."},
    {"title": "Client Partnership", "desc": "We stay involved after go-live — updates, support, and fixes, not a one-time handover."},
    {"title": "Continuous Support", "desc": "Problems get acknowledged fast and followed through until they're actually resolved."},
]

DISCIPLINES = [
    {"label": "Software & Web Development", "desc": "Building custom systems and web platforms around how each client's organisation actually runs."},
    {"label": "Network & Field Services", "desc": "On-site installation and troubleshooting for Starlink, networking, CCTV, and POS hardware."},
    {"label": "Support & Maintenance", "desc": "Ongoing monitoring and response for clients running systems and connectivity we've deployed."},
]

SERVICE_NAMES = [
    "IT Consulting", "Web Development", "Software Development", "Starlink WiFi Installation",
    "Network Troubleshooting & Support", "School Information Systems", "POS Systems",
    "CCTV & Surveillance", "E-Learning Systems", "Cybersecurity Risk Assessment", 
    "Security Audit", "Firewall & Endpoint Protection", "Data Backup & Recovery Planning",
]

# --- Services page (detailed) ---
SERVICES_DETAILED = [
    {
        "title": "IT Consulting",
        "desc": "Straight advice on what technology and infrastructure actually fits your business — before you spend on the wrong thing.",
        "includes": ["Infrastructure and systems audit", "Technology roadmap recommendations", "Vendor and equipment guidance"],
    },
    {
        "title": "Web Development",
        "desc": "Websites and web apps built to represent your business properly and grow as it does, not a template stretched to fit.",
        "includes": ["Custom-built websites and web apps", "Ongoing updates and maintenance", "Hosting and domain setup guidance"],
    },
    {
        "title": "Software Development",
        "desc": "Custom software built around how your organisation actually operates, instead of forcing your workflow into off-the-shelf software.",
        "includes": ["Requirements and process mapping", "Custom application build", "Testing, deployment, and handover"],
    },
    {
        "title": "Starlink WiFi Installation",
        "desc": "Professional Starlink setup for reliable internet, including sites with unreliable grid power.",
        "includes": ["Dish mounting and alignment", "Network configuration", "Backup power advice where needed"],
    },
    {
        "title": "Network Troubleshooting & Support",
        "desc": "Diagnosing and resolving the network issues that keep taking your business offline.",
        "includes": ["On-site and remote diagnostics", "Router, switch, and cabling fixes", "Ongoing support arrangements"],
    },
    {
        "title": "School Information Systems",
        "desc": "Purpose-built systems for managing student, staff, and school records — ready-made or fully custom.",
        "includes": ["Student and staff record management", "Attendance and results tracking", "Custom builds or ready deployment"],
    },
    {
        "title": "Point of Sale (POS) Systems",
        "desc": "Reliable POS setups that speed up sales and keep stock tracking simple, even across multiple branches.",
        "includes": ["POS hardware and software setup", "Multi-branch stock synchronisation", "Staff training and handover"],
    },
    {
        "title": "CCTV & Surveillance Installation",
        "desc": "Camera systems and surveillance installs to keep your premises secure and monitored.",
        "includes": ["Site assessment and camera placement", "Installation and configuration", "Remote viewing setup"],
    },
    {
        "title": "E-Learning System Development",
        "desc": "Online learning platforms that make teaching and studying remotely straightforward.",
        "includes": ["Course and content management", "Student progress tracking", "Custom platform features"],
    },
   {
        "title": "Cybersecurity Risk Assessment",
        "desc": "A structured look at your overall risk exposure — systems, staff practices, and data handling — so you know what to fix first.",
        "includes": ["Full risk exposure review", "Staff and process risk factors", "Prioritised action plan"],
    },
    {
        "title": "Security Audit",
        "desc": "A practical audit of where your business is actually exposed — not a generic checklist, a real look at your systems and network.",
        "includes": ["Network and systems vulnerability scan", "Risk report with prioritised findings", "Recommendations you can act on immediately"],
    },
    {
        "title": "Firewall & Endpoint Protection",
        "desc": "Setup and ongoing management of firewalls and endpoint security so threats are stopped before they reach your devices.",
        "includes": ["Firewall configuration and hardening", "Endpoint antivirus and monitoring setup", "Policy configuration for staff devices"],
    },
    {
        "title": "Data Backup & Recovery Planning",
        "desc": "A backup and recovery plan built around what your business actually can't afford to lose.",
        "includes": ["Backup strategy and scheduling setup", "Off-site and cloud backup configuration", "Recovery testing so it actually works when needed"],
    },
]

PROCESS = [
    {"step": "Consultation", "desc": "We talk through what you're dealing with and what you actually need, not what's easiest for us to sell."},
    {"step": "Proposal", "desc": "You get a clear scope and quote before anything starts — no surprise costs partway through."},
    {"step": "Build or Install", "desc": "We do the work — development, installation, or setup — keeping you updated as it progresses."},
    {"step": "Support", "desc": "We stay reachable after go-live for fixes, questions, and ongoing maintenance."},
]

# --- Contact page ---
SERVICE_OPTIONS = [
    "IT Consulting", "Web Development", "Software Development", "Starlink WiFi Installation",
    "Network Troubleshooting & Support", "School Information Systems", "POS Systems",
    "CCTV & Surveillance", "E-Learning Systems",
    "Cybersecurity Risk Assessment", "Security Audit", "Firewall & Endpoint Protection", "Data Backup & Recovery Planning",
    "Not sure yet",
]

QUICK_CONTACTS = [
    {"label": "Call", "value": "+263 77 946 6786", "href": "tel:+263779466786"},
    {"label": "Email", "value": "info@zitrac.co.zw", "href": "mailto:info@zitrac.co.zw"},
    {"label": "Support", "value": "support@zitrac.co.zw", "href": "mailto:support@zitrac.co.zw"},
    {"label": "Location", "value": "Harare, Zimbabwe", "href": None},
]
