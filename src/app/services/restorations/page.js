import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Check, Sparkles, Heart, Calendar, Phone, ArrowRight, HelpCircle, Activity } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Accordion from '@/components/ui/Accordion';
import { servicesData } from '@/data/services';
import { businessInfo } from '@/data/business';

export const metadata = {
  title: 'Restorative Dentistry | Fillings, Crowns & Tooth Repair',
  description:
    'Gentle restorative dental care at Community Dentists of Lowell. Dr. Mary Scannell repairs damaged teeth with tooth-colored composite fillings, precision crowns, and dental bridges.',
};

export default function RestorationsPage() {
  const service = servicesData.find((s) => s.id === 'restorations');

  const faqs = [
    {
      q: 'What is the advantage of composite (tooth-colored) fillings?',
      a: 'Composite resin fillings match the natural shade of your enamel, creating a virtually invisible restoration. Furthermore, composite bonds directly to the tooth structure, requiring less removal of healthy natural enamel than traditional metal amalgams.'
    },
    {
      q: 'When is a dental crown recommended instead of a filling?',
      a: 'When a tooth is cracked, deeply broken, or has extensive decay compromising more than half of its structure, a simple filling may not provide enough structural support. A crown covers and encases the entire visible portion of the tooth, protecting it from fracturing under chewing forces.'
    },
    {
      q: 'How does a dental bridge work?',
      a: 'A fixed dental bridge replaces one or more missing teeth by spanning the gap between neighboring teeth. The bridge consists of artificial replacement teeth anchored securely to crowns placed on adjacent natural teeth, restoring your bite alignment and natural chewing capability.'
    },
    {
      q: 'Will restorative procedures hurt?',
      a: 'Patient comfort is Dr. Scannell\'s top priority. We use gentle, effective local anesthesia and unhurried chairside techniques to ensure you remain completely comfortable and pain-free throughout your procedure.'
    }
  ];

  return (
    <>
      <PageHeader
        badge="Restorative Care"
        title="Restorations & Tooth Repair"
        subtitle="Repairing damaged teeth, relieving discomfort, and renewing normal chewing function with conservative, aesthetic treatments."
        breadcrumbs={[
          { name: 'Our Services', href: '/services' },
          { name: 'Restorations' }
        ]}
      />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top Intro with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                Conservative Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy tracking-tight leading-tight">
                Comfortable, Least-Invasive Treatment
              </h2>
              <blockquote className="p-4 rounded-2xl bg-dental-blue-50/60 border-l-4 border-dental-blue-500 text-sm sm:text-base text-slate-700 italic">
                &ldquo;Should your teeth ever require a restorative treatment, you can rest assured knowing we will always discuss with you the available options, and recommend what we believe to be the most comfortable and least invasive treatment.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Damaged or decayed teeth can cause persistent discomfort, difficulty chewing, and loss of confidence. Dr. Scannell specializes in conservative restorations designed to save problem teeth, re-establish proper occlusion, and blend seamlessly with your natural smile.
              </p>
              
              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Benefits of Professional Restorations:
                </h3>
                {service.patientBenefits.map((b) => (
                  <div key={b} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-dental-turquoise flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border-4 border-slate-50 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src={service.cardImage}
                  alt="Restorative dental treatment and tooth repair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Natural-Looking Dental Restorations</p>
                  <p className="text-xs text-slate-200">Community Dentists of Lowell • Dr. Mary Scannell</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Procedures Breakdown (6 Components) */}
          <div className="pt-8">
            <div className="max-w-2xl mb-10 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                Treatment Types
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dental-navy tracking-tight">
                Our Restorative Solutions
              </h2>
              <p className="text-sm text-slate-600">
                Carefully tailored to the exact degree of tooth damage and aesthetic goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feat, idx) => (
                <div
                  key={feat.title}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft hover:shadow-premium hover:bg-white transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <Activity className="w-5 h-5 text-dental-blue-500" />
                  </div>
                  <h3 className="text-base font-bold text-dental-navy">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Before & After Restoration Slider */}
          <div className="pt-8 border-t border-slate-200">
            <BeforeAfterSlider
              title="Restoring Worn & Fractured Teeth"
              subtitle="See how natural tooth structure and aesthetic contours are gently re-established."
            />
          </div>

          {/* Frequently Asked Questions Accordion */}
          <div className="pt-8 border-t border-slate-200">
            <div className="max-w-2xl mb-8 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                Patient Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dental-navy tracking-tight">
                Frequently Asked Questions About Restorations
              </h2>
            </div>

            <Accordion items={faqs} />
          </div>

        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

