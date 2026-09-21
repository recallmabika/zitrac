"""
ZITRAC Technologies - SMTP SSL Delivery Controller Module
Handles secure, authenticated automated outbound emails via mail.zitrac.co.zw:465
"""

import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formatdate, make_msgid
from flask import current_app


def send_contact_notification(name: str, email: str, phone: str, service: str, message: str) -> bool:
    """
    Sends structured corporate lead summary email to MAIL_TO via authenticated SMTP over SSL.
    """
    config = current_app.config
    smtp_host = config.get('SMTP_HOST', 'mail.zitrac.co.zw')
    smtp_port = config.get('SMTP_PORT', 465)
    smtp_user = config.get('SMTP_USER', 'no-reply@zitrac.co.zw')
    smtp_pass = config.get('SMTP_PASS', '')
    mail_to = config.get('MAIL_TO', 'info@zitrac.co.zw')

    subject = f"[ZITRAC Lead] New Inquiry from {name} - {service or 'General'}"

    # Construct HTML Body
    html_body = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 20px; }}
  .container {{ max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }}
  .header {{ background-color: #dc2626; color: #ffffff; padding: 24px; text-align: center; }}
  .header h1 {{ margin: 0; font-size: 20px; letter-spacing: 0.5px; text-transform: uppercase; }}
  .content {{ padding: 24px; color: #1f2937; line-height: 1.6; }}
  .field-group {{ margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px; }}
  .field-label {{ font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }}
  .field-value {{ font-size: 15px; color: #111827; font-weight: 500; }}
  .message-box {{ background-color: #f9fafb; border-left: 4px solid #dc2626; padding: 16px; border-radius: 4px; white-space: pre-wrap; }}
  .footer {{ background-color: #111827; color: #9ca3af; text-align: center; font-size: 12px; padding: 16px; }}
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ZITRAC Technologies Inquiry</h1>
    </div>
    <div class="content">
      <div class="field-group">
        <div class="field-label">Prospect Name</div>
        <div class="field-value">{name}</div>
      </div>
      <div class="field-group">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:{email}">{email}</a></div>
      </div>
      <div class="field-group">
        <div class="field-label">Phone / WhatsApp</div>
        <div class="field-value">{phone or 'Not provided'}</div>
      </div>
      <div class="field-group">
        <div class="field-label">Selected Service Requirement</div>
        <div class="field-value">{service or 'General Technical Inquiry'}</div>
      </div>
      <div class="field-group" style="border-bottom: none;">
        <div class="field-label">Detailed Project Scope / Message</div>
        <div class="message-box">{message}</div>
      </div>
    </div>
    <div class="footer">
      Automated Enterprise Lead Dispatch &bull; ZITRAC Technologies Core Engine
    </div>
  </div>
</body>
</html>"""

    # Plaintext Fallback
    text_body = f"""New Client Lead Submission - ZITRAC Technologies
==================================================
Name: {name}
Email: {email}
Phone: {phone or 'N/A'}
Service: {service or 'General'}
--------------------------------------------------
Message:
{message}
==================================================
Sent via ZITRAC automated mail gateway.
"""

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = f"ZITRAC Automated <{smtp_user}>"
    msg['To'] = mail_to
    msg['Reply-To'] = email
    msg['Date'] = formatdate(localtime=True)
    msg['Message-ID'] = make_msgid(domain='zitrac.co.zw')

    part_text = MIMEText(text_body, 'plain', 'utf-8')
    part_html = MIMEText(html_body, 'html', 'utf-8')
    msg.attach(part_text)
    msg.attach(part_html)

    if not smtp_pass:
        current_app.logger.warning("SMTP_PASS not set. Email dispatch logged but skipped.")
        return True

    try:
        context = ssl.create_default_context()
        if smtp_port == 465:
            with smtplib.SMTP_SSL(smtp_host, smtp_port, context=context, timeout=15) as server:
                server.login(smtp_user, smtp_pass)
                server.sendmail(smtp_user, [mail_to], msg.as_string())
        else:
            with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as server:
                server.starttls(context=context)
                server.login(smtp_user, smtp_pass)
                server.sendmail(smtp_user, [mail_to], msg.as_string())
        return True
    except Exception as exc:
        current_app.logger.error(f"Failed to dispatch SMTP contact message: {exc}")
        return False
