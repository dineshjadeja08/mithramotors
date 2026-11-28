'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Layers,
  MapPin,
  Clock,
  Wrench,
  Bike,
} from 'lucide-react';
import siteConfig from '@/config/siteConfig';

const BRANDS = [
  { name: 'Hero', color: '#E5242A' },
  { name: 'TVS', color: '#0754A6' },
  { name: 'Komaki', color: '#16A34A' },
  { name: 'BGauss', color: '#082D59' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* ────────────────────────────────────────────────────────
          1. BANNER (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#082D59] py-14 sm:py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/about-banner.webp"
            alt="About Mithra Motors Karapattu"
            fill
            priority
            className="object-cover opacity-35 object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D59] via-[#082D59]/85 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white mb-3">
            <span>Our Story &amp; Values</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
            About Mithra Motors
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-200">
            Committed to Delivering Reliable Rides &amp; Dependable Service Across Krishnagiri
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. INTRO & MISSION SECTION (Matching Mockup Two-Box)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: About Intro Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-gray-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
                Karapattu Showroom
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading mt-1">
                Your Neighborhood Two-Wheeler Destination
              </h2>

              <p className="mt-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                Mithra Motors is your trusted multi-brand two-wheeler showroom in Karapattu,
                Krishnagiri District, Tamil Nadu. Situated conveniently along the Uthangarai to
                Tirupattur Main Road near Barath Pump, we serve riders with genuine enthusiasm and
                expert advice.
              </p>

              <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                We are committed to providing top-quality motorcycles, scooters, electric vehicles,
                100% genuine spare parts, and dependable periodic servicing to keep you moving
                always.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100 text-center">
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#082D59]">Multi-Brand</span>
                <span className="text-[11px] text-gray-500 block mt-0.5 font-medium">Sales Lineup</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#16A34A]">100% Genuine</span>
                <span className="text-[11px] text-gray-500 block mt-0.5 font-medium">Spare Parts</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#E5242A]">Certified</span>
                <span className="text-[11px] text-gray-500 block mt-0.5 font-medium">Care Technicians</span>
              </div>
            </div>
          </div>

          {/* Right: Our Mission Card (Dark Navy Matching Mockup) */}
          <div className="lg:col-span-5 bg-[#082D59] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#0D3B73] flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EBF3FC]/15 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>

              <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
                Purpose
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading mt-1">
                Our Mission
              </h3>

              <p className="mt-4 text-base text-gray-200 leading-relaxed">
                &ldquo;To deliver reliable vehicles, genuine parts, transparent pricing, and excellent
                two-wheeler maintenance service so that every customer in our region rides with complete
                peace of mind.&rdquo;
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-2.5 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Transparent billing with no hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Customer-first support &amp; test rides</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Experienced diagnostics and quick turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. SHOWROOM & WORKSHOP GALLERY (4-Card Grid)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading">
            Inside Mithra Motors
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            A glimpse into our showroom floor, service bays, and dedicated automotive team in Karapattu.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl overflow-hidden bg-white card-shadow border border-gray-100 flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/images/showroom-floor.webp"
                alt="Showroom display floor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="p-3 text-center">
              <span className="text-xs font-bold text-[#082D59] block">Showroom Floor</span>
              <span className="text-[10px] text-gray-400">Multi-brand motorcycle displays</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-white card-shadow border border-gray-100 flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/images/mechanic-work.webp"
                alt="Workshop mechanics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="p-3 text-center">
              <span className="text-xs font-bold text-[#082D59] block">Service Bays</span>
              <span className="text-[10px] text-gray-400">Trained two-wheeler technicians</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-white card-shadow border border-gray-100 flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/images/showroom-team.webp"
                alt="Showroom staff and team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="p-3 text-center">
              <span className="text-xs font-bold text-[#082D59] block">Customer Service Team</span>
              <span className="text-[10px] text-gray-400">Friendly guidance &amp; paperwork support</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-white card-shadow border border-gray-100 flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/images/showroom-banner.webp"
                alt="Mithra Motors Karapattu facade"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="p-3 text-center">
              <span className="text-xs font-bold text-[#082D59] block">Showroom Entrance</span>
              <span className="text-[10px] text-gray-400">Karapattu, Krishnagiri</span>
            </div>
          </div>
        </div>

        {/* Customer Deliveries Photo Grid */}
        <div id="deliveries" className="mt-12 sm:mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#E5242A] uppercase tracking-wider">
              Karapattu Showroom
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading mt-1">
              Recent Customer Deliveries
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Trusted by families across Karapattu, Uthangarai, Kunnathur, and Krishnagiri.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="rounded-2xl overflow-hidden bg-white card-shadow border border-gray-100"
              >
                <div className="relative aspect-[4/3] w-full bg-gray-100">
                  <Image
                    src={`/images/deliveries/delivery-${num}.webp`}
                    alt={`Mithra Motors Customer Delivery ${num}`}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. MULTI-BRAND SHOWROOM LOGOS (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-3xl p-6 sm:p-8 card-shadow border border-gray-100 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
            Multi-Brand Showroom Selection
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {BRANDS.map((b) => (
              <div
                key={b.name}
                className="px-5 py-2.5 rounded-xl bg-[#F4F7FC] border border-gray-200 text-sm sm:text-base font-black tracking-wide"
                style={{ color: b.color }}
              >
                {b.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. OUR SERVICE AREAS (Matching Mockup Bottom Strip)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-200 py-6 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#082D59]">
            <MapPin className="w-4 h-4 text-[#E5242A]" />
            <span>Our Service Areas: Karapattu | Uthangarai | Kunnathur | Krishnagiri</span>
          </div>
        </div>
      </section>
    </div>
  );
}
