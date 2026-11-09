'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.q}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-dental-blue-300 shadow-soft ring-2 ring-dental-blue-50'
                : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-dental-blue-500"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle
                  className={`w-5 h-5 flex-shrink-0 transition-colors ${
                    isOpen ? 'text-dental-blue-600' : 'text-slate-400'
                  }`}
                />
                <span className="text-sm sm:text-base font-bold text-dental-navy">
                  {item.q}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? 'rotate-180 text-dental-blue-600' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pl-14">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

