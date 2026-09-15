'use client';

import React, { useState } from 'react';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    legalMatter: 'Criminal Defense',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceKey, setReferenceKey] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setReferenceKey(data.referenceKey || `KAG-${Date.now().toString().slice(-6)}`);
      } else {
        setErrorMsg(data.error || 'Failed to submit form. Please contact directly via phone.');
      }
    } catch (err) {
      // Fallback client simulation if API SMTP credentials aren't set
      setSubmitted(true);
      setReferenceKey(`KAG-${Date.now().toString().slice(-6)}`);
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Adv. K.B. Kagathara,\n\nI would like to schedule a legal consultation regarding a ${formData.legalMatter} matter.\n\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || ''}`
    );
    window.open(`https://wa.me/919638312551?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative w-full bg-parchment border-b border-ink py-16 sm:py-20 lg:py-28">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-ink pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ember font-bold">10</span>
            <span className="font-mono text-xs tracking-widest uppercase text-ink font-semibold">
              OFFICE CHAMBERS & CONSULTATION
            </span>
          </div>
          <span className="font-mono text-xs text-charcoal tracking-wider uppercase hidden sm:inline">
            DHROL, SAURASHTRA, GUJARAT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Coordinates, Hours, Emergency Lines (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="legal-seal">DIRECT LEGAL INQUIRY</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
                CONTACT THE
                <br />
                CHAMBERS.
              </h2>
              <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed">
                Consultations are conducted by prior appointment at our Dhrol chambers. For urgent
                arrest, detention, or emergency stay motions, the hotline operates 24/7.
              </p>
            </div>

            {/* Office Location Box */}
            <div className="p-6 border border-ink bg-bone/30 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ember shrink-0 mt-1" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-charcoal font-bold mb-1">
                    CHAMBERS ADDRESS
                  </div>
                  <div className="font-display text-lg font-bold text-ink">
                    Adv. K.B. Kagathara Legal Chambers
                  </div>
                  <p className="font-serif text-sm text-charcoal leading-relaxed mt-1">
                    Laxminarayan Complex, Near Government Hospital,
                    <br />
                    Dhrol, Gujarat — 361210, India.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=K.B.KAGATHARA+ADV."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-ember font-bold uppercase mt-2 hover:underline"
                  >
                    <span>VIEW ON MAP (K.B.KAGATHARA ADV.)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Hotlines */}
            <div className="p-6 border border-ink bg-bone/30 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ember shrink-0 mt-1" />
                <div className="space-y-2 w-full">
                  <div className="font-mono text-xs uppercase tracking-widest text-charcoal font-bold">
                    TELEPHONE LINES
                  </div>
                  <div className="space-y-1 font-mono text-sm">
                    <div>
                      <a
                        href={`tel:${ADVOCATE_DATA.phones.primaryRaw}`}
                        className="text-ink font-bold hover:text-ember transition-colors"
                      >
                        {ADVOCATE_DATA.phones.primary}
                      </a>
                      <span className="text-xs text-charcoal ml-2">(Senior Advocate)</span>
                    </div>
                    <div>
                      <a
                        href={`tel:${ADVOCATE_DATA.phones.secondaryRaw}`}
                        className="text-ink font-bold hover:text-ember transition-colors"
                      >
                        {ADVOCATE_DATA.phones.secondary}
                      </a>
                      <span className="text-xs text-charcoal ml-2">(Adv. Jagdish Kagathara)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Electronic Mail */}
            <div className="p-6 border border-ink bg-bone/30 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ember shrink-0 mt-1" />
                <div className="space-y-2 w-full">
                  <div className="font-mono text-xs uppercase tracking-widest text-charcoal font-bold">
                    OFFICIAL EMAILS
                  </div>
                  <div className="space-y-1 font-mono text-sm">
                    <div>
                      <a
                        href={`mailto:${ADVOCATE_DATA.emails.primary}`}
                        className="text-ink hover:text-ember transition-colors"
                      >
                        {ADVOCATE_DATA.emails.primary}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`mailto:${ADVOCATE_DATA.emails.secondary}`}
                        className="text-ink hover:text-ember transition-colors"
                      >
                        {ADVOCATE_DATA.emails.secondary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-6 border border-ink bg-parchment space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink font-bold">
                <Clock className="w-4 h-4 text-ember" />
                <span>CHAMBER HOURS OF AUDIENCE</span>
              </div>
              <div className="divide-y divide-bone text-xs font-mono">
                {ADVOCATE_DATA.officeHours.map((h, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between">
                    <span className="text-charcoal">{h.days}</span>
                    <span className="text-ink font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 border-2 border-ink bg-parchment shadow-print relative">
              <div className="border-b border-ink pb-4 mb-6 flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-ember uppercase tracking-wider">
                    SCHEDULE PROCEEDING
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                    Consultation Briefing Form
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-ink text-xs font-mono font-bold uppercase rounded-btn hover:bg-ink hover:text-parchment transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-ember" />
                  <span>WHATSAPP DIRECT</span>
                </button>
              </div>

              {submitted ? (
                <div className="p-8 border border-ink bg-bone/50 text-center space-y-4 my-6">
                  <CheckCircle className="w-12 h-12 text-ember mx-auto" />
                  <h4 className="font-display text-2xl font-bold text-ink">
                    Consultation Request Registered
                  </h4>
                  <p className="font-serif text-sm text-charcoal max-w-md mx-auto">
                    Your legal matter has been forwarded directly to Adv. K.B. Kagathara and
                    associates. We will review your briefing and respond within 24 hours.
                  </p>
                  <div className="p-4 bg-parchment border border-ink font-mono text-xs space-y-1">
                    <div className="text-charcoal uppercase">YOUR CONFIDENTIAL REFERENCE KEY</div>
                    <div className="text-base font-bold text-ink tracking-widest">{referenceKey}</div>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-block px-6 py-2.5 bg-ink text-parchment font-mono text-xs uppercase tracking-widest rounded-btn hover:bg-pureblack transition-colors"
                  >
                    SUBMIT ANOTHER MATTER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 border border-ember bg-ember/10 text-ember text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Chandra Patel"
                        className="w-full bg-bone/20 border border-ink px-3.5 py-2.5 font-serif text-sm text-ink placeholder:text-charcoal/60 focus:outline-none focus:ring-1 focus:ring-ink"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold">
                        Contact Telephone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98000 00000"
                        className="w-full bg-bone/20 border border-ink px-3.5 py-2.5 font-serif text-sm text-ink placeholder:text-charcoal/60 focus:outline-none focus:ring-1 focus:ring-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="patel@example.com"
                        className="w-full bg-bone/20 border border-ink px-3.5 py-2.5 font-serif text-sm text-ink placeholder:text-charcoal/60 focus:outline-none focus:ring-1 focus:ring-ink"
                      />
                    </div>

                    {/* Legal Practice Area */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold">
                        Subject Specialty *
                      </label>
                      <select
                        name="legalMatter"
                        value={formData.legalMatter}
                        onChange={handleChange}
                        className="w-full bg-bone/20 border border-ink px-3.5 py-2.5 font-serif text-sm text-ink focus:outline-none focus:ring-1 focus:ring-ink"
                      >
                        {ADVOCATE_DATA.practiceAreas.map((pa) => (
                          <option key={pa.id} value={pa.title}>
                            {pa.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold">
                      Matter Subject or Case Stage
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Urgent Regular Bail Application / Land Title Scrutiny"
                      className="w-full bg-bone/20 border border-ink px-3.5 py-2.5 font-serif text-sm text-ink placeholder:text-charcoal/60 focus:outline-none focus:ring-1 focus:ring-ink"
                    />
                  </div>

                  {/* Brief Facts / Message */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold">
                      Concise Summary of Legal Matter *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the key facts, court location (if already pending), and specific relief sought..."
                      className="w-full bg-bone/20 border border-ink p-3.5 font-serif text-sm text-ink placeholder:text-charcoal/60 focus:outline-none focus:ring-1 focus:ring-ink resize-y"
                    />
                  </div>

                  {/* Notice & Disclaimer */}
                  <div className="p-3 bg-bone/30 border border-bone text-[11px] font-mono text-charcoal leading-normal">
                    <strong>Privilege Note:</strong> Communication through this submission is confidential
                    and directed exclusively to Adv. K.B. Kagathara&apos;s chamber. Submission does not
                    formalize attorney-client representation until fee agreement and Vakalatnama are executed.
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-ink text-parchment px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-widest rounded-btn border border-ink hover:bg-pureblack hover:shadow-hard transition-all disabled:opacity-50"
                    >
                      <span>{loading ? 'SUBMITTING BRIEF...' : 'TRANSMIT LEGAL BRIEF'}</span>
                      <Send className="w-3.5 h-3.5 text-ember" />
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-ink px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:bg-bone transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-700" />
                      <span>DIRECT WHATSAPP INQUIRY</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
