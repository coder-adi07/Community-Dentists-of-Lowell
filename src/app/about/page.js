import Image from 'next/image';
import Link from 'next/link';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import { businessInfo } from '@/data/business';

export const metadata = {
  title: 'About Dr. Mary Scannell & Our Practice',
  description:
    'Learn about Dr. Mary Scannell, DMD (Boston University Goldman School of Dental Medicine) and the patient-first philosophy at Community Dentists of Lowell, MA.',
};

export default function AboutPage() {
  const credentials = [
    {
      title: 'Doctor of Dental Medicine (DMD)',
      org: 'Boston University Henry M. Goldman School of Dental Medicine',
      year: 'Class of 1994',
      desc: 'Rigorous doctoral dental clinical training focusing on general, restorative, and oral healthcare.'
    },
    {
      title: '30+ Years Active Practice',
      org: 'Community Dentists of Lowell, MA',
      year: '1994 – Present',
      desc: 'Three continuous decades providing conservative, patient-centered care to families in Lowell and surrounding Merrimack Valley communities.'
    },
    {
      title: 'Strict Sterilization Protocols',
      org: 'ADA, OSHA & CDC Compliance',
      year: 'Ongoing Protocol',
      desc: 'Uncompromising hospital-grade sterilization and cross-contamination prevention for maximum patient protection.'
    }
  ];

  const standards = [
    {
      title: 'High Standards of Clinical Excellence',
      desc: 'A standard of excellence in personalized dental care enables us to provide the quality dental services our patients deserve. We provide comprehensive treatment planning and use restorative and cosmetic dentistry to achieve optimal dental health.'
    },
    {
      title: 'Preventative Education vs. Disease Care',
      desc: 'As a practice, we are true believers that preventative care and education are the keys to optimal dental health. We strive to provide "dental health care" vs. "disease care". A preventive program is a cooperative effort by the patient, dentist, and dental staff to preserve the natural dentition and supporting structures.'
    },
    {
      title: 'Uncompromising Safety & Sterilization',
      desc: 'Infection control in our office is vital to us. To protect our patients and ourselves, we strictly maintain sterilization and cross contamination processes using standards recommended by the American Dental Association (ADA), the Occupational Safety and Health Administration (OSHA), and the Center for Disease Control (CDC).'
    },
    {
      title: 'Training & Continual Learning',
      desc: 'As your dental health professionals, we want you to be confident knowing that we are a team of highly trained and skilled clinicians. We pride ourselves in providing the care you need to keep your smile healthy through commitment to continual education and modern clinical learning.'
    },
    {
      title: 'A Positive, Relaxing Experience',
      desc: 'Building a foundation of trust by treating our patients as special individuals is vital to our success. We understand how uneasy some patients may feel about their dental visits, and how we can make a difference in providing a relaxing and positive experience.'
    }
  ];

  return (
    <>
      <PageHeader
        badge="About Our Practice"
        title="Dedicated to Gentle, Personalized Dental Care"
        subtitle="Dr. Mary Scannell, DMD and the team at Community Dentists of Lowell bring over three decades of clinical experience and compassionate care to Lowell, Massachusetts."
        breadcrumbs={[{ name: 'About Us' }]}
      />

      {/* Main Doctor Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Doctor Portrait & Credential Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-premium border-4 border-slate-50 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Mary Scannell, DMD"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 450px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-navy/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-dental-blue-500 text-xs font-bold uppercase tracking-wider">
                    General Dentistry
                  </span>
                  <h2 className="text-2xl font-bold mt-2">{businessInfo.doctor.name}</h2>
                  <p className="text-xs text-slate-200 mt-1">
                    Boston University Goldman School of Dental Medicine (&apos;94)
                  </p>
                </div>
              </div>

              {/* Quick Contact & Office Box */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-dental-navy font-bold text-sm">
                  <span>Community Dentists of Lowell</span>
                </div>
                <p><strong>Location:</strong> 1484 Gorham Street, Lowell, MA 01852</p>
                <p><strong>Office Phone:</strong> (978) 459-4949</p>
                <p><strong>Practice Focus:</strong> Cleanings, Prevention, and Restorations</p>
              </div>
            </div>

            {/* Right: Comprehensive Story */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                  Doctor Profile
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy mt-1 tracking-tight">
                  Meet Dr. Mary Scannell, DMD
                </h2>
                <p className="text-base sm:text-lg text-slate-600 font-medium mt-3 leading-relaxed">
                  &ldquo;Dare to have the smile you&apos;ve always wanted.&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Dr. Mary E. Scannell earned her dental doctorate degree from the <strong>Boston University Henry M. Goldman School of Dental Medicine (Class of 1994)</strong>. For more than 30 years, she has served the Lowell and Greater Merrimack Valley community with unwavering commitment to patient wellness.
                </p>
                <p>
                  Throughout her career, Dr. Scannell has adhered to a patient-centered, conservative philosophy: preserve the natural tooth whenever possible, explain procedures in plain English, and provide a welcoming chairside atmosphere filled with humor and kindness.
                </p>
                <p>
                  Unlike high-volume corporate dental chains, Dr. Scannell personally oversees your diagnosis, exams, and restorative treatment plans. She is widely praised by long-term patients for her honesty—never recommending unneeded treatments and always putting patient wellbeing first.
                </p>
              </div>

              {/* Education & Clinical Milestones */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-lg font-bold text-dental-navy">
                  Education & Clinical Credentials
                </h3>
                <div className="space-y-3">
                  {credentials.map((cred) => (
                    <div
                      key={cred.title}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-bold text-dental-navy">{cred.title}</h4>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
                            {cred.year}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-dental-blue-600 mt-0.5">{cred.org}</p>
                        <p className="text-xs text-slate-500 mt-1">{cred.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Standards & Philosophy Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
              Our Core Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy tracking-tight">
              The Principles That Guide Every Treatment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every appointment at Community Dentists of Lowell reflects our dedication to excellence, comfort, and uncompromising safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((std, idx) => (
              <div
                key={std.title}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft hover:shadow-premium transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center text-xs font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-dental-navy">{std.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-11">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full width Appointment CTA */}
      <AppointmentCTA />
    </>
  );
}

