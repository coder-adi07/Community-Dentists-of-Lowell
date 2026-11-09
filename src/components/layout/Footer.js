'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUpRight, AlertTriangle } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { businessInfo } from '@/data/business';

export default function Footer() {
  return (
    <footer className="bg-dental-navy text-white pt-16 pb-12 border-t border-dental-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-dental-navy-800">
          {/* Col 1 & 2: Clinic Overview & Branding */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3">
              Community Dentists of Lowell provides personalized, conservative dental care focused on restoring, enhancing, and maintaining the natural beauty of your smile. Led by Dr. Mary Scannell, DMD.
            </p>

            <div className="pt-2">
              <blockquote className="border-l-2 border-dental-turquoise pl-3 text-xs italic text-slate-300">
                &ldquo;{businessInfo.tagline}&rdquo;
              </blockquote>
            </div>

            {/* Address discrepancy disclosure flag */}
            <div className="mt-4 p-3 rounded-xl bg-dental-navy-950/70 border border-dental-navy-700/80 text-[11px] text-slate-300 flex items-start gap-2 max-w-md">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Location Note:</strong> Official practice address is <strong>1484 Gorham St, Lowell, MA 01852</strong>. (Flagged: Facebook page references 1485 Gorham St; official website records 1484 Gorham St).
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-dental-blue-200 mb-4">
              Explore Practice
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Dr. Scannell
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Dental Services
                </Link>
              </li>
              <li>
                <Link href="/patient-information" className="text-slate-300 hover:text-white transition-colors">
                  Patient Information & Payment
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-300 hover:text-white transition-colors">
                  Patient Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact & Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-dental-blue-200 mb-4">
              Dental Procedures
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/cleanings-prevention" className="text-slate-300 hover:text-white transition-colors">
                  Cleanings & Prevention
                </Link>
              </li>
              <li>
                <Link href="/services/cleanings-prevention" className="text-slate-300 hover:text-white transition-colors">
                  Dental Exams & Cleanings
                </Link>
              </li>
              <li>
                <Link href="/services/cleanings-prevention" className="text-slate-300 hover:text-white transition-colors">
                  Digital X-Rays & Sealants
                </Link>
              </li>
              <li>
                <Link href="/services/restorations" className="text-slate-300 hover:text-white transition-colors">
                  Restorations Overview
                </Link>
              </li>
              <li>
                <Link href="/services/restorations" className="text-slate-300 hover:text-white transition-colors">
                  Composite Fillings & Caps
                </Link>
              </li>
              <li>
                <Link href="/services/restorations" className="text-slate-300 hover:text-white transition-colors">
                  Crowns & Fixed Bridges
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-dental-blue-200 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href={businessInfo.contact.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-dental-blue-300 flex-shrink-0 mt-0.5 group-hover:text-white" />
                <span>1484 Gorham St<br />Lowell, MA 01852</span>
              </a>

              <a
                href={`tel:${businessInfo.contact.phoneClean}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-dental-blue-300 flex-shrink-0" />
                <span className="font-semibold text-white">{businessInfo.contact.phone}</span>
              </a>

              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-dental-blue-300 flex-shrink-0" />
                <span className="truncate">{businessInfo.contact.email}</span>
              </a>

              <div className="pt-2 border-t border-dental-navy-800">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Clock className="w-4 h-4 text-dental-blue-300" />
                  <span>Tue – Fri: 9am – 5pm</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 pl-6">
                  Mon: Admin / By Appt • Sat-Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Community Dentists of Lowell. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Dr. Mary Scannell, DMD</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-dental-turquoise" />
              <span>ADA, OSHA & CDC Sterilization Protocols</span>
            </span>
            <a
              href={businessInfo.contact.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

