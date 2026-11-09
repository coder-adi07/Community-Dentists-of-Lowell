'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, AlertTriangle, ShieldAlert } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import { businessInfo } from '@/data/business';

export default function ContactPage() {
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitted: false, error: 'Please fill in your name, email, and message.' });
      return;
    }
    setStatus({ submitted: true, error: null });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="We're Here to Help Your Smile"
        subtitle="Get in touch with Dr. Mary Scannell and the staff at Community Dentists of Lowell. We look forward to meeting you."
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Info & Address Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Location Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dental-navy">Lowell Clinic Location</h3>
                    <p className="text-xs text-slate-500">Easily accessible on Gorham Street</p>
                  </div>
                </div>

                <div className="pt-2 text-sm text-slate-700 leading-relaxed font-medium">
                  {businessInfo.name}<br />
                  {businessInfo.contact.address.street}<br />
                  {businessInfo.contact.address.city}, {businessInfo.contact.address.state} {businessInfo.contact.address.zip}
                </div>

                {/* Discrepancy flag notice */}
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Address Verification Notice:</strong> The official clinic address confirmed on the website is <strong>1484 Gorham Street</strong>. (Note: Facebook previously displayed 1485 Gorham St).
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href={businessInfo.contact.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-dental-blue-400 text-xs font-bold text-dental-blue-600 shadow-xs transition-colors"
                  >
                    <span>Open in Google Maps for Directions</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone & Email */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-soft space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Telephone
                    </h4>
                    <a
                      href={`tel:${businessInfo.contact.phoneClean}`}
                      className="text-xl font-extrabold text-dental-navy hover:text-dental-blue-600 transition-colors"
                    >
                      {businessInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email Contact
                    </h4>
                    <a
                      href={`mailto:${businessInfo.contact.email}`}
                      className="text-sm font-bold text-dental-navy hover:text-dental-blue-600 transition-colors truncate block"
                    >
                      {businessInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dental-blue-50 text-dental-blue-600 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-dental-navy">Office Hours</h3>
                </div>

                <div className="space-y-2 text-xs">
                  {businessInfo.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-center justify-between py-1.5 border-b border-slate-200/60 last:border-0"
                    >
                      <span className="font-semibold text-slate-700">{h.days}</span>
                      <span className="text-slate-600 font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Message Form & Interactive Map */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Message Form Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-soft">
                <h3 className="text-2xl font-bold text-dental-navy mb-2">Send a Message</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Have a question about services, insurance, or appointment availability? Fill out this quick form and our office coordinator will contact you promptly.
                </p>

                {status.submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-emerald-900">Message Delivered</h4>
                    <p className="text-xs text-emerald-700 max-w-md mx-auto">
                      Thank you for contacting Community Dentists of Lowell. A member of our staff will reach out to you directly by phone or email.
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
                      <div className="p-3.5 rounded-xl bg-red-50 text-red-600 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
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
                          placeholder="name@example.com"
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
                          Topic / Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="New Patient / Cleaning / Insurance"
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
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we assist you with your dental care?"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-dental-blue-500 focus:ring-4 focus:ring-dental-blue-100 focus:outline-none text-sm bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-dental-blue-100" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-soft h-72 sm:h-80 w-full relative">
                <iframe
                  title="Community Dentists of Lowell Map"
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

            </div>

          </div>

        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

