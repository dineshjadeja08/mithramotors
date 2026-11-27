'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import siteConfig from '@/config/siteConfig';
import { formatPhone } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useMotion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Where is Mithra Motors located?',
    answer:
      'Mithra Motors is located on the Uthangarai to Tirupattur Main Road, Karapattu, Near Barath Pump, Tamil Nadu – 635207.',
  },
  {
    question: 'How can I check available models?',
    answer:
      'You can contact us via WhatsApp or call our showroom directly. Our team will share current in-stock models, color variants, and availability.',
  },
  {
    question: 'How can I enquire about a test ride?',
    answer:
      'Reach out to our team on WhatsApp or phone to check test ride availability for your preferred motorcycle or scooter model.',
  },
  {
    question: 'How can I contact the service team?',
    answer: `You can reach our service team by calling ${formatPhone(
      siteConfig.primaryPhone
    )} or ${formatPhone(
      siteConfig.secondaryPhone
    )}, or by sending a WhatsApp message to enquire about servicing, maintenance, and spare parts.`,
  },
  {
    question: 'How do I get directions to the showroom?',
    answer:
      'Use the "Get Directions" buttons across our website to open our confirmed Karapattu location on Google Maps, or search for "Mithra Motors Karapattu".',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion() || !siteConfig.animationsEnabled;

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-navy-950/70 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions &amp; Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Clear answers regarding our location, models, test rides, and service enquiries.
            </p>
          </AnimatedSection>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <AnimatedSection key={idx} direction="up" delay={0.05 * idx}>
                <div className="rounded-2xl bg-navy-900/60 border border-white/5 hover:border-white/10 overflow-hidden transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-medium text-base sm:text-lg text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-navy-950 flex items-center justify-center shrink-0 text-electric-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-electric-500 text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-gray-300 border-t border-white/5 pt-4 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
