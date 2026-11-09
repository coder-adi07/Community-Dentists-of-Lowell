'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Smile, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function PatientExperience() {
  const comfortPoints = [
    {
      title: "Gentle Chairside Manner",
      desc: "Dr. Scannell brings humor, empathy, and clarity to each visit, putting even the most anxious patients at ease."
    },
    {
      title: "Clear, Transparent Communication",
      desc: "No surprises or confusing jargon. We explain what we see and walk you through every step before proceeding."
    },
    {
      title: "Conservative, Mindful Treatments",
      desc: "We prioritize minimally invasive methods that preserve as much natural enamel and tooth structure as possible."
    },
    {
      title: "Unhurried, Attentive Visits",
      desc: "You are never treated like a number. We take the time necessary to ensure thoroughness, comfort, and peace of mind."
    }
  ];

  return (
    <section className="py-24 bg-dental-navy text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dental-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reassuring Patient Experience Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dental-blue-500/20 text-dental-blue-200 border border-dental-blue-400/30 text-xs font-bold tracking-wider uppercase">
              <Smile className="w-3.5 h-3.5 text-dental-turquoise" />
              <span>A Relaxing, Comfortable Visit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              We Understand Dental Anxiety.{' '}
              <span className="text-dental-blue-300">We Make the Difference.</span>
            </h2>

            <blockquote className="p-5 rounded-2xl bg-white/5 border-l-4 border-dental-turquoise text-slate-200 text-sm sm:text-base leading-relaxed italic">
              &ldquo;Building a foundation of trust by treating our patients as special individuals is vital to our success. We understand how uneasy some patients may feel about their dental visits, and how we can make a difference in providing a relaxing and positive experience.&rdquo;
            </blockquote>

            <p className="text-slate-300 text-sm leading-relaxed">
              From our welcoming front desk team to Dr. Scannell&apos;s calm, communicative approach, our entire office is configured to alleviate tension, answer questions patiently, and deliver the highest standard of dental wellness.
            </p>

            {/* Comfort Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {comfortPoints.map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-dental-blue-400/40 transition-colors">
                  <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-dental-turquoise flex-shrink-0" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Layout with Real Warmth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
                alt="Comfortable, gentle dental care environment at Community Dentists of Lowell"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <p className="text-sm font-bold">Gentle Care Philosophy</p>
                  <p className="text-xs text-slate-300">Designed around your comfort and confidence</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-dental-blue-500/80 backdrop-blur-md flex items-center justify-center text-white">
                  <Heart className="w-5 h-5 text-dental-turquoise" />
                </div>
              </div>
            </div>

            {/* Patient review quote overlay card */}
            <div className="mt-4 p-4 rounded-2xl bg-dental-navy-950/90 border border-white/15 backdrop-blur-md shadow-elevated text-xs text-slate-200">
              <p className="italic leading-relaxed">
                &ldquo;Overall, I had a very positive experience! Dr. Scannell is very personable, kind, and informative. She was very funny and nice -- I really enjoyed talking with her.&rdquo;
              </p>
              <div className="mt-2 text-right font-semibold text-dental-blue-300">
                — Verified Patient, Community Dentists of Lowell
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

