'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import siteConfig from '@/config/siteConfig';
import { telUrl, whatsappUrl, formatPhone } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Bikes', href: '/bikes' },
  { label: 'Electric Vehicles', href: '/electric' },
  { label: 'Spare Parts', href: '/spare-parts' },
  { label: 'Service', href: '/service' },
  { label: 'About Us', href: '/about' },
  { label: 'Offers', href: '/offers' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        isScrolled
          ? 'shadow-md border-b border-gray-100 py-2'
          : 'border-b border-gray-100 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Logo />

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors duration-150 relative ${
                    isActive
                      ? 'text-[#0754A6] font-extrabold'
                      : 'text-[#172033] hover:text-[#E5242A]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0754A6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons: Both Phones & WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Primary Phone */}
            <a
              href={telUrl(siteConfig.primaryPhone)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#082D59] hover:text-[#0754A6] bg-[#F4F7FC] hover:bg-[#EBF3FC] transition-colors border border-gray-200"
              aria-label="Call primary number"
            >
              <Image src="/images/call-icon.png" alt="Call" width={16} height={16} className="w-4 h-4 rounded-full object-contain shrink-0" />
              <span>{formatPhone(siteConfig.primaryPhone)}</span>
            </a>

            {/* Secondary Phone (Desktop only) */}
            <a
              href={telUrl(siteConfig.secondaryPhone)}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#082D59] hover:text-[#0754A6] bg-[#F4F7FC] hover:bg-[#EBF3FC] transition-colors border border-gray-200"
              aria-label="Call secondary number"
            >
              <Image src="/images/call-icon.png" alt="Call" width={16} height={16} className="w-4 h-4 rounded-full object-contain shrink-0" />
              <span>{formatPhone(siteConfig.secondaryPhone)}</span>
            </a>

            {/* WhatsApp Button (Official: 9626559167) */}
            <a
              href={whatsappUrl("Hello Mithra Motors, I'd like to enquire about vehicles and service.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-95 shadow-xs shadow-green-600/30 transition-all duration-150"
              aria-label="Chat on WhatsApp"
            >
              <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 rounded-full object-contain shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions: WhatsApp Icon + Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={whatsappUrl("Hello Mithra Motors, I would like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-xs"
              aria-label="WhatsApp"
            >
              <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} className="w-full h-full object-contain" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#082D59] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 mb-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-[#EBF3FC] text-[#0754A6]'
                      : 'text-[#172033] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="space-y-2 pt-3 border-t border-gray-100">
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-1">
              Direct Contact
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={telUrl(siteConfig.primaryPhone)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#082D59] bg-[#F4F7FC] border border-gray-200"
              >
                <Image src="/images/call-icon.png" alt="Call" width={16} height={16} className="w-4 h-4 rounded-full object-contain shrink-0" />
                <span>{formatPhone(siteConfig.primaryPhone)}</span>
              </a>

              <a
                href={telUrl(siteConfig.secondaryPhone)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#082D59] bg-[#F4F7FC] border border-gray-200"
              >
                <Image src="/images/call-icon.png" alt="Call" width={16} height={16} className="w-4 h-4 rounded-full object-contain shrink-0" />
                <span>{formatPhone(siteConfig.secondaryPhone)}</span>
              </a>
            </div>

            <a
              href={whatsappUrl("Hello Mithra Motors, I'd like to enquire about two-wheeler sales and service.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#16A34A]"
            >
              <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5 rounded-full object-contain shrink-0" />
              <span>WhatsApp: 96265 59167</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
