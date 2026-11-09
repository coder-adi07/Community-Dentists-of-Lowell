'use client';

import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function TopBar() {
  return (
    <div className="bg-dental-navy text-white text-xs border-b border-dental-navy-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          {/* Left: Location & Hours */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-slate-300">
            <a
              href={businessInfo.contact.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <MapPin className="w-3.5 h-3.5 text-dental-blue-300 group-hover:text-white transition-colors" />
              <span>{businessInfo.contact.address.full}</span>
            </a>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-dental-blue-300" />
              <span>Tue – Fri: 9:00 AM – 5:00 PM</span>
            </div>
          </div>

          {/* Right: Emergency/Phone & Standards badge */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-dental-turquoise" />
              <span>ADA, OSHA & CDC Compliant</span>
            </div>

            <a
              href={`tel:${businessInfo.contact.phoneClean}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white bg-dental-blue-600/60 hover:bg-dental-blue-600 px-3 py-1 rounded-full transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-dental-blue-200" />
              <span>{businessInfo.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

