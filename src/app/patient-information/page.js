import Link from 'next/link';
import { CreditCard, Banknote, ShieldAlert, PhoneCall, Check, Calendar, FileText, Clock, HelpCircle, AlertTriangle } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import { businessInfo } from '@/data/business';

export const metadata = {
  title: 'Patient Information & Payment Options',
  description:
    'Payment options, dental insurance information, and appointment guidelines for patients at Community Dentists of Lowell, Massachusetts.',
};

export default function PatientInformationPage() {
  const cardNetworks = ['Visa', 'MasterCard', 'Discover', 'American Express'];

  const firstVisitSteps = [
    {
      step: '01',
      title: 'Schedule Your Preferred Time',
      desc: 'Request an appointment online or call our Lowell office at (978) 459-4949. Our staff will confirm a date that accommodates your schedule.'
    },
    {
      step: '02',
      title: 'What to Bring to Your Visit',
      desc: 'Please bring a photo ID, your dental insurance card/information (if applicable), and a list of any current medications or relevant health history.'
    },
    {
      step: '03',
      title: 'Thorough, Gentle Evaluation',
      desc: 'Dr. Scannell performs a comprehensive visual exam, gentle probing for gum health, digital radiographs as needed, and an oral cancer screening.'
    },
    {
      step: '04',
      title: 'Transparent Treatment Discussion',
      desc: 'We review all clinical findings with you directly. You receive clear explanations of any recommendations, without sales pressure or unneeded procedures.'
    }
  ];

  return (
    <>
      <PageHeader
        badge="Office Guidelines"
        title="Patient Information & Payment Options"
        subtitle="Clear, straightforward information regarding payment methods, insurance verification, and what to expect during your visits."
        breadcrumbs={[{ name: 'Patient Information' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section 1: Payment Methods */}
          <div>
            <div className="max-w-2xl mb-8 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                Payment Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dental-navy tracking-tight">
                Accepted Payment Methods
              </h2>
              <p className="text-sm text-slate-600">
                Payment is due at the time service is rendered unless specific prior arrangements have been made with our office.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessInfo.paymentOptions.map((opt) => (
                <div
                  key={opt.name}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center font-bold">
                    <Check className="w-5 h-5 text-dental-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-dental-navy">{opt.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{opt.note}</p>
                </div>
              ))}
            </div>

            {/* Credit Card Network Badges */}
            <div className="mt-6 p-6 rounded-2xl bg-dental-neutral border border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-dental-navy">
                  Accepted Credit & Debit Card Networks
                </p>
                <p className="text-xs text-slate-500">Fast, secure processing at check-in or checkout.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {cardNetworks.map((card) => (
                  <span
                    key={card}
                    className="px-4 py-2 rounded-xl bg-white text-slate-800 text-xs font-extrabold border border-slate-200 shadow-xs tracking-wider"
                  >
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Dental Insurance Guidance */}
          <div className="pt-8 border-t border-slate-200">
            <div className="max-w-2xl mb-8 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                Insurance Assistance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dental-navy tracking-tight">
                Dental Insurance Verification
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 p-8 rounded-3xl bg-dental-blue-50/50 border border-dental-blue-100 shadow-soft space-y-4">
                <h3 className="text-xl font-bold text-dental-navy">
                  How We Assist With Your Coverage
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We work closely with patients to help optimize their dental benefit plans. Because coverage, copays, annual maximums, and deductible tiers vary significantly from one insurance plan to another, please contact our Lowell office directly before your appointment.
                </p>
                
                <div className="p-4 rounded-2xl bg-white border border-dental-blue-200 text-xs text-slate-700 leading-relaxed space-y-1.5">
                  <p className="font-bold text-dental-navy">Please Note Regarding Insurance:</p>
                  <p>
                    Our administrative team will gladly review your insurance policy, explain estimated coverage, and file claims on your behalf. To ensure accurate billing and prevent unexpected expenses, please have your subscriber ID and group number ready when contacting us.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 p-8 rounded-3xl bg-dental-navy text-white shadow-soft text-center space-y-4">
                <ShieldAlert className="w-10 h-10 text-dental-blue-300 mx-auto" />
                <h4 className="text-lg font-bold">Verify Your Insurance</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call our front desk today and we will verify your benefit plan details.
                </p>
                <a
                  href={`tel:${businessInfo.contact.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call (978) 459-4949</span>
                </a>
              </div>
            </div>
          </div>

          {/* Section 3: First Visit What to Expect */}
          <div className="pt-8 border-t border-slate-200">
            <div className="max-w-2xl mb-8 text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-blue-600">
                New Patients Welcome
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dental-navy tracking-tight">
                What to Expect at Your First Appointment
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {firstVisitSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft space-y-3"
                >
                  <span className="text-2xl font-extrabold text-dental-blue-500 block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-dental-navy">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

