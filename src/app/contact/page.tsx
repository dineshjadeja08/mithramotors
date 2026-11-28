'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Navigation,
  Send,
  AlertCircle,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { telUrl, whatsappUrl, mapsUrl, formatPhone, buildEnquiryWhatsApp } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    enquiryType: 'New Bike Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.phone = 'Please enter your 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const redirectUrl = buildEnquiryWhatsApp({
      name: formData.name.trim(),
      mobile: formData.phone.trim(),
      type: formData.enquiryType,
      message: formData.message.trim(),
    });

    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* ────────────────────────────────────────────────────────
          1. BANNER (Matching Mockup with Two Large CTAs)
          ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#082D59] py-14 sm:py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-banner.webp"
            alt="Contact Mithra Motors Karapattu"
            fill
            priority
            className="object-cover opacity-35 object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D59] via-[#082D59]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5242A] animate-pulse" />
            <span>Showroom &amp; Workshop Support</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
            Contact Us
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-200">
            We are here to help you! Reach out for models, pricing, test rides, or servicing.
          </p>

          {/* Two Large Action Buttons: full width on mobile, auto on desktop */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <a
              href={telUrl(siteConfig.primaryPhone)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0754A6] hover:bg-[#053F7D] active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-700/30 transition-all duration-150"
            >
              <Image src="/images/call-icon.png" alt="Call" width={24} height={24} className="w-5 h-5 rounded-full object-contain shrink-0" />
              <span>Call Now</span>
            </a>

            <a
              href={whatsappUrl("Hello Mithra Motors, I would like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-green-600/30 transition-all duration-150"
            >
              <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} className="w-5 h-5 rounded-full object-contain shrink-0" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. TWO-COLUMN CONTACT & MAP LAYOUT (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location Map & Contact Details Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Visual Location Map Frame */}
            <div className="bg-white rounded-3xl overflow-hidden card-shadow border border-gray-100">
              <div className="relative h-64 sm:h-72 w-full bg-[#E5ECF4] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#E5242A] text-white flex items-center justify-center shadow-lg animate-bounce mb-3">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#082D59]">Mithra Motors Karapattu</h3>
                <p className="text-xs text-gray-600 max-w-sm mt-1">
                  Uthangarai to Tirupattur Main Road, Near Barath Pump, Krishnagiri Dist, Tamil Nadu – 635207
                </p>
                <a
                  href={mapsUrl('karapattu')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0754A6] hover:bg-[#053F7D] text-white text-xs font-bold transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>

              {/* Showroom Details */}
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FDE8E9] text-[#E5242A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#082D59]">Our Showroom Address</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed">
                      Uthangarai to Tirupattur Main Road, Karapattu, Near Barath Pump, Krishnagiri
                      District, Tamil Nadu – 635207
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] text-[#0754A6] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#082D59]">Opening Hours</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                      Monday – Saturday: 9:00 AM – 7:00 PM<br />
                      Sunday: 9:30 AM – 1:30 PM (Half-Day)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#082D59]">Direct Telephones</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <a
                        href={telUrl(siteConfig.primaryPhone)}
                        className="text-xs sm:text-sm font-semibold text-[#0754A6] hover:underline"
                      >
                        {formatPhone(siteConfig.primaryPhone)}
                      </a>
                      <span className="text-gray-300">•</span>
                      <a
                        href={telUrl(siteConfig.secondaryPhone)}
                        className="text-xs sm:text-sm font-semibold text-[#0754A6] hover:underline"
                      >
                        {formatPhone(siteConfig.secondaryPhone)}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social media links matching mockup */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Get in Touch:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#EBF3FC] text-[#0754A6] flex items-center justify-center text-xs font-bold hover:bg-[#0754A6] hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FDE8E9] text-[#E5242A] flex items-center justify-center text-xs font-bold hover:bg-[#E5242A] hover:text-white transition-colors"
                      aria-label="YouTube"
                    >
                      ▶
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FDE8E9] text-[#E5242A] flex items-center justify-center text-xs font-bold hover:bg-gradient-to-tr hover:from-amber-500 hover:to-fuchsia-600 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      📸
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Enquiry Card (Matching Mockup with Red Submit Button) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-gray-100">
            <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
              Online Assistance
            </span>
            <h3 className="text-2xl font-extrabold text-[#082D59] font-heading mt-1">
              Send Enquiry
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              Fill in your contact information and requirement below. Our Karapattu team will connect
              with you directly on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
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
                  className={`w-full px-4 py-2.5 rounded-xl border ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-[#F4F7FC]'
                  } text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
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
                  className={`w-full px-4 py-2.5 rounded-xl border ${
                    errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-[#F4F7FC]'
                  } text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="enquiryType" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  Enquiry Type
                </label>
                <select
                  id="enquiryType"
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#F4F7FC] text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                >
                  <option value="New Bike">New Bike / Scooter Enquiry</option>
                  <option value="Spare Parts">Spare Parts Availability</option>
                  <option value="Service Booking">Two-Wheeler Service &amp; Repairs</option>
                  <option value="Exchange & Finance">Bike Exchange &amp; Finance</option>
                  <option value="General Enquiry">General Question / Test Ride</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Let us know what specific model or service you are enquiring about..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#F4F7FC] text-[#172033] text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6] resize-none"
                />
              </div>

              {/* Submit Button Matching Mockup Red Button with Send Icon */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5242A] hover:bg-[#C91A20] active:scale-95 text-white font-bold text-base shadow-lg shadow-red-600/30 transition-all duration-150 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
