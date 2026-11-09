'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Check, Activity } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold tracking-wider uppercase">
              <Activity className="w-3.5 h-3.5 text-dental-blue-500" />
              <span>Specialized Care Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy tracking-tight">
              Comprehensive, Conservative Dental Services.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We focus on preserving what nature gave you. From gentle hygiene cleanings to durable restorative repairs, all procedures are performed with modern techniques and personalized care.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-dental-blue-600 hover:text-dental-blue-700 group flex-shrink-0"
          >
            <span>View All Service Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2 Primary Service Hero Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/80 hover:border-dental-blue-300 transition-all duration-300 hover:shadow-premium flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={service.cardImage}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/80 via-dental-navy/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-dental-navy shadow-sm">
                    {service.shortTitle}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-1">{service.tagline}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.summary}
                </p>

                {/* Key Sub-services Bullet List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/70">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Includes Treatment For:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f.title} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-dental-blue-500 flex-shrink-0" />
                        <span className="truncate">{f.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-dental-navy group-hover:text-dental-blue-600 transition-colors"
                  >
                    <span>Learn More About {service.shortTitle}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-xs text-slate-400 font-medium">
                    Dr. Mary Scannell
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

