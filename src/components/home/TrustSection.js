'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, HeartHandshake, Award } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function TrustSection() {
  const stats = [
    {
      value: "30+",
      label: "Years of Care",
      desc: "Practicing continuous gentle dentistry in Greater Lowell since 1994."
    },
    {
      value: "4.7★",
      label: "Patient Rating",
      desc: "Praised for honest care, efficiency, and zero unneeded procedures."
    },
    {
      value: "100%",
      label: "Personalized Plans",
      desc: "Comprehensive exams tailored to your unique anatomical oral health."
    },
    {
      value: "ADA / CDC",
      label: "Sterilization Standards",
      desc: "Uncompromising infection control and strict hospital-grade hygiene."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-dental-turquoise" />
            <span>Dedicated Clinical Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy tracking-tight">
            Your Smile Is Our Priority.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At Community Dentists of Lowell, we believe true dental care begins with listening. Dr. Mary Scannell and our dental team provide gentle, high-standard dental care that honors your comfort, preserves natural tooth structure, and keeps your smile healthy for life.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/70 hover:border-dental-blue-300 hover:bg-white transition-all duration-300 hover:shadow-soft group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-dental-navy group-hover:text-dental-blue-600 transition-colors">
                {item.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1 mb-2">
                {item.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

