'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wrench, Navigation } from 'lucide-react';
import siteConfig from '@/config/siteConfig';
import { telUrl, whatsappUrl, mapsUrl } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function MobileActionBar() {
  const { lang } = useLanguage();
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(8,45,89,0.12)] safe-bottom"
      role="navigation"
      aria-label="Mobile quick actions"
    >
      <div className="grid grid-cols-4 divide-x divide-gray-100 py-1.5 px-1">
        {/* Action 1: Call */}
        <a
          href={telUrl(siteConfig.primaryPhone)}
          className="flex flex-col items-center justify-center py-1 px-0.5 text-center text-[#082D59] active:bg-gray-100 transition-colors"
          aria-label="Call primary showroom number"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-0.5 shadow-2xs overflow-hidden">
            <Image
              src="/images/call-icon.png"
              alt="Call Mithra Motors"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[10px] font-bold tracking-tight">{lang === 'ta' ? 'அழைக்க' : 'Call'}</span>
        </a>

        {/* Action 2: WhatsApp */}
        <a
          href={whatsappUrl("Hello Mithra Motors, I would like to make an enquiry.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-0.5 text-center text-[#16A34A] active:bg-green-50 transition-colors"
          aria-label="Official WhatsApp chat"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-0.5 shadow-2xs overflow-hidden">
            <Image
              src="/images/whatsapp-icon.png"
              alt="WhatsApp Mithra Motors"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[10px] font-bold tracking-tight">{lang === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp'}</span>
        </a>

        {/* Action 3: Book Service */}
        <Link
          href="/service#book-service"
          className="flex flex-col items-center justify-center py-1 px-0.5 text-center text-[#E5242A] active:bg-red-50 transition-colors"
          aria-label="Book two-wheeler service"
        >
          <div className="w-8 h-8 rounded-full bg-[#FDE8E9] text-[#E5242A] flex items-center justify-center mb-0.5 shadow-2xs">
            <Wrench className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">{lang === 'ta' ? 'சர்வீஸ்' : 'Book Service'}</span>
        </Link>

        {/* Action 4: Directions (Confirmed Google Maps link) */}
        <a
          href={mapsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-0.5 text-center text-[#082D59] active:bg-gray-100 transition-colors"
          aria-label="Open confirmed showroom location on Google Maps"
        >
          <div className="w-8 h-8 rounded-full bg-[#EBF3FC] text-[#0754A6] flex items-center justify-center mb-0.5 shadow-2xs">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight">{lang === 'ta' ? 'வழிகாட்டி' : 'Directions'}</span>
        </a>
      </div>
    </nav>
  );
}
