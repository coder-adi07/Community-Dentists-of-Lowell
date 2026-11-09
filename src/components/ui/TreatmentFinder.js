'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, Calendar, Phone } from 'lucide-react';
import AppointmentModal from '@/components/layout/AppointmentModal';
import { businessInfo } from '@/data/business';

export default function TreatmentFinder() {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goals = [
    {
      id: 'hygiene',
      title: 'Routine Hygiene & Exam',
      desc: 'Regular cleaning, plaque removal, and preventative digital checkup.',
      service: 'Cleanings & Prevention'
    },
    {
      id: 'repair',
      title: 'Chipped, Broken or Decayed Tooth',
      desc: 'Tooth-colored composite restoration, crown, or dental filling repair.',
      service: 'Restorations'
    },
    {
      id: 'pain',
      title: 'Toothache / Acute Sensitivity',
      desc: 'Gentle diagnostic evaluation to identify root causes and relieve discomfort.',
      service: 'Tooth Pain / Discomfort'
    },
    {
      id: 'consult',
      title: 'New Patient Consultation',
      desc: 'Comprehensive initial evaluation with Dr. Scannell and personalized care planning.',
      service: 'Consultation'
    }
  ];

  const timeframes = [
    'Within the last 6 months',
    '6 to 12 months ago',
    '1 to 3 years ago',
    'More than 3 years ago (No judgment, we welcome you!)'
  ];

  const getRecommendation = () => {
    const goal = goals.find((g) => g.id === selectedGoal);
    return {
      service: goal ? goal.service : 'Cleanings & Prevention',
      title: goal ? goal.title : 'Comprehensive Dental Evaluation',
      guidance:
        selectedGoal === 'repair'
          ? 'Dr. Scannell emphasizes conservative restorations that repair damaged teeth with natural-looking materials while preserving maximum healthy tooth structure.'
          : selectedGoal === 'pain'
          ? 'We prioritize prompt, gentle diagnostic care to relieve acute discomfort safely without high-pressure procedure sales.'
          : 'Our cooperative preventative program combines gentle prophylaxis, digital X-rays, and customized home hygiene guidance to protect your natural smile for life.'
    };
  };

  const handleSelectGoal = (id) => {
    setSelectedGoal(id);
    setStep(2);
  };

  const handleSelectTimeframe = (tf) => {
    setSelectedTimeframe(tf);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedGoal('');
    setSelectedTimeframe('');
  };

  const rec = getRecommendation();

  return (
    <>
      <div className="w-full max-w-4xl mx-auto my-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-dental-blue-50/80 via-white to-slate-50 border border-dental-blue-100 shadow-soft">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dental-blue-100/70 text-dental-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-dental-blue-600" />
            <span>Interactive Care Guide</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-dental-navy tracking-tight">
            Find the Right Care for Your Smile
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Answer two quick questions to see our clinical recommendation tailored to your needs.
          </p>
        </div>

        {/* Step Progress Indicators */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === s
                    ? 'bg-dental-blue-500 text-white shadow-sm'
                    : step > s
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {step > s ? '✓' : s}
              </span>
              {s < 3 && <div className="w-8 sm:w-12 h-0.5 bg-slate-200" />}
            </div>
          ))}
        </div>

        {/* Step 1: Dental Goal */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h4 className="text-center font-bold text-base text-dental-navy mb-4">
                What is your primary dental goal today?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => handleSelectGoal(g.id)}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-dental-blue-500 hover:shadow-soft text-left transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h5 className="font-bold text-sm text-dental-navy group-hover:text-dental-blue-600 transition-colors">
                        {g.title}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{g.desc}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-dental-blue-500 mt-3 inline-flex items-center gap-1">
                      <span>Select</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Last Visit Timeframe */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h4 className="text-center font-bold text-base text-dental-navy mb-4">
                Approximately when was your last dental visit?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => handleSelectTimeframe(tf)}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-dental-blue-500 hover:shadow-soft text-left text-xs sm:text-sm font-semibold text-slate-700 hover:text-dental-blue-600 transition-all flex items-center justify-between"
                  >
                    <span>{tf}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </button>
                ))}
              </div>
              <div className="text-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-slate-600 font-semibold"
                >
                  ← Back to previous question
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Recommendation Result */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-dental-blue-200 shadow-soft space-y-6 text-left"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    Recommended Appointment Type
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-dental-navy mt-2">
                    {rec.service}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Dr. Mary Scannell • Community Dentists of Lowell
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs font-semibold"
                  title="Restart treatment finder"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {rec.guidance}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-dental-blue-100" />
                  <span>Request {rec.service} Appointment</span>
                </button>

                <a
                  href={`tel:${businessInfo.contact.phoneClean}`}
                  className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-dental-navy font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-dental-blue-500" />
                  <span>Call (978) 459-4949</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={rec.service}
      />
    </>
  );
}

