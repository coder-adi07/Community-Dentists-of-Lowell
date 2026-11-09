'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, BookOpen, UserCheck, Stethoscope } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function WhyChooseUs() {
  const icons = [
    UserCheck,
    BookOpen,
    ShieldCheck,
    Stethoscope,
    Heart,
    Sparkles
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-dental-turquoise" />
            <span>Core Practice Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dental-navy tracking-tight">
            Why Patients Choose Community Dentists of Lowell.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our practice is built on enduring principles of clinical excellence, transparency, and personal connection. We hold ourselves to uncompromising standards every day.
          </p>
        </div>

        {/* Sophisticated Editorial Grid (6 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessInfo.pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="relative p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Number Index + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center group-hover:bg-dental-blue-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-dental-blue-100 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-dental-navy mb-3 group-hover:text-dental-blue-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-dental-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Dr. Mary Scannell Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

