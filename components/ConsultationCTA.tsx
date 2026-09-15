'use client';

import React from 'react';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Phone, ArrowRight, MessageSquare, Clock } from 'lucide-react';

export default function ConsultationCTA() {
  return (
    <section id="consultation" className="relative w-full bg-ink text-parchment border-b border-ink py-16 sm:py-20 lg:py-24">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-charcoal/50 p-8 sm:p-12 lg:p-16 bg-pureblack relative overflow-hidden">
          {/* Subtle Accent Seal */}
          <div className="absolute -right-8 -bottom-8 opacity-10 select-none pointer-events-none hidden md:block">
            <span className="font-display text-[180px] font-black text-parchment leading-none">
              LAW
            </span>
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-ember" />
              <span className="font-mono text-xs text-bone tracking-widest uppercase font-semibold">
                FORMAL LEGAL ENGAGEMENT
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-parchment leading-tight">
              LET&apos;S DISCUSS
              <br />
              YOUR LEGAL MATTER.
            </h2>

            <p className="font-serif text-lg sm:text-xl text-bone/85 leading-relaxed">
              Contact Adv. K.B. Kagathara for a strategic consultation regarding your penal,
              civil, property, or matrimonial legal proceedings in Gujarat.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-parchment text-ink px-6 sm:px-8 py-3.5 sm:py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest rounded-btn border border-parchment hover:bg-ember hover:text-parchment hover:border-ember transition-colors"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${ADVOCATE_DATA.phones.primaryRaw}`}
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-parchment hover:text-ember transition-colors py-2"
              >
                <Phone className="w-4 h-4 text-ember" />
                <span>CALL NOW: {ADVOCATE_DATA.phones.primary}</span>
              </a>
            </div>

            {/* Emergency and Chamber Timing Strip */}
            <div className="pt-6 border-t border-charcoal/40 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-charcoal">
              <div className="flex items-center gap-2 text-bone">
                <Clock className="w-4 h-4 text-ember shrink-0" />
                <span>CHAMBERS: MON–FRI 9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-bone">
                <span className="w-2 h-2 rounded-full bg-ember shrink-0 animate-ping" />
                <span>24/7 HOTLINE FOR EMERGENCY ARREST OR BAIL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
