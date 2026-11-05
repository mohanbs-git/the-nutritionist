'use client';

import { useState } from 'react';
import { getFaqs } from '@/lib/content';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = getFaqs();

  return (
    <section id="faq" className="scroll-mt-20 border-b border-brand-line bg-brand-paper pt-10 pb-16 lg:pt-12 lg:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-[#1B4332] text-[11px] font-semibold tracking-wider uppercase mb-3">
            Patient Questions & Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 leading-tight">
            Consultation Details & Clinical Queries
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Everything you need to know about preparing for your session, clinical follow-ups, and dietary methodology.
          </p>
        </div>

        {/* Dynamic FAQ Accordion from siteContent.json */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-sm transition-all hover:border-gray-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-lg font-bold text-gray-950 focus:outline-none hover:text-[#1B4332] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700 flex-shrink-0 font-sans">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
