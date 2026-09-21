'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IT Consulting',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '', errors: {} });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: '', errors: {} });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus({
          state: 'error',
          message: result.message || 'Validation error occurred.',
          errors: result.errors || {},
        });
      } else {
        setStatus({
          state: 'success',
          message: result.message || 'Your inquiry was safely received. We will respond promptly.',
          errors: {},
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'IT Consulting',
          message: '',
        });
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Unable to communicate with the application engine. Please reach us at info@zitrac.co.zw.',
        errors: {},
      });
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-10 text-left">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Direct Communications</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Contact ZITRAC Technical Consulting Desk
          </h1>
          <p className="mt-3 text-base text-slate-300">
            Submit your enterprise project scope or technical inquiry. Our engineering team in Harare reviews all briefs under strict confidentiality.
          </p>
        </header>

        {/* Dynamic Aria Live Container for Accessibility Compliance */}
        <div aria-live="assertive" className="mb-6">
          {status.state === 'error' && (
            <div className="rounded-lg border border-red-700 bg-red-950/80 p-4 text-sm text-red-200">
              <strong className="font-semibold block mb-1">Attention Required:</strong>
              {status.message}
            </div>
          )}

          {status.state === 'success' && (
            <div className="rounded-lg border border-emerald-700 bg-emerald-950/80 p-4 text-sm text-emerald-200">
              <strong className="font-semibold block mb-1">Transmission Successful:</strong>
              {status.message}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Main Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6 bg-slate-900/60 p-8 rounded-xl border border-slate-800">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-950"
              />
              {status.errors.name && <p className="mt-1 text-xs text-red-400">{status.errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-950"
                />
                {status.errors.email && <p className="mt-1 text-xs text-red-400">{status.errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-950"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Service Domain
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <option value="IT Consulting">IT Consulting & Infrastructure</option>
                <option value="Software Development">Enterprise Software & AI Integration</option>
                <option value="Cyber Security">Cyber Security Threat Watchdogs</option>
                <option value="Web Design">Custom Web Design & Development</option>
                <option value="Web Hosting">Web Hosting & .co.zw Registration</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Project Scope / Technical Inquiries <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-950"
              ></textarea>
              {status.errors.message && <p className="mt-1 text-xs text-red-400">{status.errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status.state === 'submitting'}
              className="w-full rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-red-700 transition disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              {status.state === 'submitting' ? 'Transmitting Over TLS...' : 'Transmit Brief to Engineering Desk'}
            </button>
          </form>

          {/* Direct Coordinate Details */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">Central Operations</h2>
              <div className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200 block mb-1">ZITRAC Technologies</strong>
                Harare Innovation Corridor<br />
                Harare, Zimbabwe
              </div>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <div className="mb-1"><span className="text-slate-200 font-medium">Email:</span> <a href="mailto:info@zitrac.co.zw" className="text-red-400">info@zitrac.co.zw</a></div>
                <div><span className="text-slate-200 font-medium">Gateway:</span> mail.zitrac.co.zw:465</div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-sm font-bold text-white mb-2">Response Commitment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Critical inquiries receive immediate prioritization from senior engineering personnel. Typical response latency is under 4 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
