'use client';

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import { AnatomicalTooth, FloatingDentalElements } from './ToothScene';

function CanvasFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-dental-blue-50/60 to-white/80 rounded-3xl border border-dental-blue-100/60 shadow-soft">
      <div className="w-24 h-24 rounded-full bg-white shadow-premium flex items-center justify-center mb-4 text-dental-blue-500 animate-pulse">
        <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
          <path
            d="M32 6 C20 6, 10 16, 10 28 C10 40, 17 50, 24 57 C26 59, 28 59, 29 56 C31 52, 32 46, 33 41 C33 39, 35 39, 35 41 C36 46, 37 52, 39 56 C40 59, 42 59, 44 57 C51 50, 58 40, 58 28 C58 16, 48 6, 36 6 C34 6, 33 8, 32 9 C31 8, 30 6, 32 6 Z"
            fill="#2476A8"
          />
          <path d="M21 26 C27 34, 37 34, 43 26" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>
      <p className="text-sm font-semibold text-dental-navy">High-Precision Dental Care</p>
      <p className="text-xs text-slate-500 mt-1">Community Dentists of Lowell</p>
    </div>
  );
}

export default function ToothCanvas({ className = '' }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <CanvasFallback />;
  }

  return (
    <div
      className={`relative w-full h-[400px] sm:h-[480px] lg:h-[540px] select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0.4, 5.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={1.2} />
        {/* Key Studio Light */}
        <directionalLight position={[4, 6, 5]} intensity={2.2} color="#FFFFFF" />
        {/* Soft Cyan/Blue Rim Light */}
        <directionalLight position={[-5, 3, -3]} intensity={2.0} color="#76C0E7" />
        {/* Turquoise Accent Backlight */}
        <pointLight position={[0, -2, -2]} intensity={1.5} color="#2DD4BF" />
        {/* Top Specular Accent */}
        <spotLight position={[0, 7, 2]} intensity={1.8} angle={0.6} penumbra={0.8} />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <AnatomicalTooth isHovered={isHovered} />
            <FloatingDentalElements />
          </Float>

          {/* Soft Ground Contact Shadow */}
          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.38}
            scale={5}
            blur={2.4}
            far={4}
            color="#102D46"
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
            rotateSpeed={0.6}
          />
        </Suspense>
      </Canvas>

      {/* Interactive Micro-badge Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-white/80 backdrop-blur-md text-dental-navy/80 border border-dental-blue-100 shadow-sm transition-opacity duration-300">
          <span className="w-2 h-2 rounded-full bg-dental-turquoise animate-ping" />
          Interactive 3D Dental Model • Drag to rotate
        </span>
      </div>
    </div>
  );
}

