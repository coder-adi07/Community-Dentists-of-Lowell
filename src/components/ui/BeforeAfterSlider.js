'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
  afterImage = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
  beforeLabel = "Before Restoration",
  afterLabel = "After Restoration",
  title = "Conservative Tooth Restoration Result",
  subtitle = "Drag the slider to preview the transformation achieved with gentle restorative care."
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="text-center mb-6 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dental-blue-50 text-dental-blue-600 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-dental-turquoise" />
          <span>Clinical Result Demonstration</span>
        </div>
        <h3 className="text-2xl font-bold text-dental-navy tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">{subtitle}</p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-premium border-4 border-white select-none cursor-ew-resize touch-none"
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="absolute top-4 right-4 bg-dental-navy/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full min-w-[300px]" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}>
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover filter contrast-90 brightness-95"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
              {beforeLabel}
            </div>
          </div>
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-elevated border-2 border-dental-blue-500 flex items-center justify-center text-dental-navy">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-dental-blue-600 fill-none stroke-current stroke-2">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 mt-3 px-2">
        <span>← Drag left to see result</span>
        <span>Drag right to see original →</span>
      </div>
    </div>
  );
}

