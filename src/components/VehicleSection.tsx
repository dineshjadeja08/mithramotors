'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Sparkles, Check, ArrowRight, Layers } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import siteConfig, { Vehicle } from '@/config/siteConfig';
import { whatsappUrl, telUrl } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useMotion';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const message = `Hello Mithra Motors, I'd like to enquire about the ${vehicle.brand} ${vehicle.model} at your Karapattu showroom.`;

  return (
    <div className="group relative rounded-3xl bg-navy-900/70 hover:bg-navy-900 border border-white/10 hover:border-electric-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-electric-500/15 focus-within:ring-2 focus-within:ring-electric-400 overflow-hidden">
      {/* Ambient background glow on hover */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-electric-500/5 group-hover:bg-electric-500/10 rounded-full blur-2xl transition-colors pointer-events-none" />

      <div>
        {/* Top Badges: Brand & Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
            {vehicle.brand}
          </span>
          {vehicle.tag && (
            <span className="px-2.5 py-0.5 rounded-full bg-electric-500/15 border border-electric-500/30 text-[11px] font-medium text-electric-300">
              {vehicle.tag}
            </span>
          )}
        </div>

        {/* Model Headline */}
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-electric-300 transition-colors">
          {vehicle.model}
        </h3>

        {/* Real Vehicle Image Frame */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-navy-950/80 my-4 border border-white/5 flex items-center justify-center p-3 group-hover:border-electric-500/20 transition-colors">
          {/* Subtle vehicle podium glow */}
          <div className="absolute inset-0 bg-radial from-electric-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

          <div className="relative w-full h-full">
            <Image
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.model} two-wheeler`}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-navy-900/90 text-[10px] font-mono uppercase tracking-wider text-gray-300 border border-white/10">
            {vehicle.category}
          </span>
        </div>

        {/* Confirmed Details / Highlights */}
        {vehicle.confirmedDetails && vehicle.confirmedDetails.length > 0 && (
          <ul className="space-y-2 border-t border-white/5 pt-4">
            {vehicle.confirmedDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                <Check className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons: WhatsApp & Direct Call */}
      <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-xs sm:text-sm shadow-md shadow-green-600/20 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <a
          href={telUrl(siteConfig.primaryPhone)}
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-navy-800 hover:bg-electric-500/20 text-white border border-white/10 hover:border-electric-500/30 font-medium text-xs sm:text-sm active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-electric-400" />
          <span>Call Showroom</span>
        </a>
      </div>
    </div>
  );
}

export default function VehicleSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const prefersReducedMotion = useReducedMotion() || !siteConfig.animationsEnabled;

  const publishedVehicles = siteConfig.vehicles.filter((v) => v.isPublished);

  const filteredVehicles =
    activeCategory === 'all'
      ? publishedVehicles
      : publishedVehicles.filter((v) => v.category === activeCategory);

  return (
    <section id="vehicles" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-navy-950/90 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Brand Showroom</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Explore Our Vehicles
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Browse popular motorcycles, scooters, and electric two-wheelers available for enquiry,
              test rides, and booking at our Karapattu showroom.
            </p>
          </AnimatedSection>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {siteConfig.vehicleCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-electric-400 ${
                  isActive
                    ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/30'
                    : 'bg-navy-900/80 hover:bg-navy-800 text-gray-300 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Vehicle Grid with Live Two-Wheeler Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Enquiry Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-white/10 text-center">
          <h4 className="text-base sm:text-lg font-bold text-white">
            Looking for a specific model or colour variant?
          </h4>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-300">
            Our multi-brand showroom sources and delivers vehicles from all major manufacturers.
            Send us a message with your choice.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl("Hello Mithra Motors, I'm looking for a specific model/colour variant. Please assist.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs font-semibold shadow-md shadow-green-600/20 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
