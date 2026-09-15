'use client';

import React from 'react';

export default function EditorialBanner() {
  return (
    <section className="relative w-full bg-ink text-parchment border-b border-ink overflow-hidden py-14 sm:py-20 md:py-24">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Monospace Metadata Tag */}
        <div className="flex items-center justify-between border-b border-charcoal/40 pb-3 mb-6 sm:mb-8 text-xs font-mono tracking-[0.25em] text-bone uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ember" />
            <span>EDITORIAL IMPERATIVE</span>
          </div>
          <span>CONSTITUTIONAL MANDATE</span>
        </div>

        {/* Enormous Architectural Display Typography */}
        <div className="text-center select-none overflow-hidden">
          <div className="font-display text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[180px] font-black text-parchment tracking-tighter leading-[0.82] uppercase transition-transform hover:scale-[1.01] duration-500">
            JUSTICE
          </div>
        </div>

        {/* Bottom Sub-text Strip */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-charcoal/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-charcoal">
          <span>FAITHFULLY UPHOLDING THE LAW BEFORE THE BENCH</span>
          <span className="text-bone">EST. 2004 • ADVOCATE & SOLICITOR</span>
        </div>
      </div>
    </section>
  );
}
