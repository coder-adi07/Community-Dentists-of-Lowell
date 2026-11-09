'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Phone, ShieldCheck, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import AppointmentModal from '@/components/layout/AppointmentModal';
import { businessInfo } from '@/data/business';

// Dynamic import with SSR disabled for Three.js Canvas
const ToothCanvas = dynamic(() => import('@/components/three/ToothCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center bg-dental-blue-50/40 rounded-2xl">
      <div className="w-8 h-8 border-2 border-dental-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
});

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-dental-blue-50/30 to-slate-50/60">
        {/* Subtle decorative background ambient orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-dental-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-dental-blue-100 shadow-soft text-dental-navy text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-dental-blue-500 animate-pulse" />
                <span>Community Dentists of Lowell</span>
                <span className="text-slate-300">•</span>
                <span className="text-dental-blue-600 font-semibold lowercase">Lowell, MA</span>
              </div>

              {/* Expressive Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dental-navy tracking-tight leading-[1.12]">
                Dare to Smile.{' '}
                <span className="text-gradient block sm:inline">
                  Love Every Moment.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                {businessInfo.heroSubheadline} Comprehensive treatment planning, gentle preventative care, and conservative restorations led by{' '}
                <strong className="text-dental-navy font-semibold">Dr. Mary Scannell, DMD</strong>.
              </p>

              {/* Action Buttons & Phone */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-bold text-base shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 text-dental-blue-100" />
                  <span>Book an Appointment</span>
                </button>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-dental-navy font-bold text-base border border-slate-200/90 shadow-soft hover:shadow-md transition-all duration-200 group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-dental-blue-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Direct Phone Assistance Bar */}
              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
                <a
                  href={`tel:${businessInfo.contact.phoneClean}`}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-dental-blue-600 font-semibold transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-dental-blue-50 flex items-center justify-center text-dental-blue-600">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>Call directly: {businessInfo.contact.phone}</span>
                </a>

                <div className="flex items-center gap-1.5 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-dental-turquoise" />
                  <span>Cleanings, Exams & Restorations</span>
                </div>
              </div>

              {/* Mini Social Proof Bar */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 font-bold text-slate-800 text-xs">4.7 / 5.0</span>
                </div>
                <span className="text-xs text-slate-500">
                  Trusted by Greater Lowell families for over 30 years
                </span>
              </div>
            </motion.div>

            {/* Right Column: Layered 3D + Dental Art Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              {/* Main Container Card */}
              <div className="relative rounded-3xl p-3 sm:p-5 bg-white/70 backdrop-blur-xl border border-white/80 shadow-premium overflow-hidden">
                {/* 3D Interactive Tooth Canvas */}
                <div className="relative z-10 w-full rounded-2xl bg-gradient-to-b from-dental-blue-50/40 via-white to-slate-50/40 overflow-hidden">
                  <ToothCanvas />
                </div>

                {/* Floating Info Pill 1: Clinic Highlight */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-premium border border-slate-100"
                >
                  <div className="w-9 h-9 rounded-xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center font-bold text-sm">
                    BU
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-dental-navy leading-none">Dr. Mary Scannell, DMD</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Boston Univ. Dental School &apos;94</p>
                  </div>
                </motion.div>

                {/* Floating Info Pill 2: Brand Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute bottom-6 left-6 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-dental-navy/95 text-white backdrop-blur-md shadow-premium border border-white/10"
                >
                  <div className="w-8 h-8 rounded-xl bg-dental-blue-500/30 text-dental-turquoise flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white leading-none">&ldquo;Dare to Smile&rdquo;</p>
                    <p className="text-[10px] text-dental-blue-200 mt-0.5">Gentle, conservative dentistry</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

