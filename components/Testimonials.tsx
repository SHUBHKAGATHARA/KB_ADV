'use client';

import React from 'react';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-bone border-b border-ink py-16 sm:py-20 lg:py-28">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-ink pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ember font-bold">08</span>
            <span className="font-mono text-xs tracking-widest uppercase text-ink font-semibold">
              CLIENT TESTIMONIALS OF RECORD
            </span>
          </div>
          <span className="font-mono text-xs text-charcoal tracking-wider uppercase hidden sm:inline">
            VERIFIED REGIONAL EXPERIENCES
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
            WORDS FROM
            <br />
            THOSE COUNSELED.
          </h2>
          <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed">
            Reflections from clients regarding their legal representation and strategic counsel across
            civil, matrimonial, and commercial matters.
          </p>
        </div>

        {/* 3-Column Testimonials Broadsheet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-ink">
          {ADVOCATE_DATA.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 border-r border-b border-ink bg-parchment flex flex-col justify-between hover:bg-bone transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-ember">
                    TESTIMONIAL [0{idx + 1}]
                  </span>
                  <Quote className="w-5 h-5 text-charcoal" />
                </div>

                <p className="font-serif text-base sm:text-lg text-ink italic leading-relaxed pt-2">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-bone mt-6 space-y-1">
                <div className="font-display text-base font-bold text-ink">
                  {item.client}
                </div>
                <div className="font-mono text-xs text-charcoal uppercase tracking-wider">
                  {item.matter}
                </div>
                <div className="font-mono text-[11px] text-ember uppercase">
                  {item.location}, Gujarat
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
