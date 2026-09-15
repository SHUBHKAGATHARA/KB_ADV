'use client';

import React from 'react';
import Image from 'next/image';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Phone, ArrowRight, ShieldCheck, Scale, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-parchment border-b border-ink overflow-hidden pt-8 sm:pt-12 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Top Editorial Dateline Strip */}
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 pb-4 border-b border-ink flex flex-wrap items-center justify-between gap-3 text-xs font-mono tracking-wider text-charcoal">
        <div className="flex items-center gap-2">
          <span className="text-ember font-bold">VOL. XXII</span>
          <span>•</span>
          <span className="uppercase text-ink font-semibold">LEGAL COUNSEL OF RECORD</span>
          <span>•</span>
          <span>DHROL / GUJARAT</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold text-ink">
            <ShieldCheck className="w-3.5 h-3.5 text-ember" />
            ENROLLMENT NO. {ADVOCATE_DATA.enrollmentNo}
          </span>
          <span>•</span>
          <span>PRACTICING SINCE {ADVOCATE_DATA.experienceSince}</span>
        </div>
      </div>

      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Center Column: Editorial Typographic Composition (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Legal Positioning Eyebrow */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="legal-seal">
                GUJARAT STATE BAR COUNCIL
              </span>
              <span className="font-mono text-xs text-charcoal tracking-widest uppercase">
                22+ YEARS TRIAL ADVOCACY
              </span>
            </div>

            {/* Dominant Editorial Headline & Primary Semantic H1 */}
            <div className="space-y-3">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[74px] font-extrabold text-ink tracking-tight leading-[0.96]">
                Advocate in Dhrol, Gujarat
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal italic text-charcoal mt-1.5 sm:mt-2">
                  — K.B. Kagathara
                </span>
              </h1>
            </div>

            {/* Advocate Name & Official Designation */}
            <div className="border-l-2 border-ink pl-4 sm:pl-6 space-y-1">
              <div className="font-mono text-xs tracking-[0.25em] text-ember uppercase font-bold">
                LEGAL COUNSEL IN DHROL & SAURASHTRA
              </div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight">
                {ADVOCATE_DATA.name.toUpperCase()}
              </div>
              <div className="font-mono text-xs sm:text-sm tracking-widest text-charcoal uppercase">
                {ADVOCATE_DATA.title.toUpperCase()} — ENROLLMENT {ADVOCATE_DATA.enrollmentNo}
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="font-serif text-lg sm:text-xl text-charcoal max-w-xl leading-relaxed">
              Trusted legal counsel serving clients in Dhrol and Saurashtra with integrity,
              rigorous trial advocacy, and over two decades of courtroom dedication in penal,
              civil, and property jurisprudence.
            </p>

            {/* Credibility Key Markers */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 border-y border-bone">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-ink">
                  22+
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-charcoal uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-ink">
                  500+
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-charcoal uppercase tracking-wider">
                  Cases Handled
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-ink">
                  24/7
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-charcoal uppercase tracking-wider">
                  Urgent Defense
                </div>
              </div>
            </div>

            {/* Editorial CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-3 bg-ink text-parchment px-6 sm:px-8 py-3.5 sm:py-4 font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-btn border border-ink hover:bg-pureblack hover:shadow-hard transition-all duration-200 group"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4 text-ember group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${ADVOCATE_DATA.phones.primaryRaw}`}
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-ink editorial-link py-2"
              >
                <Phone className="w-4 h-4 text-ember" />
                <span>CALL NOW: {ADVOCATE_DATA.phones.primary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dominant SECOND PORTRAIT Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Architectural Frame with Sharp Geometry */}
            <div className="relative border-2 border-ink bg-bone p-2.5 sm:p-3 shadow-print">
              {/* Corner Stamp / Badge */}
              <div className="absolute top-6 right-6 z-20 bg-ink text-parchment px-3 py-1.5 border border-parchment font-mono text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                EST. {ADVOCATE_DATA.experienceSince}
              </div>

              {/* Primary Dominant Hero Image */}
              <div className="relative w-full aspect-[3/4] max-h-[640px] overflow-hidden bg-ink">
                <Image
                  src="/hero-portrait.png"
                  alt="Advocate K.B. Kagathara in Dhrol, Gujarat — Senior Legal Counsel"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  className="object-cover object-top filter contrast-[1.02] sharp transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Under-Photo Editorial Caption Block */}
              <div className="mt-3 pt-3 border-t border-ink/40 flex items-center justify-between text-[11px] font-mono text-charcoal">
                <span className="uppercase font-semibold text-ink">
                  PORTRAIT OF RECORD
                </span>
                <span>BAR COUNCIL OF GUJARAT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
