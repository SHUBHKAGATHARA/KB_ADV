'use client';

import React, { useState } from 'react';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full bg-parchment border-b border-ink py-16 sm:py-20 lg:py-24">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-ink pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ember font-bold">09</span>
            <span className="font-mono text-xs tracking-widest uppercase text-ink font-semibold">
              FREQUENT PROCEDURAL INQUIRIES
            </span>
          </div>
          <span className="font-mono text-xs text-charcoal tracking-wider uppercase hidden sm:inline">
            CLIENT GUIDANCE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <span className="legal-seal">PROCEDURAL ADVISORY</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
              COMMONLY ASKED
              <br />
              LEGAL QUESTIONS.
            </h2>
            <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed">
              Clear answers regarding our consultation process, documentation guidelines, emergency
              bail proceedings, and courtroom jurisdictions.
            </p>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 divide-y divide-ink border-y border-ink">
            {ADVOCATE_DATA.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-start justify-between text-left gap-4 group"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-ink group-hover:text-ember transition-colors">
                      {faq.question}
                    </span>
                    <span className="mt-1 p-1 border border-ink rounded-btn group-hover:bg-ink group-hover:text-parchment transition-colors shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-6 text-charcoal font-serif text-sm sm:text-base leading-relaxed animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
