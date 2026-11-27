'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, Send, AlertCircle, CheckCircle, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import siteConfig from '@/config/siteConfig';
import { whatsappUrl, telUrl, mapsUrl, formatPhone, buildEnquiryWhatsApp } from '@/lib/utils';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    type: 'Vehicle Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile) {
      errs.mobile = 'Please enter your 10-digit mobile number';
    } else if (cleanMobile.length !== 10) {
      errs.mobile = 'Mobile number must be exactly 10 digits';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const redirectUrl = buildEnquiryWhatsApp({
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      type: formData.type,
      message: formData.message.trim(),
    });

    // Open WhatsApp
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-navy-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline and Direct Showroom Contact Options */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold tracking-wider uppercase mb-4">
                <span>Direct Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
                Let’s Get You Moving.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
                Connect with our showroom team for current model availability, price enquiries, test
                rides, and vehicle servicing.
              </p>

              {/* Direct Touchpoints Cards */}
              <div className="mt-8 space-y-4">
                {/* Phone Call */}
                <div className="p-5 rounded-2xl bg-navy-900/60 border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-electric-500/10 text-electric-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Phone Support</div>
                      <div className="text-sm font-semibold text-white">Call Showroom Directly</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={telUrl(siteConfig.primaryPhone)}
                      className="px-3.5 py-1.5 rounded-lg bg-navy-950 hover:bg-electric-500/20 text-electric-300 border border-white/5 hover:border-electric-500/30 text-xs font-medium transition-colors"
                    >
                      {formatPhone(siteConfig.primaryPhone)}
                    </a>
                    <a
                      href={telUrl(siteConfig.secondaryPhone)}
                      className="px-3.5 py-1.5 rounded-lg bg-navy-950 hover:bg-electric-500/20 text-electric-300 border border-white/5 hover:border-electric-500/30 text-xs font-medium transition-colors"
                    >
                      {formatPhone(siteConfig.secondaryPhone)}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl bg-navy-900/60 border border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium">Instant Messaging</div>
                        <div className="text-sm font-semibold text-white">WhatsApp Chat</div>
                      </div>
                    </div>
                    <a
                      href={whatsappUrl("Hello Mithra Motors, I would like to make an enquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-medium transition-colors"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>

                {/* Showroom Directions */}
                <div className="p-5 rounded-2xl bg-navy-900/60 border border-white/5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-electric-500/10 text-electric-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Showroom Address</div>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        Karapattu, Near Barath Pump
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Uthangarai to Tirupattur Main Road, Tamil Nadu – 635207
                      </p>
                      <a
                        href={mapsUrl('karapattu')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-electric-400 hover:text-white transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open in Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Enquiry Form that opens WhatsApp */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="up" delay={0.15}>
              <div className="rounded-3xl bg-navy-900/80 border border-white/10 p-6 sm:p-10 shadow-2xl relative">
                <h3 className="text-2xl font-bold font-heading text-white">Send an Enquiry</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Fill in your details below. Your message will be formatted and opened directly in
                  WhatsApp for our team to respond.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-electric-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-950 border ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Mobile field */}
                  <div>
                    <label htmlFor="mobile" className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                      Mobile Number (10 digits) <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="mobile"
                        value={formData.mobile}
                        onChange={(e) => {
                          setFormData({ ...formData, mobile: e.target.value });
                          if (errors.mobile) setErrors({ ...errors, mobile: '' });
                        }}
                        placeholder="98765 43210"
                        maxLength={10}
                        className={`w-full pl-14 pr-4 py-3 rounded-xl bg-navy-950 border ${
                          errors.mobile ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 transition-colors`}
                      />
                    </div>
                    {errors.mobile && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.mobile}</span>
                      </p>
                    )}
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label htmlFor="type" className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                      Enquiry Type
                    </label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 transition-colors"
                    >
                      <option value="Vehicle Enquiry">Vehicle Enquiry (Models &amp; Price)</option>
                      <option value="Service Enquiry">Two-Wheeler Service &amp; Maintenance</option>
                      <option value="Test Ride">Test Ride Availability</option>
                      <option value="Spare Parts">Spare Parts Enquiry</option>
                      <option value="General Enquiry">General Question</option>
                    </select>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what specific model or service you're interested in..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Transparent instruction note */}
                  <div className="p-3.5 rounded-xl bg-navy-950 border border-white/5 text-xs text-gray-400 leading-relaxed">
                    <span className="font-semibold text-gray-300">How it works: </span>
                    Clicking below will format your enquiry and open WhatsApp with our team. Please
                    tap &ldquo;Send&rdquo; inside WhatsApp to complete sending. We do not store
                    personal data on this browser.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-600 hover:bg-green-700 active:scale-[0.99] text-white font-medium text-base shadow-lg shadow-green-600/25 transition-all duration-200 disabled:opacity-50"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Continue on WhatsApp</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
