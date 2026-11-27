'use client';

import React from 'react';
import { Phone, MessageCircle, Navigation, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import siteConfig from '@/config/siteConfig';
import { whatsappUrl, mapsUrl, telUrl, formatPhone } from '@/lib/utils';

export default function QuickContact() {
  return (
    <section className="relative -mt-6 z-20 px-4 sm:px-6 lg:px-8" aria-label="Quick actions">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 p-2 sm:p-3 rounded-2xl bg-navy-900/90 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Action 1: Call Showroom */}
            <a
              href={telUrl(siteConfig.primaryPhone)}
              className="group flex items-center justify-between p-4 rounded-xl bg-navy-950/60 hover:bg-navy-800/80 border border-white/5 hover:border-electric-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric-500/15 text-electric-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Call Us Directly</div>
                  <div className="text-sm font-semibold text-white tracking-wide">
                    {formatPhone(siteConfig.primaryPhone)}
                  </div>
                </div>
              </div>
              <span className="text-xs text-electric-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                Call &rarr;
              </span>
            </a>

            {/* Action 2: WhatsApp Enquiry */}
            <a
              href={whatsappUrl("Hello Mithra Motors, I would like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-navy-950/60 hover:bg-navy-800/80 border border-white/5 hover:border-green-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/15 text-green-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Instant Chat</div>
                  <div className="text-sm font-semibold text-white">WhatsApp Enquiry</div>
                </div>
              </div>
              <span className="text-xs text-green-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                Chat &rarr;
              </span>
            </a>

            {/* Action 3: Directions */}
            <a
              href={mapsUrl('karapattu')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-navy-950/60 hover:bg-navy-800/80 border border-white/5 hover:border-electric-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric-500/15 text-electric-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Find Showroom</div>
                  <div className="text-sm font-semibold text-white">Get Directions</div>
                </div>
              </div>
              <span className="text-xs text-electric-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                Map &rarr;
              </span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
