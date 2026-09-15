'use client';

import React from 'react';
import { ADVOCATE_DATA } from '@/data/advocate';
import { Scale, Clock, Award, ShieldAlert } from 'lucide-react';

export default function ExperienceStats() {
  const stats = [
    {
      value: "22+",
      label: "YEARS OF PRACTICE",
      subtext: "Continuously representing clients before the Gujarat State Bar Council since 2004.",
      icon: Award,
    },
    {
      value: "500+",
      label: "CASES HANDLED",
      subtext: "Extensive courtroom proceedings across penal defense, civil suits, and property matters.",
      icon: Scale,
    },
    {
      value: "488/2004",
      label: "BAR ENROLLMENT NO.",
      subtext: "Officially certified advocate admitted to the Gujarat State Bar Council in 2004.",
      icon: ShieldAlert,
    },
    {
      value: "24/7",
      label: "EMERGENCY COUNSEL",
      subtext: "Round-the-clock availability for urgent arrest, remand hearings, and emergency stay motions.",
      icon: Clock,
    },
  ];

  return (
    <section id="credentials" className="relative w-full bg-bone border-b border-ink">
      <div className="max-w-editorial mx-auto">
        {/* Section Header strip */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-ink flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="font-bold text-ember">03</span>
            <span className="uppercase text-ink font-semibold tracking-widest">
              CREDENTIALS & RECORD OF PRACTICE
            </span>
          </div>
          <span className="text-charcoal tracking-wider uppercase hidden sm:inline">
            ESTABLISHED 2004 • DHROL, GUJARAT
          </span>
        </div>

        {/* 4-Column Collapsed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b lg:border-b-0 border-ink divide-y sm:divide-y-0 sm:divide-x divide-ink">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-parchment hover:bg-bone transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-ember font-bold">
                      [0{idx + 1}]
                    </span>
                    <Icon className="w-5 h-5 text-charcoal group-hover:text-ink transition-colors" />
                  </div>

                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight">
                    {item.value}
                  </div>

                  <div className="font-mono text-xs sm:text-sm font-bold text-ink uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>

                <p className="font-serif text-sm text-charcoal pt-6 border-t border-bone/80 mt-6 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
