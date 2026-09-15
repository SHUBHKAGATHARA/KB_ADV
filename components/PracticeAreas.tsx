'use client';

import React, { useState } from 'react';
import { ADVOCATE_DATA, PracticeArea } from '@/data/advocate';
import { ArrowUpRight, Check, X, Shield, Phone } from 'lucide-react';

export default function PracticeAreas() {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  return (
    <section id="practice-areas" className="relative w-full bg-parchment border-b border-ink py-16 sm:py-20 lg:py-28">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-ink pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ember font-bold">05</span>
            <span className="font-mono text-xs tracking-widest uppercase text-ink font-semibold">
              AREAS OF LEGAL PRACTICE
            </span>
          </div>
          <span className="font-mono text-xs text-charcoal tracking-wider uppercase hidden sm:inline">
            DISCIPLINED JURISPRUDENCE
          </span>
        </div>

        {/* Section Introduction */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
            ESTABLISHED SPECIALTIES
            <br />
            ACROSS GUJARAT COURTS.
          </h2>
          <p className="font-serif text-lg text-charcoal leading-relaxed">
            Adv. K.B. Kagathara provides focused, high-caliber legal representation across six core
            disciplines. Each matter is managed with profound knowledge of statutory provisions,
            established precedent, and rigorous local courtroom procedure.
          </p>
        </div>

        {/* 3-Column Broadsheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink">
          {ADVOCATE_DATA.practiceAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => setSelectedArea(area)}
              className="p-6 sm:p-8 border-r border-b border-ink bg-parchment hover:bg-bone transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Number & Arrow */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-ember">
                    {area.number}
                  </span>
                  <div className="w-7 h-7 rounded-btn border border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-parchment transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-ink group-hover:text-ember transition-colors">
                  {area.title}
                </h3>

                {/* Tagline */}
                <p className="font-serif text-sm text-charcoal leading-relaxed">
                  {area.tagline}
                </p>

                {/* Sub-areas bulleted editorial style */}
                <ul className="space-y-1.5 pt-3 border-t border-bone text-xs font-mono text-charcoal">
                  {area.subAreas.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-ember" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-bone/80 flex items-center justify-between text-xs font-mono text-ink">
                <span className="font-bold tracking-wider uppercase group-hover:underline">
                  VIEW SPECIALTY DETAILS
                </span>
                <span className="text-ember font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Area Detail Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
          <div className="bg-parchment border-2 border-ink max-w-2xl w-full p-6 sm:p-8 lg:p-10 shadow-print-lg relative my-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-5 right-5 p-2 border border-ink rounded-btn hover:bg-ink hover:text-parchment transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-ember">
                  SPECIALTY {selectedArea.number}
                </span>
                <span className="text-bone font-mono text-xs">|</span>
                <span className="font-mono text-xs text-charcoal uppercase">
                  PRACTICE SINCE {ADVOCATE_DATA.experienceSince}
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                {selectedArea.title}
              </h3>
              <p className="font-serif text-base text-charcoal italic">
                {selectedArea.tagline}
              </p>
            </div>

            {/* Comprehensive Description */}
            <div className="space-y-4 mb-6 text-charcoal font-serif text-base leading-relaxed border-y border-bone py-4">
              <p>{selectedArea.description}</p>
            </div>

            {/* Key Sub-Areas */}
            <div className="space-y-2 mb-6">
              <div className="font-mono text-xs tracking-widest text-ink uppercase font-bold">
                MATTERS HANDLED IN THIS AREA
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedArea.subAreas.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-bone/40 border border-ink text-xs font-mono text-ink flex items-center gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-ember shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Strategic Highlights */}
            <div className="space-y-2 mb-8">
              <div className="font-mono text-xs tracking-widest text-ink uppercase font-bold">
                OUR STRATEGIC APPROACH
              </div>
              <ul className="space-y-1.5 text-sm font-serif text-charcoal">
                {selectedArea.keyHighlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-ember font-bold">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-ink">
              <a
                href="#consultation"
                onClick={() => setSelectedArea(null)}
                className="w-full sm:w-auto text-center bg-ink text-parchment px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold rounded-btn hover:bg-pureblack transition-colors"
              >
                REQUEST CONSULTATION FOR THIS MATTER
              </a>
              <a
                href={`tel:${ADVOCATE_DATA.phones.primaryRaw}`}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-ink uppercase editorial-link"
              >
                <Phone className="w-3.5 h-3.5 text-ember" />
                <span>{ADVOCATE_DATA.phones.primary}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
