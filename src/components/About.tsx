'use client';

import React from 'react';
import { Layers, Wrench, MapPin, Camera, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-navy-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute bottom-0 right-10 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold tracking-wider uppercase mb-4">
                <span>About Our Showroom</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
                Meet Mithra Motors
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                Mithra Motors is a multi-brand two-wheeler showroom offering comprehensive vehicle
                sales and expert service support. Situated along the Uthangarai to Tirupattur Main
                Road in Karapattu, Tamil Nadu, we provide local riders with a convenient destination
                for their motorcycling and scootering needs.
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
                Whether you are exploring a new two-wheeler for your daily commute or seeking reliable
                periodic maintenance and repairs, our showroom team is here to assist with model
                inquiries, availability checks, and service consultations.
              </p>
            </AnimatedSection>

            {/* Confirmed fact highlight cards (no fake numbers) */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-navy-900/60 border border-white/5 hover:border-electric-500/20 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-electric-500/10 text-electric-400 flex items-center justify-center mb-3">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-white">Multi-Brand</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Sales across leading motorcycle &amp; scooter brands
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/60 border border-white/5 hover:border-electric-500/20 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-electric-500/10 text-electric-400 flex items-center justify-center mb-3">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-white">Sales &amp; Service</div>
                  <div className="text-xs text-gray-400 mt-1">
                    End-to-end support from enquiry to maintenance
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/60 border border-white/5 hover:border-electric-500/20 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-electric-500/10 text-electric-400 flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-white">Karapattu Main Rd</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Conveniently located near Barath Pump
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Showroom Genuine Photo Placeholder Frame */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative group rounded-3xl p-1 bg-gradient-to-br from-white/10 via-electric-500/20 to-navy-800 border border-white/10 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/3] rounded-[22px] bg-navy-900/90 flex flex-col items-center justify-center p-6 text-center overflow-hidden border border-white/5">
                  {/* Subtle inner grid pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex items-center justify-center mb-4 shadow-inner">
                    <Camera className="w-8 h-8" />
                  </div>

                  <div className="relative z-10 text-base font-semibold text-white tracking-wide">
                    Mithra Motors Showroom
                  </div>
                  <div className="relative z-10 text-xs text-gray-400 mt-2 max-w-xs leading-relaxed">
                    Genuine showroom photos will be featured here upon launch. Visit our Karapattu
                    facility in person.
                  </div>

                  <div className="relative z-10 mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/80 border border-white/10 text-[11px] font-mono text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    <span>Karapattu, Tamil Nadu – 635207</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
