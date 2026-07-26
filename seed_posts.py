from datetime import datetime
from app import app
from models import db, Post

posts_data = [
    {
        "slug": "off-the-shelf-vs-custom-school-systems",
        "title": "Choosing Between Off-the-Shelf and Custom School Systems",
        "excerpt": "What actually determines whether your school needs a custom build, and when a ready system is the smarter move.",
        "content": "<p>Full article body goes here.</p>",
        "image": "blog/school-systems",
        "month": "JUN", "year": "2026",
        "published_at": datetime(2026, 6, 15),
    },
    {
        "slug": "starlink-zimbabwe-installation-planning",
        "title": "Starlink in Zimbabwe: What to Plan for Before Installation",
        "excerpt": "Power, mounting, and network setup considerations that come up on almost every Starlink install we do.",
        "content": "<p>Full article body goes here.</p>",
        "image": "blog/starlink-planning",
        "month": "MAY", "year": "2026",
        "published_at": datetime(2026, 5, 10),
    },
    {
        "slug": "signs-your-business-network-needs-audit",
        "title": "Signs Your Business Network Needs a Proper Audit",
        "excerpt": "The recurring issues that usually mean patchwork fixes have stopped being enough.",
        "content": "<p>Full article body goes here.</p>",
        "image": "blog/network-audit",
        "month": "APR", "year": "2026",
        "published_at": datetime(2026, 4, 2),
    },
]

with app.app_context():
    db.create_all()
    for p in posts_data:
        if not Post.query.filter_by(slug=p["slug"]).first():
            db.session.add(Post(**p))
    db.session.commit()
    print(f"Seeded {len(posts_data)} posts.")