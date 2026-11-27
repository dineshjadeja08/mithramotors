'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Zap,
  MessageCircle,
  Phone,
  ShieldCheck,
  BatteryCharging,
  Sparkles,
  Check,
  Compass,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { whatsappUrl, telUrl } from '@/lib/utils';

export default function ElectricVehiclesPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');

  const evBrands = ['All', 'KOMAKI', 'BGAUSS', 'AMPERE'];

  const evVehicles = useMemo(() => {
    return siteConfig.vehicles.filter((v) => {
      if (!v.isPublished) return false;
      if (v.fuelType !== 'Electric' && v.category !== 'electric' && !v.isElectricPage) return false;
      if (selectedBrand !== 'All' && v.brand !== selectedBrand) return false;
      return true;
    });
  }, [selectedBrand]);

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* ────────────────────────────────────────────────────────
          1. EV BANNER
          ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#082D59] py-14 sm:py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/bikes-banner.webp"
            alt="Electric Two-Wheelers Mithra Motors"
            fill
            priority
            className="object-cover opacity-35 object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D59] via-[#082D59]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#DCFCE7] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Go Electric • Go Future</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
            Electric Vehicles (EV)
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-200">
            Zero Pollution, Low Maintenance &amp; High Performance Electric Scooters in Karapattu
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. BRAND FILTER BAR
          ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#082D59] uppercase tracking-wider mr-2">
                EV Brands:
              </span>
              {evBrands.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setSelectedBrand(b)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedBrand === b
                      ? 'bg-[#16A34A] text-white shadow-xs'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {b === 'All' ? 'All Electric Scooters' : b}
                </button>
              ))}
            </div>

            <div className="text-xs text-gray-500 font-semibold">
              Showing {evVehicles.length} Models
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. EV ADVANTAGE STRIP
          ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EBF3FC] border-b border-blue-100 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-bold text-[#082D59]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span>Zero Petrol Expense</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span>Govt. Subsidy Guidance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span>Long-Life Lithium Battery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span>Low Running Cost</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. PRODUCT CARDS GRID
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {evVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl p-6 card-shadow card-shadow-hover border border-gray-100 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-gray-50 mb-4 flex items-center justify-center p-3 border border-gray-100">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.model}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[10px] font-bold text-[#16A34A] border border-green-200 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>Electric</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0754A6]">
                    {vehicle.brand}
                  </span>
                  {vehicle.tag && (
                    <span className="text-[11px] font-semibold text-gray-500">
                      {vehicle.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-[#082D59] mt-1 font-heading">
                  {vehicle.model}
                </h3>

                {/* Confirmed Details List */}
                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-3">
                  {vehicle.confirmedDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Price Notice */}
                <div className="mt-4 p-3 rounded-xl bg-[#F4F7FC] border border-gray-200 text-xs font-bold text-[#082D59]">
                  ₹ Contact showroom for latest on-road price &amp; battery warranty
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
                <a
                  href={whatsappUrl(`Hello Mithra Motors, I'd like to enquire about the ${vehicle.brand} ${vehicle.model} electric scooter.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] active:scale-95 text-white text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire</span>
                </a>

                <a
                  href={whatsappUrl(`Hello Mithra Motors, I would like to book a Test Ride for the ${vehicle.brand} ${vehicle.model} electric scooter at Karapattu.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0754A6] hover:bg-[#053F7D] active:scale-95 text-white text-xs font-bold transition-colors"
                >
                  <span>Test Ride</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* EV Consultation Banner */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl p-8 bg-[#082D59] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-[#FFD42A] uppercase tracking-wider">
              Expert EV Advice
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading mt-1">
              Have Questions About Electric Scooters?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-lg">
              Visit our Karapattu showroom to explore battery charging options, range estimation, and
              test drive our Komaki, BGauss, and Ampere models.
            </p>
          </div>

          <a
            href={whatsappUrl("Hello Mithra Motors, I would like expert advice on selecting the best Electric Scooter.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With EV Specialist</span>
          </a>
        </div>
      </section>
    </div>
  );
}
