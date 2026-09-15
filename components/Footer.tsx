'use client';

import React from 'react';
import Link from 'next/link';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-ink text-parchment border-t-2 border-ink">
      {/* Top Banner / Masthead */}
      <div className="border-b border-charcoal/40 py-8 px-4 sm:px-6 lg:px-8 max-w-editorial mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-ember font-mono text-xs tracking-widest uppercase font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-ember" />
            <span>LEGAL CHAMBERS EST. {ADVOCATE_DATA.experienceSince}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-parchment tracking-tight">
            ADV. K.B. KAGATHARA
          </h2>
          <div className="font-mono text-xs text-bone uppercase tracking-widest">
            ADVOCATE & SOLICITOR • GUJARAT STATE BAR COUNCIL (NO. {ADVOCATE_DATA.enrollmentNo})
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 border border-charcoal/60 px-4 py-2 text-xs font-mono tracking-widest text-parchment hover:border-ember hover:text-ember transition-colors"
        >
          <span>RETURN TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-ember" />
        </button>
      </div>

      {/* Main Grid */}
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-charcoal/40">
        {/* Col 1: Identity & Chambers (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-mono text-xs text-ember font-bold uppercase tracking-wider">
            OFFICE COORDINATES
          </div>
          <p className="font-serif text-sm text-bone/80 leading-relaxed">
            Adv. K.B. Kagathara provides distinguished trial advocacy and advisory
            counsel for individual, agricultural, and commercial clients throughout
            Dhrol, Jamnagar, Rajkot, and Gujarat courts.
          </p>
          <div className="space-y-2 text-xs font-mono text-bone/90 pt-2">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-ember shrink-0 mt-0.5" />
              <span>{ADVOCATE_DATA.officeAddress}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-ember shrink-0" />
              <a href={`tel:${ADVOCATE_DATA.phones.primaryRaw}`} className="hover:text-ember transition-colors">
                {ADVOCATE_DATA.phones.primary}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-ember shrink-0" />
              <a href={`mailto:${ADVOCATE_DATA.emails.primary}`} className="hover:text-ember transition-colors">
                {ADVOCATE_DATA.emails.primary}
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Practice Areas Directory (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-mono text-xs text-ember font-bold uppercase tracking-wider">
            AREAS OF JURISPRUDENCE
          </div>
          <ul className="space-y-2 font-serif text-sm text-bone/85">
            {ADVOCATE_DATA.practiceAreas.map((pa) => (
              <li key={pa.id}>
                <Link
                  href="/practice-areas"
                  className="hover:text-ember transition-colors flex items-center justify-between py-1 border-b border-charcoal/20"
                >
                  <span>{pa.title}</span>
                  <span className="font-mono text-[11px] text-charcoal">{pa.number}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Navigation & Credentials (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-mono text-xs text-ember font-bold uppercase tracking-wider">
            NAVIGATION DIRECTORY
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <Link href="/" className="text-bone/80 hover:text-ember py-1">Home</Link>
            <Link href="/about" className="text-bone/80 hover:text-ember py-1">About Counsel</Link>
            <Link href="/practice-areas" className="text-bone/80 hover:text-ember py-1">Practice Areas</Link>
            <Link href="/#dhrol-advocate" className="text-bone/80 hover:text-ember py-1">Dhrol Practice</Link>
            <Link href="/faq" className="text-bone/80 hover:text-ember py-1">Legal FAQs</Link>
            <Link href="/#credentials" className="text-bone/80 hover:text-ember py-1">Credentials</Link>
            <Link href="/#testimonials" className="text-bone/80 hover:text-ember py-1">Testimonials</Link>
            <Link href="/contact" className="text-bone/80 hover:text-ember py-1">Contact Chambers</Link>
          </div>

          <div className="p-4 bg-charcoal/20 border border-charcoal/40 rounded-btn space-y-2 mt-4">
            <div className="flex items-center gap-2 text-ember font-mono text-[11px] uppercase font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>BAR COUNCIL VERIFIED</span>
            </div>
            <div className="font-mono text-xs text-bone">
              Admitted: 2004 • Roll No. 488/2004
            </div>
            <div className="font-mono text-xs text-charcoal">
              Gujarat State Bar Council, Ahmedabad
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Legal Disclaimer */}
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-charcoal/40">
        <div className="p-5 border border-charcoal/40 bg-pureblack/50 space-y-2">
          <div className="font-mono text-[11px] text-ember uppercase tracking-wider font-bold">
            STATUTORY LEGAL NOTICE & DISCLAIMER
          </div>
          <p className="font-serif text-xs text-bone/75 leading-relaxed">
            This website is for informational purposes only and does not constitute legal advice.
            Communication through this website does not create an attorney-client relationship.
            Please consult with Adv. K.B. Kagathara directly for legal advice specific to your
            situation. No guarantee of case outcomes or legal results is expressed or implied.
          </p>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-charcoal gap-3">
        <div>
          © 2025 Adv. K.B. Kagathara. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>DHROL, GUJARAT, INDIA</span>
          <span className="text-ember">•</span>
          <span>EST. 2004</span>
        </div>
      </div>
    </footer>
  );
}
