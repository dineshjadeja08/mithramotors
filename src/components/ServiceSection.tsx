'use client';

import React from 'react';
import { Wrench, Clock, Settings, Package, Zap, MessageCircle, ArrowUpRight, HelpCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import siteConfig from '@/config/siteConfig';
import { whatsappUrl } from '@/lib/utils';

// Icon map for dynamic lucide icon rendering
const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Clock,
  Settings,
  Package,
  Zap,
};

interface ServiceCardProps {
  service: any;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName || service.icon] || Wrench;
  const enquiryMessage = `Hello Mithra Motors, I would like to enquire about your ${service.name || service.title} service.`;

  return (
    <div className="group relative rounded-2xl bg-navy-900/60 hover:bg-navy-900/90 border border-white/5 hover:border-electric-500/30 p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-electric-500/10 focus-within:ring-2 focus-within:ring-electric-400">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-electric-500/10 text-electric-400 flex items-center justify-center group-hover:bg-electric-500 group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-electric-300 transition-colors">
          {service.name || service.title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
        <a
          href={whatsappUrl(enquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-electric-400 group-hover:text-white transition-colors"
          aria-label={`Enquire about ${service.title} on WhatsApp`}
        >
          <span>Enquire about this</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default function ServiceSection() {
  const publishedServices = siteConfig.services.filter((s) => s.isPublished);

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-navy-950 relative overflow-hidden">
      {/* Background glow accent */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-electric-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, description, and primary service enquiry CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold tracking-wider uppercase mb-4">
                <span>Workshop &amp; Care</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
                Two-Wheeler Sales &amp; Service
              </h2>
              <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                Reliable two-wheeler care backed by certified technicians. From periodic
                maintenance to genuine spare parts, our Karapattu service center is equipped to keep
                your bike or scooter running smoothly and safely.
              </p>

              <div className="mt-8 p-4 rounded-xl bg-navy-900/40 border border-white/5 text-xs text-gray-400 leading-relaxed">
                <span className="font-semibold text-gray-200">Note: </span>
                Submitting a service enquiry allows our team to confirm current bay availability and
                schedule your visit. Enquiries are confirmed directly by our staff.
              </div>

              <div className="mt-8">
                <a
                  href={whatsappUrl("Hello Mithra Motors, I'd like to enquire about two-wheeler service availability.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-electric-500 hover:bg-electric-600 text-white font-medium text-base shadow-lg shadow-electric-500/25 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enquire About Service</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Grid of published service cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {publishedServices.map((service, index) => (
                <AnimatedSection
                  key={service.id}
                  direction="up"
                  delay={0.1 * index}
                >
                  <ServiceCard service={service} index={index} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
