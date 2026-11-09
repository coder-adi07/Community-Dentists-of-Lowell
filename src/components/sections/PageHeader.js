'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({
  badge = 'Community Dentists of Lowell',
  title,
  subtitle,
  breadcrumbs = []
}) {
  return (
    <div className="relative py-16 sm:py-20 bg-gradient-to-b from-dental-blue-50/70 via-slate-50 to-white border-b border-slate-200/60 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-dental-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumbs */}
        <nav className="inline-flex items-center gap-1.5 text-xs text-slate-500 mb-4 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
          <Link href="/" className="hover:text-dental-blue-600 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((b, idx) => (
            <React.Fragment key={b.name}>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {b.href ? (
                <Link href={b.href} className="hover:text-dental-blue-600 transition-colors">
                  {b.name}
                </Link>
              ) : (
                <span className="font-semibold text-dental-navy">{b.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="block mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold uppercase tracking-wider">
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dental-navy tracking-tight max-w-3xl mx-auto leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

