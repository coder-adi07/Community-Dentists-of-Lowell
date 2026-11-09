'use client';

import React from 'react';
import Link from 'next/link';
import { CreditCard, Banknote, ShieldAlert, PhoneCall, Check, ArrowRight } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function PatientInfoPreview() {
  const cardLogos = ['VISA', 'Mastercard', 'DISCOVER', 'AMEX'];

  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold tracking-wider uppercase">
            <CreditCard className="w-3.5 h-3.5 text-dental-blue-500" />
            <span>Financial & Office Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy tracking-tight">
            Patient Financial Information.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We are committed to making your dental care accessible, straightforward, and transparent, with flexible payment methods and helpful insurance coordination.
          </p>
        </div>

        {/* 2-Column Card Grid: Payment & Insurance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Accepted Payment Options */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-dental-navy">
                Payment Methods Accepted
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For your convenience, payment is due at the time service is rendered unless other arrangements have been made in advance. We accept multiple payment options:
              </p>

              {/* Payment methods list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {businessInfo.paymentOptions.map((opt) => (
                  <div key={opt.name} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-dental-navy">{opt.name}</p>
                      <p className="text-[11px] text-slate-500">{opt.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Major Credit Card Badges */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Credit & Debit Card Networks:
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {cardLogos.map((card) => (
                    <span
                      key={card}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-extrabold border border-slate-200 tracking-wider"
                    >
                      {card}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              Receipts and detailed statements are provided for your medical HSA/FSA records.
            </div>
          </div>

          {/* Card 2: Dental Insurance Guidance */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-dental-navy">
                Dental Insurance Verification
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dental insurance is an agreement between you and your provider. We make every effort to help you understand and maximize your benefits, submit claims, and estimate any out-of-pocket costs accurately.
              </p>

              {/* Notice Banner */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed space-y-2">
                <p className="font-bold">Contact Our Lowell Office Prior to Your Visit:</p>
                <p>
                  Because dental plans and benefit tiers vary significantly, please call our front desk directly at <strong>(978) 459-4949</strong>. Our staff will be glad to look into your specific plan details, eligibility, and copay requirements.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-dental-blue-50/50 border border-dental-blue-100 text-xs text-dental-navy flex items-center justify-between">
                <div>
                  <p className="font-bold">Have an Insurance Question?</p>
                  <p className="text-slate-500">Our front desk team is here to assist.</p>
                </div>
                <a
                  href={`tel:${businessInfo.contact.phoneClean}`}
                  className="px-4 py-2 rounded-xl bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>(978) 459-4949</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/patient-information"
                className="inline-flex items-center gap-2 text-sm font-bold text-dental-blue-600 hover:text-dental-blue-700 group"
              >
                <span>Read Full Patient Guidelines</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

