import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, Shield, HeartPulse, Stethoscope } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import TreatmentFinder from '@/components/ui/TreatmentFinder';
import { servicesData } from '@/data/services';

export const metadata = {
  title: 'Our Dental Services | Cleanings, Prevention & Restorations',
  description:
    'Explore comprehensive general, preventive, and restorative dental procedures provided by Dr. Mary Scannell at Community Dentists of Lowell, MA.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Dental Procedures"
        title="Comprehensive, Gentle Dental Care"
        subtitle="Focused on preserving natural teeth, relieving discomfort, and maintaining your lifelong smile health."
        breadcrumbs={[{ name: 'Our Services' }]}
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-premium border-4 border-slate-50 aspect-[4/3] sm:aspect-[16/11]">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="px-3 py-1 rounded-full bg-dental-blue-500 text-xs font-bold uppercase tracking-wider">
                        {service.shortTitle}
                      </span>
                      <h3 className="text-xl font-bold mt-1.5">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                      Procedure Category
                    </span>
                    <h2 className="text-3xl font-extrabold text-dental-navy mt-1 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-base mt-2 leading-relaxed font-medium">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Procedure Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {service.features.map((item) => (
                      <div
                        key={item.title}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
                      >
                        <h4 className="text-xs font-bold text-dental-navy flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-dental-blue-600 flex-shrink-0" />
                          <span>{item.title}</span>
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dental-navy hover:bg-dental-navy-800 text-white font-bold text-sm shadow-soft transition-all"
                    >
                      <span>Explore Detailed {service.shortTitle} Guide</span>
                      <ArrowRight className="w-4 h-4 text-dental-blue-300" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Interactive Treatment Matcher & Care Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TreatmentFinder />
        </div>
      </section>

      {/* Philosophy of Care Callout */}
      <section className="py-16 bg-dental-blue-50/50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <HeartPulse className="w-10 h-10 text-dental-blue-600 mx-auto" />
          <h3 className="text-2xl font-bold text-dental-navy">
            Dental Healthcare vs. Disease Care
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            As a practice, we are true believers that preventative care and education are the keys to optimal dental health. Rather than waiting for irreversible problems to arise, our regular cleanings, meticulous exams, and conservative restorations keep your smile healthy, functional, and radiant.
          </p>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

