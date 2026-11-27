'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Navigation, ArrowUp, Clock } from 'lucide-react';
import Logo from './Logo';
import siteConfig from '@/config/siteConfig';
import { telUrl, whatsappUrl, mapsUrl, formatPhone } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      className="bg-[#082D59] text-gray-300 pt-12 pb-24 md:pb-8 border-t border-[#051E3C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          {/* Column 1: Brand Info & Address */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="dark" />

            <p className="text-xs font-bold tracking-wider uppercase text-white/90">
              MULTI BRAND TWO WHEELER SHOWROOM • SALES &amp; SERVICE
            </p>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Authorized sales and genuine service for TVS, Komaki, BGauss, and Ampere.
              New bikes, electric scooters, certified periodic maintenance, and genuine spare parts.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-gray-300 pt-1">
              <MapPin className="w-4 h-4 text-[#E5242A] shrink-0 mt-0.5" />
              <span>
                Uthangarai to Tirupattur Main Road, Karapattu, Near Barath Pump, Tamil Nadu – 635207.
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#FFD42A] shrink-0" />
              <span>Opening Hours: 9:00 AM – 7:00 PM (Mon – Sat)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Website Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/bikes" className="hover:text-white transition-colors">
                  Bikes &amp; Scooters Catalogue
                </Link>
              </li>
              <li>
                <Link href="/electric" className="hover:text-white transition-colors">
                  Electric Vehicles (EV)
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-white transition-colors">
                  Genuine Spare Parts
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Service &amp; Repairs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Mithra Motors
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-white transition-colors">
                  Offers &amp; Promotions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Service Areas */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Showroom Contacts
            </h4>

            <div className="space-y-2.5 text-sm">
              <a
                href={telUrl(siteConfig.primaryPhone)}
                className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Primary: {formatPhone(siteConfig.primaryPhone)}</span>
              </a>

              <a
                href={telUrl(siteConfig.secondaryPhone)}
                className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Secondary: {formatPhone(siteConfig.secondaryPhone)}</span>
              </a>

              <a
                href={whatsappUrl("Hello Mithra Motors, I'd like to enquire about two-wheeler sales and service.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-green-300 hover:text-green-200 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#16A34A] flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Official WhatsApp: {formatPhone(siteConfig.whatsappNumber)}</span>
              </a>

              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-blue-200 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Navigation className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Google Maps Showroom Location</span>
              </a>
            </div>

            {/* Service Areas tag */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                Service Areas:
              </div>
              <div className="text-xs text-white/90 font-medium mt-0.5">
                Karapattu • Uthangarai • Kunnathur • Krishnagiri
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {currentYear} <strong className="text-white">MITHRA MOTORS</strong> | Karapattu, Krishnagiri. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
