'use client';

import React from 'react';

export default function LegalExcellenceBanner() {
  return (
    <section className="relative w-full bg-pureblack text-parchment border-b border-ink py-16 sm:py-24 overflow-hidden">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-charcoal/40 pb-3 mb-8 sm:mb-12 text-xs font-mono tracking-[0.25em] text-bone uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ember" />
            <span>RECORD OF PRACTICE</span>
          </div>
          <span>ESTABLISHED 2004 • GUJARAT STATE BAR</span>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-black text-parchment tracking-tight leading-[0.92] uppercase">
            22+ YEARS OF
            <br />
            <span className="text-ember font-normal italic font-serif">RESOLUTE</span>
            <br />
            LEGAL EXPERIENCE.
          </h2>

          <p className="font-serif text-base sm:text-lg text-bone/75 max-w-xl mx-auto pt-4 leading-relaxed">
            Continuous trial representation, uncompromising advocacy, and client
            dedication across penal, civil, and land jurisprudence.
          </p>
        </div>

        <div className="mt-12 pt-4 border-t border-charcoal/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-charcoal">
          <span>DHROL • JAMNAGAR • RAJKOT • GUJARAT</span>
          <span className="text-ember font-bold">BAR ENROLLMENT NO. 488/2004</span>
        </div>
      </div>
    </section>
  );
}
