'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Calendar, Phone, Sparkles } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import AppointmentModal from '@/components/layout/AppointmentModal';
import { businessInfo } from '@/data/business';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Our Services',
      href: '/services',
      hasDropdown: true,
      subLinks: [
        {
          name: 'All Services Overview',
          href: '/services',
          desc: 'Comprehensive gentle dental solutions'
        },
        {
          name: 'Cleanings & Prevention',
          href: '/services/cleanings-prevention',
          desc: 'Exams, hygiene, digital X-rays, sealants'
        },
        {
          name: 'Restorations',
          href: '/services/restorations',
          desc: 'Tooth-colored fillings, crowns, and bridges'
        }
      ]
    },
    { name: 'Patient Information', href: '/patient-information' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100 py-3'
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-100/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Original Clinic Logo & Branding */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          isActive(link.href)
                            ? 'text-dental-blue-600 bg-dental-blue-50/70'
                            : 'text-dental-navy/85 hover:text-dental-blue-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-dental-blue-600' : 'text-slate-400'}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-premium border border-slate-100 p-2.5 z-50 mt-1"
                          >
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`block px-3.5 py-2.5 rounded-xl transition-colors ${
                                  pathname === sub.href
                                    ? 'bg-dental-blue-50 text-dental-blue-600'
                                    : 'hover:bg-slate-50 text-dental-navy'
                                }`}
                              >
                                <div className="text-sm font-bold leading-tight">{sub.name}</div>
                                <div className="text-xs text-slate-500 mt-0.5 leading-normal">{sub.desc}</div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive(link.href)
                        ? 'text-dental-blue-600 bg-dental-blue-50/70'
                        : 'text-dental-navy/85 hover:text-dental-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Prominent CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setIsAppointmentModalOpen(true)}
                className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 text-dental-blue-100" />
                <span>Book an Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setIsAppointmentModalOpen(true)}
                className="px-3 py-1.5 rounded-full bg-dental-blue-500 text-white text-xs font-semibold flex items-center gap-1 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-dental-navy hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="py-1">
                        <button
                          type="button"
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                            isActive(link.href)
                              ? 'text-dental-blue-600 bg-dental-blue-50/70'
                              : 'text-dental-navy hover:bg-slate-50'
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                              isMobileServicesOpen ? 'rotate-180 text-dental-blue-600' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-2 pr-1 py-1 space-y-1 bg-slate-50/80 rounded-xl mt-1 border border-slate-100"
                            >
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`block px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                                    pathname === sub.href
                                      ? 'bg-dental-blue-100/60 text-dental-blue-700 font-semibold'
                                      : 'text-slate-700 hover:text-dental-blue-600 hover:bg-white'
                                  }`}
                                >
                                  <div className="font-semibold">{sub.name}</div>
                                  <div className="text-[11px] text-slate-400 font-normal">{sub.desc}</div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-3 py-2.5 rounded-xl text-sm font-medium ${
                        isActive(link.href)
                          ? 'bg-dental-blue-50 text-dental-blue-600 font-semibold'
                          : 'text-dental-navy hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-slate-100 space-y-2.5">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAppointmentModalOpen(true);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Appointment</span>
                  </button>
                  <a
                    href={`tel:${businessInfo.contact.phoneClean}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 text-dental-navy font-semibold text-sm flex items-center justify-center gap-2 border border-slate-200"
                  >
                    <Phone className="w-4 h-4 text-dental-blue-500" />
                    <span>Call (978) 459-4949</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
}

