'use client';

import React from 'react';
import Link from 'next/link';
import { ADVOCATE_DATA } from '@/data/advocate';
import { MapPin, Scale, Landmark, FileCheck, Phone, ArrowRight, Shield } from 'lucide-react';

export default function DhrolPracticeSection() {
  const localJurisdictions = [
    {
      title: 'Taluka Court & JMFC, Dhrol',
      category: 'Local Subordinate Judiciary',
      description:
        'Direct trial representation before the Court of Principal Civil Judge and Judicial Magistrate First Class (JMFC) in Dhrol. Handling criminal defense, regular and anticipatory bail petitions, summary trials, maintenance claims, and civil injunction suits.',
      icon: Landmark,
    },
    {
      title: 'District & Sessions Court, Jamnagar',
      category: 'District & Sessions Jurisdiction',
      description:
        'Advocacy in major criminal trials, session-committed penal offenses, civil appeals, execution proceedings, and commercial suits at the District & Sessions Court, Jamnagar.',
      icon: Scale,
    },
    {
      title: 'Revenue Tribunals & Land Authority',
      category: 'Agricultural & Revenue Matters',
      description:
        'Thorough legal scrutiny of 7/12 & 8-A land records, title search, mutation entry challenges, and revenue proceedings before the Mamlatdar, Prant Officer, and Collectorate across Dhrol and Jamnagar district.',
      icon: FileCheck,
    },
  ];

  return (
    <section
      id="dhrol-advocate"
      className="relative w-full bg-bone border-b border-ink py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-ink pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ember font-bold">06</span>
            <span className="font-mono text-xs tracking-widest uppercase text-ink font-semibold">
              LOCAL LEGAL PRACTICE & JURISDICTION
            </span>
          </div>
          <span className="font-mono text-xs text-charcoal tracking-wider uppercase hidden sm:inline">
            DHROL • JAMNAGAR DISTRICT • GUJARAT
          </span>
        </div>

        {/* Primary Section Heading & Contextual Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 sm:mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="legal-seal">PRACTICING ADVOCATE IN DHROL</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
              Advocate in Dhrol — Legal Representation & Practice in Gujarat
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 font-serif text-charcoal text-base sm:text-lg leading-relaxed">
            <p>
              When facing a penal indictment, a contested property dispute, or a civil proceeding in
              Dhrol or Jamnagar district, having experienced local counsel with over two decades of
              verified standing before the Gujarat State Bar makes a decisive procedural difference.
            </p>
            <p>
              Adv. K.B. Kagathara has been actively practicing law in Dhrol since 2004 (Bar Council
              Enrollment No. 488/2004). His chambers provide accessible, ethical, and strategic
              legal consultation and courtroom representation for citizens, agricultural landholders,
              and local business proprietors throughout Dhrol, Jodiya, Jamnagar, and Rajkot.
            </p>
          </div>
        </div>

        {/* 3 Jurisdictional Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-ink mb-12">
          {localJurisdictions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 border-r border-b border-ink bg-parchment flex flex-col justify-between hover:bg-bone transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ember">
                      COURT [0{idx + 1}]
                    </span>
                    <Icon className="w-5 h-5 text-charcoal" />
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-charcoal uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-serif text-sm text-charcoal leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-bone mt-6 flex items-center justify-between text-xs font-mono text-ink">
                  <span className="font-semibold uppercase tracking-wider">PROCEDURAL ADVOCACY</span>
                  <span className="text-ember font-bold">✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Office Location & Contact Callout Box */}
        <div className="p-6 sm:p-8 border-2 border-ink bg-parchment shadow-print flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-ember font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>CHAMBERS LOCATION IN DHROL</span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-ink">
              Consultation at Laxminarayan Complex, Dhrol
            </div>
            <p className="font-serif text-sm text-charcoal leading-relaxed">
              Located near the Government Hospital on the main route in Dhrol, our chambers welcome
              clients by prior appointment. For urgent custody or bail requirements in Dhrol and
              Jamnagar district, legal assistance is accessible 24/7.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-ink text-parchment px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest rounded-btn hover:bg-pureblack transition-colors"
            >
              <span>SCHEDULE INQUIRY</span>
              <ArrowRight className="w-4 h-4 text-ember" />
            </Link>

            <a
              href={`tel:${ADVOCATE_DATA.phones.primaryRaw}`}
              className="inline-flex items-center justify-center gap-2 border border-ink bg-bone px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:bg-parchment transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-ember" />
              <span>{ADVOCATE_DATA.phones.primary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
