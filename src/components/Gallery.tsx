'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import siteConfig, { GalleryImage } from '@/config/siteConfig';
import { useReducedMotion } from '@/hooks/useMotion';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion() || !siteConfig.animationsEnabled;

  const publishedImages = siteConfig.gallery.filter((img) => img.isPublished);

  // Close lightbox on Escape key, navigate with Arrow keys
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % publishedImages.length : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + publishedImages.length) % publishedImages.length
            : null
        );
      }
    },
    [lightboxIndex, publishedImages.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-navy-950/90 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Tour</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Showroom Gallery
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              A look into our multi-brand facility, vehicle display floor, and service bay in Karapattu.
            </p>
          </AnimatedSection>
        </div>

        {publishedImages.length > 0 ? (
          /* Grid of published photos */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {publishedImages.map((image, idx) => (
              <AnimatedSection key={image.id} direction="up" delay={0.05 * idx}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-square w-full rounded-2xl overflow-hidden bg-navy-900 border border-white/5 hover:border-electric-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 transition-all duration-300"
                  aria-label={`View full image: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-xs text-white font-medium truncate">{image.alt}</span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          /* Honest placeholder state when genuine photos are pending owner supply */
          <AnimatedSection direction="up" delay={0.1}>
            <div className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-10 bg-navy-900/40 border border-dashed border-white/10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-electric-500/10 text-electric-400 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Showroom Photos Being Prepared
              </h3>
              <p className="mt-2 text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Genuine photography of our Karapattu showroom exterior, customer lounge, and service
                workshop will be uploaded here shortly.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-gray-400">
                <span className="px-3 py-1 rounded-full bg-navy-950 border border-white/5">
                  Exterior &amp; Entrance
                </span>
                <span className="px-3 py-1 rounded-full bg-navy-950 border border-white/5">
                  Vehicle Floor
                </span>
                <span className="px-3 py-1 rounded-full bg-navy-950 border border-white/5">
                  Service Bays
                </span>
                <span className="px-3 py-1 rounded-full bg-navy-950 border border-white/5">
                  Customer Delivery
                </span>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && publishedImages[lightboxIndex] && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-electric-400 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation: Prev */}
            {publishedImages.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + publishedImages.length) % publishedImages.length
                  );
                }}
                className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-electric-400 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Main Lightbox Image */}
            <div
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[75vh]">
                <Image
                  src={publishedImages[lightboxIndex].src}
                  alt={publishedImages[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-200 font-medium">
                  {publishedImages[lightboxIndex].alt}
                </p>
                <span className="text-xs text-gray-400 font-mono mt-1 block">
                  {lightboxIndex + 1} of {publishedImages.length}
                </span>
              </div>
            </div>

            {/* Navigation: Next */}
            {publishedImages.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % publishedImages.length);
                }}
                className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-electric-400 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
