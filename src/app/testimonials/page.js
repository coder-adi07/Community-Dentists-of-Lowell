import Link from 'next/link';
import { Star, Quote, CheckCircle2, Heart, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import { testimonialsData } from '@/data/testimonials';

export const metadata = {
  title: 'Patient Testimonials & Reviews',
  description:
    'Read verified patient reviews and testimonials for Dr. Mary Scannell at Community Dentists of Lowell, Massachusetts.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        badge="Patient Reviews"
        title="Real Stories From Verified Patients"
        subtitle="Genuine experiences and unedited feedback from patients who count on Community Dentists of Lowell for honest, gentle oral healthcare."
        breadcrumbs={[{ name: 'Testimonials' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Aggregate Rating Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-dental-navy to-dental-blue-800 text-white shadow-soft flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-turquoise">
                Community Reputation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                4.7 Out of 5.0 Average Patient Rating
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                Serving Greater Lowell with honesty, efficiency, and compassionate chairside care for over three decades.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex-shrink-0 text-center">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-extrabold text-white">4.7 / 5.0</span>
              <span className="text-[11px] text-slate-300">Verified Patient Feedback</span>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft hover:shadow-premium hover:bg-white transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{item.source}</span>
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                    {item.highlight}
                  </p>

                  <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <p className="text-xs font-bold text-dental-navy">{item.author}</p>
                  <p className="text-[11px] text-slate-400">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Patient Guarantee of Authenticity */}
          <div className="p-6 rounded-2xl bg-dental-neutral border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-dental-blue-500 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-dental-navy">Commitment to Review Integrity:</strong> All testimonials presented on this website are actual patient reviews provided to Community Dentists of Lowell. We do not edit, invent, or incentivize patient feedback.
            </div>
          </div>

        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

