'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  className = '',
  variant = 'light',
  size = 'md',
}: LogoProps) {
  const isDark = variant === 'dark';

  // Height sizing
  const sizeClasses = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-11 sm:h-12 md:h-13 w-auto',
    lg: 'h-14 sm:h-16 w-auto',
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0754A6] rounded-xl transition-all duration-200 active:scale-95 ${className}`}
      aria-label="Mithra Motors — Multi Brand Two Wheeler Showroom"
    >
      <div
        className={`relative flex items-center justify-center transition-all duration-200 ${
          isDark
            ? 'bg-white hover:bg-white/95 px-3 py-1.5 rounded-2xl shadow-md border border-white/20'
            : 'hover:opacity-95'
        }`}
      >
        <Image
          src="/images/logo.png"
          alt="Mithra Motors — Multi Brand Two Wheeler Showroom"
          width={280}
          height={95}
          priority
          className={`${sizeClasses} object-contain max-w-[200px] sm:max-w-[240px] md:max-w-[280px]`}
        />
      </div>
    </Link>
  );
}
