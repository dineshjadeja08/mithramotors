'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, ArrowRight, Sparkles, ShieldCheck, Check } from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { whatsappUrl, mapsUrl } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useMotion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion() || !siteConfig.animationsEnabled;

  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-navy-950 via-[#091236] to-navy-950"
    >
      {/* Background radial spotlight & ambient glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[380px] sm:w-[550px] lg:w-[700px] h-[380px] sm:h-[550px] lg:h-[700px] rounded-full bg-electric-500/15 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] rounded-full bg-navy-600/20 blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle road-grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0d_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Eyebrow Location Badge */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
            <span>MITHRA MOTORS • KARAPATTU</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.08] text-white text-glow-blue"
          >
            Your Next Ride <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-navy-100 to-electric-400 bg-clip-text text-transparent">
              Starts Here.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Explore two-wheeler sales and service at Mithra Motors. Contact our team for current
            models, availability, and showroom details.
          </motion.p>

          {/* Confirmed highlights */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="mt-5 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-electric-400" />
              <span>Multi-Brand Sales</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-electric-400" />
              <span>Periodic Service &amp; Repairs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-electric-400" />
              <span>Genuine Spare Parts</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#vehicles"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-electric-500 hover:bg-electric-600 active:scale-95 text-white font-medium text-base shadow-lg shadow-electric-500/25 transition-all duration-200"
            >
              <span>Explore Vehicles</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl("Hello Mithra Motors, I'd like to enquire about vehicle sales and service.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-navy-900/90 hover:bg-navy-800 border border-green-500/40 hover:border-green-400 text-white font-medium text-base transition-all duration-200 group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 group-hover:scale-125 transition-transform" />
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Directions link */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex items-center gap-2 text-sm text-gray-400 hover:text-electric-400 transition-colors"
          >
            <MapPin className="w-4 h-4 text-electric-400" />
            <a
              href={mapsUrl('karapattu')}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              Get Directions to Karapattu Showroom
            </a>
          </motion.div>
        </div>

        {/* Right Column: Cinematic Real Two-Wheeler Presentation */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Outer glowing card wrapper */}
          <div className="relative w-full max-w-lg rounded-3xl p-1 bg-gradient-to-tr from-navy-800 via-electric-500/20 to-navy-900/60 border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden">
            {/* Background radiant spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-electric-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Showcase Header */}
            <div className="relative z-10 flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-navy-950/60">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-200">
                  Featured Model Lineup
                </span>
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-electric-500/15 text-electric-300 border border-electric-500/30 font-medium">
                Multi-Brand Showroom
              </span>
            </div>

            {/* Actual Two-Wheeler Cutout Presentation */}
            <div className="relative z-10 p-6 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px]">
              {/* Floating vehicle container */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                }
                className="relative w-full aspect-[16/10] max-w-[420px] flex items-center justify-center drop-shadow-[0_20px_30px_rgba(59,130,246,0.25)]"
              >
                <Image
                  src="/vehicles/hero-splendor-plus.webp"
                  alt="Hero Splendor Plus two-wheeler on display at Mithra Motors"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </motion.div>

              {/* Road highlight line beneath vehicle */}
              <div className="w-3/4 h-1.5 bg-gradient-to-r from-transparent via-electric-400/60 to-transparent rounded-full blur-[1px] -mt-2" />
              <div className="w-1/2 h-4 bg-electric-500/20 blur-md rounded-full -mt-1" />

              {/* Vehicle Title & Specs Tag */}
              <div className="mt-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-electric-400">
                  Hero • Splendor Plus i3S
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  Tamil Nadu’s Preferred Commuter • Available for Enquiry
                </div>
              </div>
            </div>

            {/* Bottom highlights strip */}
            <div className="relative z-10 grid grid-cols-2 gap-2 p-3 sm:p-4 bg-navy-950/90 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-center gap-2 px-2 py-1">
                <ShieldCheck className="w-4 h-4 text-electric-400 shrink-0" />
                <span>Certified Showroom Sales</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <ShieldCheck className="w-4 h-4 text-electric-400 shrink-0" />
                <span>Karapattu Main Road</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Road-line bottom visual element */}
      <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 16">
          <line
            x1="0"
            y1="8"
            x2="1200"
            y2="8"
            stroke="rgba(59, 130, 246, 0.35)"
            strokeWidth="2"
            strokeDasharray="20 15"
            className="animate-road-dash"
          />
        </svg>
      </div>
    </section>
  );
}
