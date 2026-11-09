'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { businessInfo } from '@/data/business';

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || 'Cleanings & Prevention',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    preferredDate: '',
    notes: '',
    isNewPatient: 'yes'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }, 700);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-dental-navy/70 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-dental-navy to-dental-blue-700 p-6 sm:p-8 text-white relative">
              <button
                onClick={resetAndClose}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-dental-blue-200 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-dental-turquoise" />
                <span>Personalized Dental Care</span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
                Request an Appointment
              </h2>
              <p className="text-sm text-slate-200 mt-1.5 max-w-md">
                Community Dentists of Lowell • Dr. Mary Scannell, DMD
              </p>
            </div>

            {/* Content / Form */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-dental-navy mb-2">Request Received!</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-dental-navy">{formData.fullName}</strong>. Your appointment request has been submitted to Community Dentists of Lowell.
                  </p>

                  <div className="bg-dental-blue-50/70 border border-dental-blue-100 rounded-2xl p-4 text-left text-xs text-dental-navy space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-dental-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <strong>Important Confirmation Notice:</strong> This request is pending review. Our front desk staff will call or email you at <strong>{formData.phone}</strong> to confirm the exact day and time.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={resetAndClose}
                    className="w-full py-3 px-6 rounded-xl bg-dental-navy hover:bg-dental-navy-800 text-white font-semibold transition-colors shadow-soft"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Notice banner */}
                  <div className="p-3.5 rounded-xl bg-dental-neutral border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-dental-blue-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Please note: Submitting this form sends an appointment request. Our office staff will contact you directly to confirm your booking.
                    </span>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                          errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-dental-blue-500 focus:ring-dental-blue-100'
                        } focus:outline-none focus:ring-4 transition-all`}
                      />
                    </div>
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(978) 555-0123"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                            errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-dental-blue-500 focus:ring-dental-blue-100'
                          } focus:outline-none focus:ring-4 transition-all`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-dental-blue-500 focus:ring-dental-blue-100'
                          } focus:outline-none focus:ring-4 transition-all`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service & Patient Type Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Service Requested
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none bg-white transition-all"
                      >
                        <option value="Cleanings & Prevention">Cleanings & Prevention</option>
                        <option value="Dental Examination & X-Rays">Comprehensive Exam & X-Rays</option>
                        <option value="Restorations">Restorations (Fillings / Crowns)</option>
                        <option value="Tooth Pain / Discomfort">Tooth Pain / Discomfort Evaluation</option>
                        <option value="Consultation">General Dental Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Are You a New Patient?
                      </label>
                      <select
                        value={formData.isNewPatient}
                        onChange={(e) => setFormData({ ...formData, isNewPatient: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none bg-white transition-all"
                      >
                        <option value="yes">Yes, I am a new patient</option>
                        <option value="no">No, I am an existing patient</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Time Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border ${
                            errors.preferredDate ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-dental-blue-500 focus:ring-dental-blue-100'
                          } focus:outline-none focus:ring-4 transition-all`}
                        />
                      </div>
                      {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Preferred Time of Day
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none bg-white transition-all"
                        >
                          <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="Early Afternoon (12:00 PM - 2:30 PM)">Early Afternoon (12:00 PM - 2:30 PM)</option>
                          <option value="Late Afternoon (2:30 PM - 5:00 PM)">Late Afternoon (2:30 PM - 5:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Notes or Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Let us know about any sensitivity, questions, or specific tooth concerns..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <span>Submit Appointment Request</span>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      Prefer to book by phone? Call our Lowell office directly at{' '}
                      <a href={`tel:${businessInfo.contact.phoneClean}`} className="font-semibold text-dental-blue-600 hover:underline">
                        {businessInfo.contact.phone}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

