'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, GraduationCap, ShieldCheck, Heart } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function AboutPreview() {
  const highlights = [
    "Personalized, individual treatment planning for every patient",
    "Focus on patient comfort and easing dental visit anxiety",
    "Conservative dentistry: restoring and preserving natural teeth",
    "Zero high-pressure sales or unneeded procedure upselling",
    "Preventative education to help you maintain lifelong oral health",
    "Rigorous adherence to ADA, OSHA, and CDC sterilization standards"
  ];

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium border-4 border-white aspect-[4/5] max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Mary Scannell - General & Restorative Dentist in Lowell, MA"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-dental-blue-500/90 text-xs font-bold uppercase tracking-wider mb-2">
                  Lead Dentist
                </span>
                <h3 className="text-xl font-bold">{businessInfo.doctor.name}</h3>
                <p className="text-xs text-slate-200 mt-0.5">
                  Boston University Goldman School of Dental Medicine
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl p-4 shadow-elevated border border-slate-100 max-w-[240px] text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-dental-navy">30+ Years Experience</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Serving Lowell families since 1994</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Practice Details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold tracking-wider uppercase">
              <Heart className="w-3.5 h-3.5 text-dental-blue-500" />
              <span>About Community Dentists of Lowell</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy tracking-tight leading-tight">
              Gentle, Experienced Care Centered on What You Actually Need.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Led by <strong>Dr. Mary Scannell, DMD</strong>, our practice has built a lasting reputation on honesty, clinical excellence, and personal attention. We take the time to understand your concerns, explain all findings clearly, and formulate a care plan that respects your health and budget.
            </p>

            <blockquote className="p-4 rounded-2xl bg-white border-l-4 border-dental-blue-500 text-sm text-slate-700 italic shadow-soft leading-relaxed">
              &ldquo;{businessInfo.doctor.philosophy}&rdquo;
            </blockquote>

            {/* Key Practice Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-dental-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dental-navy hover:bg-dental-navy-800 text-white font-bold text-sm shadow-soft hover:shadow-md transition-all group"
              >
                <span>Read Full Doctor Biography</span>
                <ArrowRight className="w-4 h-4 text-dental-blue-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

