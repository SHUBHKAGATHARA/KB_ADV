'use client';

import React from 'react';
import Image from 'next/image';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Shield, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-parchment border-b border-ink py-16 sm:py-20 lg:py-28">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-ink pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ember font-bold">02</span>
            <span className="font-mono text-xs tracking-widest uppercase text-ink font-semibold">
              ADVOCATE PROFILE & JURISPRUDENCE
            </span>
          </div>
          <span className="font-mono text-xs text-charcoal tracking-wider uppercase hidden sm:inline">
            ENROLLMENT NO. {ADVOCATE_DATA.enrollmentNo}
          </span>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Drop-Cap Narrative Biography (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="legal-seal">PRACTICING ADVOCATE SINCE {ADVOCATE_DATA.experienceSince}</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
                LEGAL COUNSEL
                <br />
                BUILT ON EXPERIENCE,
                <br />
                INTEGRITY AND
                <br />
                PROFESSIONALISM.
              </h2>
            </div>

            <div className="space-y-5 text-charcoal font-serif text-lg sm:text-xl leading-relaxed">
              <p>
                <span className="float-left font-display text-6xl sm:text-7xl lg:text-8xl font-black text-ink leading-[0.78] pr-3.5 pt-1 select-none">
                  K
                </span>
                .B. Kagathara has stood at the forefront of trial advocacy and legal
                counsel in Dhrol, Jamnagar, and the wider Saurashtra region for more than
                two decades. Enrolled with the Gujarat State Bar Council in 2004 under
                Enrollment No. 488/2004, his practice was founded on the fundamental
                tenet that true justice demands thorough statutory command, meticulous
                evidentiary preparation, and unwavering fidelity to the client’s legal rights.
              </p>
              <p>
                Over 22+ years of continuous legal practice, Adv. K.B. Kagathara, supported by
                associate advocate Jagdish Kagathara, has represented citizens, agricultural
                landholders, commercial proprietors, and families in high-stakes penal disputes,
                complex civil litigation, and delicate matrimonial matters. Their courtroom
                presence is marked by calm authority, acute cross-examination technique, and an
                unyielding commitment to legal ethics.
              </p>
              <p>
                Unlike volume-driven consultancies, every client matter entrusted to this office
                receives direct senior advocate scrutiny. From the drafting of the initial plaint or
                bail application to final arguments before the bench, each strategy is tailored to
                the exact evidentiary landscape of the case.
              </p>
            </div>

            {/* Core Practice Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-bone">
              <div className="p-4 border border-ink bg-bone/40">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4 text-ember" />
                  <span>COURTROOM ADVOCACY</span>
                </div>
                <p className="text-xs text-charcoal font-serif">
                  Extensive trial representation before Session, Civil, and Appellate jurisdictions in Gujarat.
                </p>
              </div>

              <div className="p-4 border border-ink bg-bone/40">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4 text-ember" />
                  <span>STATUTORY INTEGRITY</span>
                </div>
                <p className="text-xs text-charcoal font-serif">
                  Grounded in procedural accuracy and the professional code of the Bar Council of India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Secondary Portrait & Institutional Seal (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-ink p-3 bg-bone shadow-print">
              <div className="relative w-full aspect-[2/3] sm:aspect-[3/4] lg:aspect-[2/3] max-h-[580px] overflow-hidden bg-ink">
                <Image
                  src="/secondary-portrait.png"
                  alt="Advocate Jagdish Kagathara, Associate Advocate at K.B. Kagathara Chambers, Dhrol, Gujarat"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top filter contrast-[1.02] sharp transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
              <div className="mt-3 pt-3 border-t border-ink/40 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-ink uppercase">ADV. JAGDISH KAGATHARA</span>
                <span className="text-charcoal uppercase font-semibold">ASSOCIATE ADVOCATE</span>
              </div>
            </div>

            {/* Credential Parchment Card */}
            <div className="p-6 border border-ink bg-parchment space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-ember uppercase font-bold">
                <Shield className="w-4 h-4" />
                <span>OFFICIAL BAR ENROLLMENT</span>
              </div>
              <div className="space-y-1">
                <div className="font-display text-xl font-bold text-ink">
                  Adv. K.B. Kagathara Chambers
                </div>
                <div className="font-mono text-sm text-charcoal">
                  Senior Counsel: <strong className="text-ink">Adv. K.B. Kagathara</strong>
                </div>
                <div className="font-mono text-sm text-charcoal">
                  Associate Counsel: <strong className="text-ink">Adv. Jagdish Kagathara</strong>
                </div>
                <div className="font-mono text-sm text-charcoal">
                  Enrollment Number: <strong className="text-ink">488/2004</strong>
                </div>
                <div className="font-mono text-sm text-charcoal">
                  Year of Admission: <strong className="text-ink">2004</strong>
                </div>
                <div className="font-mono text-sm text-charcoal">
                  Jurisdiction: <strong className="text-ink">Dhrol, Jamnagar, Rajkot & Gujarat</strong>
                </div>
              </div>
              <p className="font-serif text-xs text-charcoal/90 pt-2 border-t border-bone">
                Serving the bar continuously since 2004 with verified competence in Indian penal, civil, and land laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
