'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Sparkles, Clock, MapPin } from 'lucide-react';
import AppointmentModal from '@/components/layout/AppointmentModal';
import { businessInfo } from '@/data/business';

export default function AppointmentCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-dental-navy via-dental-navy-900 to-dental-blue-700 text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-dental-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-dental-blue-200 border border-white/10 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-dental-turquoise" />
              <span>Community Dentists of Lowell</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Love Your Smile?
            </h2>

            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
              Get in touch with Community Dentists of Lowell to discuss your dental care needs. Whether you need a regular cleaning, preventive checkup, or restorative repair, Dr. Mary Scannell is here for you.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-dental-navy font-bold text-base shadow-elevated transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-dental-blue-600" />
                <span>Request an Appointment</span>
              </button>

              <a
                href={`tel:${businessInfo.contact.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-dental-blue-600 hover:bg-dental-blue-500 text-white font-bold text-base border border-white/20 shadow-soft transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-dental-blue-200" />
                <span>Call Our Office: (978) 459-4949</span>
              </a>
            </div>

            {/* Quick Location & Hours Footnote */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-dental-turquoise" />
                <span>1484 Gorham St, Lowell, MA 01852</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-dental-turquoise" />
                <span>Tue – Fri: 9:00 AM – 5:00 PM</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

