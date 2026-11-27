'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Wrench,
  Settings,
  Disc,
  Link as LinkIcon,
  BatteryCharging,
  CircleDot,
  Droplet,
  Zap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
} from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { whatsappUrl } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Settings,
  Disc,
  Link: LinkIcon,
  BatteryCharging,
  CircleDot,
  Droplet,
  Zap,
  Sparkles,
};

export default function ServicePage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    bikeModel: '',
    regNumber: '',
    preferredDate: '',
    serviceType: 'Periodic Service',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    const cleanPhone = formData.mobile.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.bikeModel.trim()) {
      errs.bikeModel = 'Please enter your bike model';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Hello Mithra Motors, I would like to book a service appointment.`,
      ``,
      `Name: ${formData.name.trim()}`,
      `Mobile: ${formData.mobile.trim()}`,
      `Bike Model: ${formData.bikeModel.trim()}`,
      formData.regNumber.trim() ? `Registration No: ${formData.regNumber.trim()}` : '',
      `Service Type: ${formData.serviceType}`,
      formData.preferredDate ? `Preferred Date: ${formData.preferredDate}` : '',
      formData.message.trim() ? `Notes: ${formData.message.trim()}` : '',
    ].filter(Boolean);

    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* ────────────────────────────────────────────────────────
          1. WORKSHOP BANNER (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#082D59] py-14 sm:py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/service-banner.webp"
            alt="Expert Two-Wheeler Service & Repairs Mithra Motors"
            fill
            priority
            className="object-cover opacity-35 object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D59] via-[#082D59]/85 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white mb-3">
            <span>Multi-Brand Certified Care</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
            Expert Two-Wheeler Service &amp; Repairs
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-200">
            Ride Safe, Ride Smooth with Karapattu’s Most Trusted Mechanics
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. NINE SERVICE CATEGORIES (Matching Mockup 3x3 Grid)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading">
            Our Workshop Services
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            From routine oil changes to major engine overhauls, we service all motorcycle and scooter brands.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {siteConfig.services.map((svc) => {
            const IconComponent = iconMap[svc.iconName] || Wrench;

            return (
              <div
                key={svc.id}
                className="bg-white rounded-2xl p-5 sm:p-6 card-shadow card-shadow-hover border border-gray-100 flex flex-col items-center text-center transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EBF3FC] text-[#0754A6] flex items-center justify-center mb-3.5 shadow-xs">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#082D59]">{svc.name}</h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-3">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. WHY SERVICE WITH US? (Matching Mockup Trust Badges)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0754A6]">
              Why Service With Us?
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-bold text-[#082D59]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>Trained Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>Transparent Billing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>Quick Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. BOOK SERVICE FORM (Matching Mockup Card)
          ──────────────────────────────────────────────────────── */}
      <section id="book-service" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-[#082D59] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#0D3B73]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
              Priority Booking
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading mt-1">
              Book a Service Appointment
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              Schedule your two-wheeler periodic service or repair. Our team will prepare the service bay
              and confirm your slot via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="Your Full Name"
                  className={`w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6] ${
                    errors.name ? 'border-2 border-red-400' : ''
                  }`}
                />
                {errors.name && <p className="text-xs text-red-300 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => {
                    setFormData({ ...formData, mobile: e.target.value });
                    if (errors.mobile) setErrors({ ...errors, mobile: '' });
                  }}
                  placeholder="10-digit Phone Number"
                  maxLength={10}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6] ${
                    errors.mobile ? 'border-2 border-red-400' : ''
                  }`}
                />
                {errors.mobile && <p className="text-xs text-red-300 mt-1">{errors.mobile}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bikeModel" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Bike / Scooter Model *
                </label>
                <input
                  type="text"
                  id="bikeModel"
                  value={formData.bikeModel}
                  onChange={(e) => {
                    setFormData({ ...formData, bikeModel: e.target.value });
                    if (errors.bikeModel) setErrors({ ...errors, bikeModel: '' });
                  }}
                  placeholder="e.g. TVS Jupiter, Honda Activa 6G, Bajaj Pulsar"
                  className={`w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6] ${
                    errors.bikeModel ? 'border-2 border-red-400' : ''
                  }`}
                />
                {errors.bikeModel && <p className="text-xs text-red-300 mt-1">{errors.bikeModel}</p>}
              </div>

              <div>
                <label htmlFor="regNumber" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Registration Number (Optional)
                </label>
                <input
                  type="text"
                  id="regNumber"
                  value={formData.regNumber}
                  onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                  placeholder="e.g. TN 24 AB 1234"
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="serviceType" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                >
                  <option value="Periodic Service">Periodic General Service</option>
                  <option value="Oil Change">Express Oil Change</option>
                  <option value="Brake Service">Brake Service / Overhaul</option>
                  <option value="Chain Sprocket">Chain &amp; Sprocket Replacement</option>
                  <option value="Battery Check">Battery Replacement / Test</option>
                  <option value="Engine Repair">Engine Repair &amp; Tuning</option>
                  <option value="Electrical Repair">Electrical Wiring / Diagnostics</option>
                  <option value="Washing Polishing">Foam Wash &amp; Polishing</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                Specific Complaints / Notes (Optional)
              </label>
              <textarea
                id="message"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe any unusual sounds, mileage drop, or specific repair requests..."
                className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5242A] hover:bg-[#C91A20] active:scale-95 text-white font-bold text-base shadow-lg shadow-red-600/30 transition-all duration-150 cursor-pointer"
            >
              <Wrench className="w-5 h-5" />
              <span>Book Service on WhatsApp</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
