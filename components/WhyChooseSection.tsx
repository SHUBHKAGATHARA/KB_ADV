'use client';

import React from 'react';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Scale, Clock, ShieldCheck, UserCheck, Briefcase, FileText } from 'lucide-react';

export default function WhyChooseSection() {
  const pillars = [
    {
      num: "01",
      title: "22+ Years of Active Trial Experience",
      desc: "Continuous courtroom practice since 2004 before Gujarat State Bar Council, cultivating profound procedural mastery in Indian criminal, civil, and land jurisprudence.",
      icon: Scale,
    },
    {
      num: "02",
      title: "Direct Advocate Counsel & Scrutiny",
      desc: "Clients interact directly with senior advocates. Every petition, cross-examination strategy, and settlement framework receives personal craftsmanship and senior oversight.",
      icon: UserCheck,
    },
    {
      num: "03",
      title: "Uncompromising Professional Integrity",
      desc: "Every legal strategy is grounded in realistic statutory assessments, transparent counsel, and procedural rigor without unsupported guarantees or speculative claims.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "Strategic Courtroom Representation",
      desc: "Thorough evidentiary preparation, sharp witness cross-examination, and structured oral arguments designed to secure tangible judicial remedies before the bench.",
      icon: Briefcase,
    },
    {
      num: "05",
      title: "24/7 Urgent Legal Defense Hotline",
      desc: "Immediate availability during urgent legal contingencies including sudden arrests, remand hearings, anticipatory bail, and urgent stay motions across Dhrol and Saurashtra.",
      icon: Clock,
    },
    {
      num: "06",
      title: "Regional Statutory Nuance & Land Records",
      desc: "Comprehensive expertise in Saurashtra's local revenue procedures, agricultural land records, Mamlatdar tribunals, and session court precedents.",
      icon: FileText,
    },
  ];

  return (
    <section id="why-choose" className="relative w-full bg-parchment border-b border-ink py-16 sm:py-20 lg:py-28">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-ink pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ember font-bold">07</span>
            <span className="font-mono text-xs tracking-widest uppercase text-ink font-semibold">
              INSTITUTIONAL FOUNDATION & ETHOS
            </span>
          </div>
          <span className="font-mono text-xs text-charcoal tracking-wider uppercase hidden sm:inline">
            CRITERIA OF COUNSEL
          </span>
        </div>

        {/* 2-Column Editorial Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Heading and Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <span className="legal-seal">PROFESSIONAL COMMITMENT</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
              WHY CLIENTS
              <br />
              TRUST OUR
              <br />
              LEGAL COUNSEL.
            </h2>
            <p className="font-serif text-lg text-charcoal leading-relaxed">
              In legal practice, outcome begins with discipline. We approach every brief with the
              intellectual thoroughness of a scholar and the decisive focus of an established trial
              advocate.
            </p>
            <div className="p-5 border border-ink bg-bone/40 space-y-2">
              <div className="font-mono text-xs text-ember uppercase font-bold tracking-wider">
                ETHICAL STATUTORY PRINCIPLE
              </div>
              <p className="font-serif text-xs text-charcoal leading-normal">
                Our practice operates strictly under the Advocates Act, 1961 and the Bar Council of
                India professional rules. We do not offer unrealistic promises; we deliver thorough,
                strategic, and ethical advocacy.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 border border-ink bg-parchment hover:bg-bone transition-colors flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-ember">
                        {item.num}
                      </span>
                      <Icon className="w-4 h-4 text-charcoal group-hover:text-ink transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink group-hover:text-ember transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-serif text-xs text-charcoal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
