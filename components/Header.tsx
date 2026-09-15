'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Phone, Mail, ArrowUpRight, X, Menu, Shield } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Counsel', href: '/about' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Dhrol Court Practice', href: '/#dhrol-advocate' },
    { label: 'Credentials & Record', href: '/#credentials' },
    { label: 'Why Choose Counsel', href: '/#why-choose' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Frequently Asked Questions', href: '/faq' },
    { label: 'Book Consultation', href: '/#consultation' },
    { label: 'Contact Chambers', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-parchment border-b border-ink transition-all duration-200 ${
          scrolled ? 'py-3.5 shadow-sm' : 'py-5'
        }`}
      >
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Location & Bar Council Meta */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
            <div className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-ink uppercase font-medium">
              DHROL, GUJARAT
            </div>
            <span className="hidden md:inline text-bone font-mono text-xs">|</span>
            <span className="hidden md:inline font-mono text-[11px] text-charcoal tracking-wider uppercase">
              BAR NO. {ADVOCATE_DATA.enrollmentNo}
            </span>
          </div>

          {/* Center: Advocate Name Masthead */}
          <div className="text-center absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-ink hover:opacity-85 transition-opacity"
            >
              K.B. KAGATHARA
            </Link>
          </div>

          {/* Right: Emergency Hotline & Menu Trigger */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={`tel:${ADVOCATE_DATA.phones.primaryRaw}`}
              className="hidden lg:flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-ink border border-ink px-3 py-1.5 rounded-btn hover:bg-ink hover:text-parchment transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-ember" />
              <span>{ADVOCATE_DATA.phones.primary}</span>
            </a>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex items-center gap-2 border border-ink px-3 py-1.5 rounded-btn bg-parchment hover:bg-ink hover:text-parchment transition-all group"
            >
              <span className="font-mono text-xs font-semibold tracking-widest uppercase">
                MENU
              </span>
              <Menu className="w-4 h-4 text-ink group-hover:text-parchment transition-colors" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Editorial Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-ink text-parchment flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-y-auto animate-in fade-in duration-200">
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-charcoal/40 pb-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-ember" />
              <span className="font-mono text-xs tracking-widest uppercase text-bone">
                ADVOCATE & SOLICITOR — DHROL, GUJARAT
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Navigation Menu"
              className="flex items-center gap-2 border border-bone/40 px-3.5 py-1.5 rounded-btn text-parchment hover:bg-parchment hover:text-ink transition-colors"
            >
              <span className="font-mono text-xs tracking-widest uppercase">CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="max-w-editorial mx-auto w-full py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Primary Editorial Links */}
            <nav className="md:col-span-7 flex flex-col space-y-2 sm:space-y-3">
              {navLinks.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline justify-between border-b border-charcoal/30 pb-3 hover:border-ember transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-ember font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-2xl sm:text-3xl md:text-4xl text-parchment group-hover:text-ember transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-charcoal group-hover:text-ember group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              ))}
            </nav>

            {/* Sidebar Context & Coordinates */}
            <div className="md:col-span-5 md:pl-12 flex flex-col justify-between space-y-8 border-t md:border-t-0 md:border-l border-charcoal/40 pt-8 md:pt-0">
              <div>
                <div className="flex items-center gap-2 text-ember font-mono text-xs tracking-widest uppercase mb-3">
                  <Shield className="w-4 h-4" />
                  <span>LEGAL PRACTICE CREDENTIALS</span>
                </div>
                <h3 className="font-display text-2xl text-parchment font-bold mb-2">
                  Adv. K.B. Kagathara
                </h3>
                <p className="font-serif text-sm text-bone/80 mb-4 leading-relaxed">
                  Practicing since 2004 with 22+ years of trial advocacy across
                  penal defense, property litigation, and civil courts in Gujarat.
                </p>
                <div className="p-4 bg-charcoal/20 border border-charcoal/40 rounded-btn">
                  <div className="font-mono text-[11px] text-bone uppercase tracking-wider mb-1">
                    BAR COUNCIL ENROLLMENT
                  </div>
                  <div className="font-mono text-sm text-parchment font-bold">
                    GUJARAT / NO. {ADVOCATE_DATA.enrollmentNo}
                  </div>
                </div>
              </div>

              {/* Direct Urgent Contact */}
              <div className="space-y-4">
                <div className="font-mono text-xs tracking-widest uppercase text-ember font-semibold">
                  DIRECT CONTACT & 24/7 HOTLINES
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <a
                    href={`tel:${ADVOCATE_DATA.phones.primaryRaw}`}
                    className="flex items-center gap-3 text-parchment hover:text-ember transition-colors"
                  >
                    <Phone className="w-4 h-4 text-ember" />
                    <span>{ADVOCATE_DATA.phones.primary} (Senior Advocate)</span>
                  </a>
                  <a
                    href={`tel:${ADVOCATE_DATA.phones.secondaryRaw}`}
                    className="flex items-center gap-3 text-bone hover:text-ember transition-colors"
                  >
                    <Phone className="w-4 h-4 text-charcoal" />
                    <span>{ADVOCATE_DATA.phones.secondary} (Adv. Jagdish Kagathara)</span>
                  </a>
                  <a
                    href={`mailto:${ADVOCATE_DATA.emails.primary}`}
                    className="flex items-center gap-3 text-bone hover:text-ember transition-colors"
                  >
                    <Mail className="w-4 h-4 text-ember" />
                    <span>{ADVOCATE_DATA.emails.primary}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-charcoal/30">
                  <a
                    href="#consultation"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3 px-4 bg-ember text-parchment font-mono text-xs uppercase tracking-widest font-bold rounded-btn hover:bg-ember/90 transition-colors"
                  >
                    BOOK A FORMAL CONSULTATION
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar inside Overlay */}
          <div className="border-t border-charcoal/40 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-charcoal gap-2">
            <span>© 2025 ADV. K.B. KAGATHARA. ALL RIGHTS RESERVED.</span>
            <span>INFORMATIONAL LEGAL REPOSITORY</span>
          </div>
        </div>
      )}
    </>
  );
}
