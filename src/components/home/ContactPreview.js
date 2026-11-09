'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitted: false, error: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitted: false, error: 'Please fill in all required fields.' });
      return;
    }
    // Simple simulated submission
    setStatus({ submitted: true, error: null });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5 text-dental-blue-500" />
            <span>Connect With Our Lowell Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dental-navy tracking-tight">
            We Welcome Your Questions & Appointments.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Conveniently located on Gorham Street in Lowell, Massachusetts. Reach out by phone, email, or send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-dental-navy">Visit Our Clinic</h3>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    1484 Gorham Street<br />Lowell, MA 01852, USA
                  </p>
                  
                  {/* Address discrepancy note */}
                  <div className="mt-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 text-[11px] text-amber-800 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Official clinic address is <strong>1484 Gorham St</strong> (official website). Note: Facebook previously listed 1485 Gorham St.
                    </span>
                  </div>

                  <a
                    href={businessInfo.contact.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-dental-blue-600 hover:text-dental-blue-700 mt-3"
                  >
                    <span>Get Driving Directions</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-dental-navy">Call Our Office</h3>
                  <a
                    href={`tel:${businessInfo.contact.phoneClean}`}
                    className="text-lg font-extrabold text-dental-blue-600 hover:underline block"
                  >
                    {businessInfo.contact.phone}
                  </a>
                  <p className="text-xs text-slate-500">Fast assistance during office hours</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-base font-bold text-dental-navy">Email Us</h3>
                  <a
                    href={`mailto:${businessInfo.contact.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-dental-blue-600 truncate block"
                  >
                    {businessInfo.contact.email}
                  </a>
                  <p className="text-xs text-slate-500">For inquiries and records</p>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-dental-blue-500" />
                <h3 className="text-base font-bold text-dental-navy">Office Hours</h3>
              </div>
              <div className="space-y-2 text-xs">
                {businessInfo.hours.map((h) => (
                  <div key={h.days} className="flex items-center justify-between py-1 border-b border-slate-200/50 last:border-0">
                    <span className="font-semibold text-slate-700">{h.days}</span>
                    <span className="text-slate-600 font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-soft h-64 sm:h-72 w-full relative">
              <iframe
                title="Community Dentists of Lowell Location Map"
                src="https://maps.google.com/maps?q=1484+Gorham+St,+Lowell,+MA+01852&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Quick Contact Message Form */}
            <div className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-soft">
              <h3 className="text-xl font-bold text-dental-navy mb-2">Send Us a Direct Message</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Have a question for Dr. Scannell or need more information about our clinic? Leave your note below and our team will get in touch.
              </p>

              {status.submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">Message Sent Successfully</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you for reaching out to Community Dentists of Lowell. We will respond promptly during business hours.
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, error: null })}
                    className="text-xs font-bold text-emerald-800 underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.error && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(978) 555-0123"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="General Question / Cleaning Inquiry"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your questions or comments here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none text-sm bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-dental-navy hover:bg-dental-navy-800 text-white font-bold text-sm shadow-soft transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-dental-blue-300" />
                    <span>Send Message to Office</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

