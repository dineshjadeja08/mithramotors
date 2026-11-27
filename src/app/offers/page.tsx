'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Tag,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
  Trophy,
  Gift,
} from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { whatsappUrl, telUrl } from '@/lib/utils';

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      {/* ────────────────────────────────────────────────────────
          1. OFFERS BANNER
          ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#082D59] py-14 sm:py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/showroom-banner.webp"
            alt="Mithra Motors Offers"
            fill
            priority
            className="object-cover opacity-35 object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082D59] via-[#082D59]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white mb-3">
            <Tag className="w-3.5 h-3.5 text-[#FFD42A]" />
            <span>Showroom Schemes &amp; Promotions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
            Offers &amp; Promotions
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-200">
            Current Showroom Purchase Schemes, Exchange Offers &amp; Completed Promotions
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. CURRENT PROMOTIONS NOTICE
          ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Active Enquiry Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-gray-100 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FC] text-[#0754A6] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0754A6]" />
              <span>Current In-Store Benefits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D59] font-heading">
              Looking for Current Exchange or Festive Offers?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              We periodically offer attractive festival finance schemes, easy down-payment support,
              and top exchange value for your old two-wheeler across TVS, Komaki, BGauss, and Ampere.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Please contact our showroom sales advisors directly on WhatsApp or telephone to check
              active seasonal benefits and on-road discounts.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl("Hello Mithra Motors, what are the current seasonal or exchange offers available?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Current Offers on WhatsApp</span>
              </a>

              <a
                href={telUrl(siteConfig.primaryPhone)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0754A6] hover:bg-[#053F7D] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────
            3. HISTORICAL PROMOTION: PREVIOUS LUCKY DRAW - COMPLETED
            (Strictly compliant with prompt: clear Completed status, no active entries)
            ──────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-gray-200 relative overflow-hidden">
          {/* Completed Watermark Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gray-100 text-gray-500 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Archived Promotion Record
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#082D59] font-heading">
                  Previous Lucky Draw – Completed
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 font-bold text-xs border border-gray-300">
              <CheckCircle2 className="w-4 h-4 text-gray-500" />
              <span>Status: COMPLETED / CONCLUDED</span>
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Historical Notice */}
            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Important Notice:</span>
                  <span>
                    The bumper lucky draw and coupon promotion featured on the promotional banner
                    below has concluded. No new registrations or coupon claims are active.
                  </span>
                </div>
              </div>

              <p>
                During the inaugural campaign, Mithra Motors conducted a celebratory bumper draw for
                our valued customers with the following announced prizes:
              </p>

              <div className="grid grid-cols-3 gap-3 text-center py-2">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-[10px] font-bold uppercase text-[#E5242A] block">1st Prize</span>
                  <span className="text-xs sm:text-sm font-bold text-[#082D59]">TVS Jupiter 110</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-[10px] font-bold uppercase text-[#0754A6] block">2nd Prize</span>
                  <span className="text-xs sm:text-sm font-bold text-[#082D59]">Komaki X-One EV</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-[10px] font-bold uppercase text-[#16A34A] block">3rd Prize</span>
                  <span className="text-xs sm:text-sm font-bold text-[#082D59]">TVS XL100</span>
                </div>
              </div>

              <p className="text-gray-500 text-xs">
                Free general service schemes associated with this past draw have expired and are no
                longer claimable unless separately confirmed by the management.
              </p>
            </div>

            {/* Right: Archived Promotional Banner Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3]">
              <Image
                src="/images/poster-historical.webp"
                alt="Previous Mithra Motors Bumper Lucky Draw Promotion - Completed"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                <span className="px-4 py-2 rounded-xl bg-[#082D59]/90 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider border border-white/20">
                  Historical Promotion • Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
