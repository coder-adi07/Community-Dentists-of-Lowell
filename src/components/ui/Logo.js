'use client';

import Link from 'next/link';

export default function Logo({ variant = 'default', className = '' }) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-dental-blue-500 rounded-lg p-1 ${className}`}
      aria-label="Community Dentists of Lowell - Home"
    >
      <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38A0D9" />
              <stop offset="60%" stopColor="#2476A8" />
              <stop offset="100%" stopColor="#102D46" />
            </linearGradient>
            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
          </defs>

          {/* Stylized Tooth Form */}
          <path
            d="M32 6 C20 6, 10 16, 10 28 C10 40, 17 50, 24 57 C26 59, 28 59, 29 56 C31 52, 32 46, 33 41 C33 39, 35 39, 35 41 C36 46, 37 52, 39 56 C40 59, 42 59, 44 57 C51 50, 58 40, 58 28 C58 16, 48 6, 36 6 C34 6, 33 8, 32 9 C31 8, 30 6, 32 6 Z"
            fill="url(#toothGrad)"
          />

          {/* Gentle Smile Arc */}
          <path
            d="M21 26 C27 34, 37 34, 43 26"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            opacity="0.95"
          />

          {/* Sparkling Shine Accent */}
          <path
            d="M46 12 L47.5 15.5 L51 17 L47.5 18.5 L46 22 L44.5 18.5 L41 17 L44.5 15.5 Z"
            fill="url(#accentGrad)"
          />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span
          className={`font-extrabold tracking-tight text-base sm:text-lg leading-tight transition-colors ${
            isLight ? 'text-white' : 'text-dental-navy'
          }`}
        >
          Community Dentists
        </span>
        <div className="flex items-center gap-1.5 leading-none mt-0.5">
          <span
            className={`font-bold tracking-widest text-xs uppercase ${
              isLight ? 'text-dental-blue-200' : 'text-dental-blue-500'
            }`}
          >
            OF LOWELL
          </span>
          <span className={`text-[10px] ${isLight ? 'text-gray-300' : 'text-slate-400'}`}>•</span>
          <span
            className={`text-[11px] font-medium tracking-normal ${
              isLight ? 'text-slate-200' : 'text-slate-600'
            }`}
          >
            Dr. Mary Scannell, DMD
          </span>
        </div>
      </div>
    </Link>
  );
}

