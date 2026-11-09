'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-dental-blue-600 text-dental-blue-600" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dental-navy tracking-tight">
            Loved by Patients Across Greater Lowell.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real stories and unedited reviews from patients who trust Dr. Mary Scannell with their smiles.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-dental-blue-50/70 via-slate-50 to-white p-8 sm:p-12 border border-dental-blue-100 shadow-soft">
            <Quote className="w-16 h-16 text-dental-blue-200/60 absolute top-6 right-8 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Star Rating & Verified Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2">5.0 Star Experience</span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-700 text-xs font-semibold shadow-xs border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{current.source}</span>
                </span>
              </div>

              {/* Animated Quote */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-dental-navy leading-snug tracking-tight">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-base text-dental-navy">{current.author}</p>
                      <p className="text-xs text-slate-500">{current.location} • Dr. Mary Scannell Care</p>
                    </div>

                    {/* Carousel Nav Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-dental-navy border border-slate-200 shadow-sm flex items-center justify-center transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-semibold text-slate-500 px-1">
                        {activeIndex + 1} / {testimonialsData.length}
                      </span>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-dental-navy border border-slate-200 shadow-sm flex items-center justify-center transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 3-Column Testimonial Grid preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 flex flex-col justify-between space-y-4 hover:bg-white hover:shadow-soft transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-dental-blue-600 uppercase tracking-wide">
                  {item.highlight}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 text-xs">
                <span className="font-bold text-dental-navy">{item.author}</span>
                <span className="text-slate-400 block">{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to all testimonials */}
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dental-blue-50 hover:bg-dental-blue-100 text-dental-blue-600 font-bold text-sm transition-colors"
          >
            <span>Read All Verified Patient Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

