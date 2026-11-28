'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Wrench,
  Navigation,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Star,
  Layers,
  Award,
  Sparkles,
  Banknote,
  Bike,
  Package,
  Zap,
} from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { telUrl, whatsappUrl, mapsUrl, formatPhone } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { lang } = useLanguage();
  const featuredBikes = siteConfig.vehicles.filter((v) => v.isFeatured && v.isPublished).slice(0, 4);
  const previewIds = ['tyres', 'batteries', 'oils', 'engine-parts'];
  const sparePartsPreview = siteConfig.spareParts.filter((p) => previewIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#082D59]">
        {/* Real Showroom Background Banner */}
        <div className="absolute inset-0">
          <Image
            src="/images/showroom-banner.webp"
            alt="Mithra Motors showroom Karapattu"
            fill
            priority
            className="object-cover opacity-35 object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D59] via-[#082D59]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl text-left">
            {/* Showroom Facade Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E5242A] animate-pulse" />
              <span>HERO • TVS • KOMAKI • BGAUSS • KARAPATTU</span>
            </div>

            {/* Headline matching user prompt */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white font-heading tracking-tight leading-[1.15]">
              {lang === 'ta' ? (
                <>
                  மித்ரா மோட்டார்ஸ் — <br className="hidden sm:inline" />
                  <span className="text-white">காரப்பட்டு நம்பகமான இருசக்கர வாகன ஷோரூம்</span>
                </>
              ) : (
                <>
                  Mithra Motors — <br className="hidden sm:inline" />
                  <span className="text-white">
                    Trusted Two-Wheeler Showroom in Karapattu
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle matching mockup */}
            <p className="mt-5 text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              {lang === 'ta'
                ? 'புதிய பைக்குகள், எலக்ட்ரிக் ஸ்கூட்டர்கள், ஒரிஜினல் உதிரி பாகங்கள், எக்ஸ்சேஞ்ச் & சிறந்த சர்வீஸ்.'
                : 'New Bikes, Electric Scooters, Genuine Spare Parts, Exchange & Expert Service.'}
            </p>

            {/* Three Action Buttons matching mockup */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              {/* WhatsApp Now (Official: 9626559167) */}
              <a
                href={whatsappUrl("Hello Mithra Motors, I'd like to enquire about new bikes and service.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-green-600/30 transition-all duration-150"
              >
                <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} className="w-5 h-5 rounded-full object-contain shrink-0" />
                <span>{lang === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp Now'}</span>
              </a>

              {/* Call Now */}
              <a
                href={telUrl(siteConfig.primaryPhone)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0754A6] hover:bg-[#053F7D] active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-700/30 transition-all duration-150"
              >
                <Image src="/images/call-icon.png" alt="Call" width={24} height={24} className="w-5 h-5 rounded-full object-contain shrink-0" />
                <span>{lang === 'ta' ? 'அழைக்கவும்' : 'Call Now'}</span>
              </a>

              {/* Book Service */}
              <Link
                href="/service#book-service"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5242A] hover:bg-[#C91A20] active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all duration-150"
              >
                <Wrench className="w-5 h-5" />
                <span>{lang === 'ta' ? 'சர்வீஸ் முன்பதிவு' : 'Book Service'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. RED LOCATION & SERVICE AREA STRIP (Matching Red Bar)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-[#E5242A] text-white py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wide">
            <MapPin className="w-4 h-4 text-white shrink-0" />
            <span>Serving: Karapattu | Uthangarai | Kunnathur | Krishnagiri</span>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. BRAND SHOWCASE STRIP (TVS, KOMAKI, BGAUSS, AMPERE)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-4">
            Official Brands Handled
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {siteConfig.brands.map((b) => (
              <div
                key={b.name}
                className="p-3 rounded-2xl bg-[#F4F7FC] border border-gray-200 text-center hover:border-[#0754A6] transition-colors"
              >
                <span className="text-base sm:text-lg font-black tracking-wide" style={{ color: b.badgeColor }}>
                  {b.name}
                </span>
                <span className="text-[10px] text-gray-500 font-semibold block mt-0.5">
                  {b.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. FOUR SERVICE PILLAR CARDS (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: New Bikes */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 text-center card-shadow card-shadow-hover transition-all duration-200 border border-gray-100 flex flex-col items-center justify-between">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EBF3FC] text-[#0754A6] flex items-center justify-center mb-3">
              <Bike className="w-8 h-8" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#082D59]">New Bikes</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">Hero &amp; TVS motorcycles, scooters &amp; XL100</p>
            <Link
              href="/bikes"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#0754A6] hover:bg-[#053F7D] text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <span>View Bikes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Electric Scooters */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 text-center card-shadow card-shadow-hover transition-all duration-200 border border-gray-100 flex flex-col items-center justify-between">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mb-3">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#082D59]">Electric Vehicles</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">Komaki &amp; BGauss EV scooter lineup</p>
            <Link
              href="/electric"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <span>Explore EVs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Spare Parts */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 text-center card-shadow card-shadow-hover transition-all duration-200 border border-gray-100 flex flex-col items-center justify-between">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FDE8E9] text-[#E5242A] flex items-center justify-center mb-3">
              <Package className="w-8 h-8" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#082D59]">Spare Parts</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">Tyre, Battery, Oils — Hero &amp; TVS all models spares</p>
            <Link
              href="/spare-parts"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#0754A6] hover:bg-[#053F7D] text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <span>Enquire on WhatsApp</span>
            </Link>
          </div>

          {/* Card 4: Two-Wheeler Service */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 text-center card-shadow card-shadow-hover transition-all duration-200 border border-gray-100 flex flex-col items-center justify-between">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EBF3FC] text-[#0754A6] flex items-center justify-center mb-3">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#082D59]">Two-Wheeler Service</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">Certified diagnostics &amp; periodic care</p>
            <Link
              href="/service"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#0754A6] hover:bg-[#053F7D] text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <span>Book Service</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. OUR FEATURED BIKES & ELECTRIC SCOOTERS SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
              Showroom Lineup
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading mt-0.5">
              Featured Bikes &amp; Electric Scooters
            </h2>
          </div>

          <Link
            href="/bikes"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0754A6] hover:text-[#E5242A] transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {featuredBikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white rounded-2xl p-3 sm:p-5 card-shadow card-shadow-hover border border-gray-100 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-gray-50 mb-3 flex items-center justify-center p-2">
                  <Image
                    src={bike.image}
                    alt={bike.model}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white/95 text-[10px] font-bold text-[#0754A6] border border-gray-200 uppercase">
                    {bike.fuelType === 'Electric' ? 'EV' : bike.category}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#0754A6]">
                  {bike.brand}
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-[#082D59] mt-0.5 leading-snug">
                  {bike.model}
                </h3>

                {/* Specs Pill */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  {bike.engineCc && (
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                      {bike.engineCc}
                    </span>
                  )}
                  {bike.mileageTag && (
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded bg-[#DCFCE7] text-[#16A34A]">
                      {bike.mileageTag}
                    </span>
                  )}
                </div>

                {/* Price & EMI Guidance */}
                <div className="mt-3 text-[11px] sm:text-xs font-bold text-[#082D59] flex items-center gap-1">
                  <span>₹ {lang === 'ta' ? 'விலை & EMI விவரங்களுக்கு தொடர்பு கொள்ளவும்' : 'Easy EMI & Exchange • Contact for Price'}</span>
                </div>
              </div>

              {/* Actions - stacked full width on mobile, 2-col on desktop */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-2">
                <a
                  href={whatsappUrl(`Hello Mithra Motors, I'd like to enquire about the price and availability of ${bike.brand} ${bike.model}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] active:scale-95 text-white text-[11px] sm:text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{lang === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp'}</span>
                </a>

                <a
                  href={whatsappUrl(`Test ride: ${bike.brand} ${bike.model}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-[#0754A6] hover:bg-[#053F7D] active:scale-95 text-white text-[11px] sm:text-xs font-bold transition-colors"
                >
                  <span>{lang === 'ta' ? 'டெஸ்ட் ரைடு' : 'Test Ride'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. SPARE PARTS PREVIEW SECTION (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 card-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
                Tyre • Battery • Oils • All Hero &amp; TVS Models
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading mt-0.5">
                Spare Parts Preview
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Tyre, Battery, Oils — Hero &amp; TVS all models genuine spares available.
              </p>
            </div>

            <Link
              href="/spare-parts"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0754A6] hover:text-[#E5242A] transition-colors"
            >
              <span>View All Parts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sparePartsPreview.map((part) => (
              <Link
                key={part.id}
                href="/spare-parts"
                className="group rounded-2xl bg-[#F4F7FC] p-3 text-center border border-gray-200 hover:border-[#0754A6] transition-all duration-200"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white mb-2 flex items-center justify-center">
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-200 p-2"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#082D59] truncate group-hover:text-[#0754A6]">
                  {part.name}
                </h4>
                <span className="text-[10px] text-gray-500 font-medium block mt-0.5">
                  {part.tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. WHY CHOOSE MITHRA MOTORS? (Matching Mockup Badges)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading mb-8">
          Why Choose Mithra Motors?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#EBF3FC] text-[#0754A6] flex items-center justify-center mb-3">
              <Layers className="w-7 h-7" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#082D59]">Multi-brand Showroom</h4>
            <p className="text-xs text-gray-500 mt-1">Hero, TVS, Komaki &amp; BGauss sales &amp; service</p>
          </div>

          <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mb-3">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#082D59]">Genuine Spare Parts</h4>
            <p className="text-xs text-gray-500 mt-1">100% factory OEM components for safety &amp; reliability</p>
          </div>

          <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#FDE8E9] text-[#E5242A] flex items-center justify-center mb-3">
              <Award className="w-7 h-7" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#082D59]">Expert Service Support</h4>
            <p className="text-xs text-gray-500 mt-1">Skilled mechanics with modern diagnostic bays</p>
          </div>

          <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#EBF3FC] text-[#0754A6] flex items-center justify-center mb-3">
              <Banknote className="w-7 h-7" />
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#082D59]">Easy Exchange &amp; Finance</h4>
            <p className="text-xs text-gray-500 mt-1">Top exchange value and flexible finance assistance</p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7B. HAPPY CUSTOMER DELIVERIES (Real Showroom Moments)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
              Real Showroom Moments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading mt-0.5">
              Happy Customer Deliveries
            </h2>
          </div>
          <Link
            href="/about#deliveries"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0754A6] hover:text-[#E5242A] transition-colors"
          >
            <span>View More Photos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {[
            { src: '/images/deliveries/delivery-1.webp', label: 'TVS Jupiter Delivery' },
            { src: '/images/deliveries/delivery-3.webp', label: 'Hero Splendor+ Delivery' },
            { src: '/images/deliveries/delivery-4.webp', label: 'BGauss EV Delivery' },
            { src: '/images/deliveries/delivery-8.webp', label: 'Showroom Customer Handover' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-2.5 sm:p-3 text-center">
                <span className="text-[11px] sm:text-xs font-bold text-[#082D59]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          8. SHOWROOM LOCATION & HOURS (Matching Confirmed Map URL)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 card-shadow border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Preview Visual with Official Link */}
          <div className="lg:col-span-7 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
            <div className="absolute inset-0 bg-[#E8EEF5] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E5242A] text-white flex items-center justify-center shadow-lg animate-bounce mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#082D59]">Mithra Motors — Karapattu Showroom</h4>
              <p className="text-xs text-gray-600 mt-1 max-w-sm">
                Uthangarai to Tirupattur Main Road, Karapattu, Near Barath Pump, Tamil Nadu – 635207
              </p>
              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0754A6] hover:bg-[#053F7D] text-white text-xs font-bold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#082D59] font-heading">
              Visit Our Showroom
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5242A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#082D59] block">Confirmed Address:</span>
                  <span>Uthangarai to Tirupattur Main Road, Karapattu, Near Barath Pump, Tamil Nadu – 635207.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0754A6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#082D59] block">
                    {lang === 'ta' ? 'திறக்கும் நேரம்:' : 'Opening Hours:'}
                  </span>
                  <span>
                    {lang === 'ta'
                      ? 'திங்கள் – சனி: 9:00 AM – 7:00 PM | ஞாயிறு: 9:30 AM – 1:30 PM'
                      : 'Mon – Sat: 9:00 AM – 7:00 PM | Sun: 9:30 AM – 1:30 PM (Half-Day)'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Star className="w-4 h-4 text-[#FFD42A] shrink-0 mt-0.5 fill-[#FFD42A]" />
                <div>
                  <span className="font-bold text-[#082D59] block">
                    {lang === 'ta' ? 'கூகுள் மதிப்பீடுகள்:' : 'Verified Google Listing:'}
                  </span>
                  <a
                    href={mapsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0754A6] font-semibold hover:underline"
                  >
                    {lang === 'ta'
                      ? 'கூகுள் மேப்ஸில் வாடிக்கையாளர் கருத்துகளைப் பார்க்க →'
                      : 'View Showroom Photos & Customer Reviews on Google Maps →'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#082D59] block">Telephones:</span>
                  <span>96265 59167 / 94897 46955</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#082D59] block">Official WhatsApp:</span>
                  <span>9626559167</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={telUrl(siteConfig.primaryPhone)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0754A6] hover:bg-[#053F7D] text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#E5242A] hover:bg-[#C91A20] text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
