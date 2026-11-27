'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  MessageCircle,
  Phone,
  Search,
  Filter,
  Check,
  Bike,
  Sparkles,
  MapPin,
  HelpCircle,
  Compass,
} from 'lucide-react';
import siteConfig, { Vehicle } from '@/config/siteConfig';
import { whatsappUrl, telUrl } from '@/lib/utils';

export default function BikesPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract distinct brands
  const brands = useMemo(() => {
    const list = Array.from(new Set(siteConfig.vehicles.map((v) => v.brand)));
    return ['All', ...list];
  }, []);

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    return siteConfig.vehicles.filter((v) => {
      if (!v.isPublished) return false;
      if (selectedBrand !== 'All' && v.brand !== selectedBrand) return false;
      if (selectedCategory !== 'All' && v.category !== selectedCategory.toLowerCase()) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          v.model.toLowerCase().includes(q) ||
          v.brand.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [selectedBrand, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* ────────────────────────────────────────────────────────
          1. BANNER (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#082D59] py-14 sm:py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/bikes-banner.webp"
            alt="Bikes and Scooters at Mithra Motors"
            fill
            priority
            className="object-cover opacity-30 object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D59] via-[#082D59]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white mb-3">
            <span>Official Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
            Bikes &amp; Scooters
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-200">
            Ride Your Dreams with Mithra Motors
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. FILTERS BAR (Matching Mockup Dropdowns)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Category / Type Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {['All', 'Motorcycle', 'Scooter', 'Electric'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0754A6] text-white shadow-xs'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat === 'All' ? 'All Types' : cat + 's'}
                </button>
              ))}
            </div>

            {/* Brand Filter & Search */}
            <div className="flex items-center gap-2">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-[#082D59] bg-[#F4F7FC] focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                aria-label="Filter by Brand"
              >
                <option value="All">All Brands</option>
                {brands
                  .filter((b) => b !== 'All')
                  .map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
              </select>

              <div className="relative">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-lg border border-gray-200 text-xs text-[#172033] bg-[#F4F7FC] focus:outline-none focus:ring-2 focus:ring-[#0754A6] w-36 sm:w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. VEHICLES GRID (2 Cols Mobile, 4 Cols Desktop)
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl p-3 sm:p-5 card-shadow card-shadow-hover border border-gray-100 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  {/* Vehicle Image Frame */}
                  <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-gray-50 mb-3 flex items-center justify-center p-2">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.model}
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white/90 text-[10px] font-bold text-[#0754A6] border border-gray-200 uppercase">
                      {vehicle.category}
                    </span>
                  </div>

                  {/* Brand & Model */}
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0754A6]">
                    {vehicle.brand}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#082D59] mt-0.5 leading-snug">
                    {vehicle.model}
                  </h3>

                  {/* Badges / Specs */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    {vehicle.engineCc && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                        {vehicle.engineCc}
                      </span>
                    )}
                    {vehicle.mileageTag && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#DCFCE7] text-[#16A34A]">
                        {vehicle.mileageTag}
                      </span>
                    )}
                  </div>

                  {/* Color Swatches */}
                  {vehicle.colors && (
                    <div className="flex items-center gap-1.5 mt-2.5">
                      {vehicle.colors.map((c, idx) => (
                        <span
                          key={idx}
                          className="w-3 h-3 rounded-full border border-gray-300 shadow-2xs"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Price Info */}
                  <div className="mt-3 text-xs font-bold text-[#082D59] flex items-center gap-1">
                    <span>₹ Contact for latest price</span>
                  </div>
                </div>

                {/* Action Buttons: full width on mobile, 2-col on desktop */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-2">
                  <a
                    href={whatsappUrl(`Hello Mithra Motors, I'd like to enquire about the price, availability, and finance of ${vehicle.brand} ${vehicle.model}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] active:scale-95 text-white text-[11px] sm:text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={whatsappUrl(`Hello Mithra Motors, I would like to book a Test Ride for the ${vehicle.brand} ${vehicle.model} at your Karapattu showroom.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#0754A6] hover:bg-[#053F7D] active:scale-95 text-white text-[11px] sm:text-xs font-bold transition-colors"
                  >
                    <span>Test Ride</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-10 text-center max-w-md mx-auto card-shadow">
            <Bike className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#082D59]">No models match your filter</h3>
            <p className="text-xs text-gray-500 mt-1">Try resetting the brand or category filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedBrand('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#0754A6] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ────────────────────────────────────────────────────────
          4. BOTTOM TRUST STRIP (Matching Mockup)
          ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-200 py-6 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs sm:text-sm font-bold text-[#082D59]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E5242A]" />
              <span>Visit Our Showroom</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0754A6]" />
              <span>Get Expert Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <Bike className="w-4 h-4 text-[#16A34A]" />
              <span>Test Ride Today</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
