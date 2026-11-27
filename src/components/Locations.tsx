'use client';

import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, Clock, Building } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import siteConfig, { Branch } from '@/config/siteConfig';
import { telUrl, whatsappUrl, mapsUrl, formatPhone } from '@/lib/utils';

interface BranchCardProps {
  branch: Branch;
}

export function BranchCard({ branch }: BranchCardProps) {
  const directionsLink = branch.mapsUrl || mapsUrl(branch.id);

  return (
    <div className="relative rounded-3xl bg-navy-900/70 border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 via-electric-400 to-navy-600" />

      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20 text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Showroom &amp; Service Center</span>
          </div>
          <span className="text-xs text-green-400 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Confirmed Location
          </span>
        </div>

        <h3 className="text-2xl font-bold font-heading text-white">{branch.name}</h3>

        {/* Address */}
        <div className="mt-4 flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
          <MapPin className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-medium">{branch.address}</p>
            <p className="text-gray-400 mt-0.5">
              {branch.city}, {branch.state} – {branch.pincode}
            </p>
            {branch.landmark && (
              <p className="text-xs text-electric-300/80 mt-1 font-medium">
                Landmark: {branch.landmark}
              </p>
            )}
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="mt-6 pt-5 border-t border-white/5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Direct Contact Lines
          </div>
          <div className="space-y-2">
            {branch.phone.map((ph, idx) => (
              <a
                key={idx}
                href={telUrl(ph)}
                className="flex items-center gap-2.5 text-sm font-medium text-white hover:text-electric-400 transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-electric-400" />
                <span>{formatPhone(ph)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: Call | WhatsApp | Directions */}
      <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a
          href={telUrl(branch.phone[0])}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-electric-500/20 active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl(`Hello Mithra Motors, I'm enquiring regarding your ${branch.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-green-600/20 active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <a
          href={directionsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 border border-white/10 text-white font-medium text-sm transition-all duration-200 active:scale-95"
        >
          <Navigation className="w-4 h-4 text-electric-400" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
}

export default function Locations() {
  // Only display completed, confirmed branches publicly (Karapattu)
  const publishedBranches = siteConfig.branches.filter((b) => b.isPublished);

  return (
    <section id="locations" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Showroom Locations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Visit Mithra Motors
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Drop by our Karapattu showroom on the Uthangarai–Tirupattur Main Road for vehicle
              enquiries, test rides, and service consultations.
            </p>
          </AnimatedSection>
        </div>

        {/* Display published branches */}
        <div className="max-w-3xl mx-auto">
          {publishedBranches.map((branch) => (
            <AnimatedSection key={branch.id} direction="up" delay={0.1}>
              <BranchCard branch={branch} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
