'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Package,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Send,
  AlertCircle,
  Wrench,
  Search,
} from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { whatsappUrl, buildEnquiryWhatsApp } from '@/lib/utils';

export default function SparePartsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bikeModel: '',
    partName: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.partName.trim()) {
      errs.partName = 'Please enter the spare part name or description';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    const text = [
      `Hello Mithra Motors, I'd like to order / enquire about spare parts.`,
      ``,
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Bike Brand/Model: ${formData.bikeModel.trim() || 'Not specified'}`,
      `Part Needed: ${formData.partName.trim()}`,
      formData.message.trim() ? `Message: ${formData.message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  const handleQuickEnquire = (partName: string) => {
    const text = `Hello Mithra Motors, I'd like to enquire about genuine ${partName} availability and price.`;
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* ────────────────────────────────────────────────────────
          1. BANNER (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#082D59] py-14 sm:py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/parts-banner.webp"
            alt="Genuine Spare Parts at Mithra Motors"
            fill
            priority
            className="object-cover opacity-35 object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D59] via-[#082D59]/85 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white mb-3">
            <span>100% Authentic OEM &amp; Genuine</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
            Genuine Spare Parts
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-200">
            Keep Your Ride in Top Condition with Original Components
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. PARTS CATEGORIES GRID (Matching Mockup Grid)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading">
            Browse Spare Parts Categories
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We supply factory-grade genuine components for TVS, Hero, Honda, Bajaj, Yamaha, and Royal Enfield.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteConfig.spareParts.map((part) => (
            <div
              key={part.id}
              className="bg-white rounded-2xl p-3.5 sm:p-5 card-shadow card-shadow-hover border border-gray-100 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-50 mb-4 flex items-center justify-center p-3">
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#EBF3FC] text-[10px] font-bold text-[#0754A6] border border-blue-200">
                    {part.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#082D59]">{part.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {part.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleQuickEnquire(part.name)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#0754A6] hover:bg-[#053F7D] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask for Price</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. SPARE PARTS ENQUIRY FORM (Matching Mockup Navy Card)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-[#082D59] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#0D3B73]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
              Quick Sourcing
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading mt-1">
              Spare Parts Enquiry
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              Need a specific part or component? Submit your bike details below and our spare parts
              counter will confirm availability and price on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Name *
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
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="10-digit Mobile Number"
                  maxLength={10}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6] ${
                    errors.phone ? 'border-2 border-red-400' : ''
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-300 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bikeModel" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Bike Brand / Model
                </label>
                <input
                  type="text"
                  id="bikeModel"
                  value={formData.bikeModel}
                  onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
                  placeholder="e.g. Hero Splendor, Honda Shine 125"
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                />
              </div>

              <div>
                <label htmlFor="partName" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                  Part Name / Photo Description *
                </label>
                <input
                  type="text"
                  id="partName"
                  value={formData.partName}
                  onChange={(e) => {
                    setFormData({ ...formData, partName: e.target.value });
                    if (errors.partName) setErrors({ ...errors, partName: '' });
                  }}
                  placeholder="e.g. Brake Pads, Chain Sprocket, Battery"
                  className={`w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6] ${
                    errors.partName ? 'border-2 border-red-400' : ''
                  }`}
                />
                {errors.partName && <p className="text-xs text-red-300 mt-1">{errors.partName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1">
                Message / Notes (Optional)
              </label>
              <textarea
                id="message"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention any specific year, color, or variant..."
                className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5242A] hover:bg-[#C91A20] active:scale-95 text-white font-bold text-base shadow-lg shadow-red-600/30 transition-all duration-150 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp to Order</span>
            </button>
          </form>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. TRUST BADGES (Matching Mockup Bottom Strip)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-200 py-6 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs sm:text-sm font-bold text-[#082D59]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0754A6]" />
              <span>Best Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E5242A]" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
