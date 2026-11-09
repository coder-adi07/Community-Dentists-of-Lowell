import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Check, Sparkles, HeartHandshake, Calendar, Phone, ArrowRight, Clock, HelpCircle } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import Accordion from '@/components/ui/Accordion';
import { servicesData } from '@/data/services';
import { businessInfo } from '@/data/business';

export const metadata = {
  title: 'Cleanings & Prevention | Exams, Cleanings, X-Rays & Sealants',
  description:
    'Comprehensive preventative dental care at Community Dentists of Lowell. Professional dental cleanings, exams, oral cancer screenings, digital X-rays, and sealants.',
};

export default function CleaningsPreventionPage() {
  const service = servicesData.find((s) => s.id === 'cleanings-prevention');

  const faqs = [
    {
      q: 'How often should I have a dental cleaning and exam?',
      a: 'We generally recommend a professional cleaning and examination every six months for most patients. However, depending on your gum health, tartar buildup, or history of periodontal conditions, Dr. Scannell may recommend a personalized schedule that best protects your smile.'
    },
    {
      q: 'What is included in a comprehensive dental exam?',
      a: 'During your exam, Dr. Scannell checks your overall oral health, screens for signs of tooth decay, evaluates periodontal (gum) health, performs an oral cancer screening, inspects existing restorations, and reviews digital diagnostic X-rays when necessary.'
    },
    {
      q: 'Why are digital dental X-rays important?',
      a: 'Digital radiographs allow us to detect problems that cannot be seen with the naked eye—such as interdental decay between teeth, bone loss beneath the gumline, abscesses, cysts, or developmental issues. Our digital equipment uses minimal radiation while providing high-resolution clarity.'
    },
    {
      q: 'What are dental sealants and who needs them?',
      a: 'A sealant is a thin, protective coating applied to the deep chewing grooves of back teeth (molars). Sealants act as a physical shield against food particles and cavity-causing bacteria, making them especially valuable for children, teens, and adults prone to molar decay.'
    }
  ];

  return (
    <>
      <PageHeader
        badge="Preventative Dentistry"
        title="Cleanings & Prevention"
        subtitle="A cooperative effort between you, Dr. Scannell, and our dental team to preserve natural teeth and prevent dental disease before it starts."
        breadcrumbs={[
          { name: 'Our Services', href: '/services' },
          { name: 'Cleanings & Prevention' }
        ]}
      />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top Intro with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy tracking-tight leading-tight">
                Dental Healthcare vs. Disease Care
              </h2>
              <blockquote className="p-4 rounded-2xl bg-dental-blue-50/60 border-l-4 border-dental-blue-500 text-sm sm:text-base text-slate-700 italic">
                &ldquo;A preventive program is a cooperative effort by the patient, dentist, and dental staff to preserve the natural dentition and supporting structures by preventing the onset, progress, and recurrence of dental diseases and conditions.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Regular dental cleanings and examinations are the bedrock of lifelong oral health. Rather than waiting for severe toothaches or extensive decay, preventative dentistry allows us to catch minor concerns early, perform gentle non-invasive interventions, and protect your natural enamel.
              </p>
              
              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Benefits of Preventative Care:
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
                  alt="Dental cleaning and preventative examination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-bold">Gentle Dental Hygiene & Prevention</p>
                  <p className="text-xs text-slate-200">Community Dentists of Lowell • Dr. Mary Scannell</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Procedures Breakdown (6 Components) */}
          <div className="pt-8">
            <div className="max-w-2xl mb-10 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                Detailed Procedures
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dental-navy tracking-tight">
                What Happens During Your Preventative Visit
              </h2>
              <p className="text-sm text-slate-600">
                Each component is delivered with precision, gentle handling, and full explanation.
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
                    <ShieldCheck className="w-5 h-5 text-dental-turquoise" />
                  </div>
                  <h3 className="text-base font-bold text-dental-navy">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions Accordion */}
          <div className="pt-8 border-t border-slate-200">
            <div className="max-w-2xl mb-8 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                Patient Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dental-navy tracking-tight">
                Frequently Asked Questions About Cleanings & Exams
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

