'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteContent } from '@/lib/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Thanya' },
    { href: '/#services', label: 'Programs' },
    { href: '/#philosophy', label: 'Approach' },
    { href: '/#testimonials', label: 'Results' },
    { href: '/#faq', label: 'FAQs' },
  ];

  return (
    <>
      <div className="bg-brand-ink px-4 py-2 text-center text-[11px] text-white/90 sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-citrus" />
          <span>Science-backed guidance. Food that feels like home.</span>
          <a href={`tel:${siteContent.contact.phone}`} className="hidden font-medium text-brand-citrus hover:underline sm:inline">
            {siteContent.contact.displayPhone}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-brand-line/80 bg-brand-paper/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-[76px] items-center justify-between gap-5">
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-brand-forest font-serif text-sm text-brand-citrus">
                TN
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="truncate font-serif text-lg leading-tight text-brand-ink transition-colors group-hover:text-brand-forest sm:text-xl">
                  Thanya Natashekar
                </span>
                <span className="mt-0.5 text-[10px] text-brand-muted">
                  Clinical nutritionist
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-7 text-[13px] font-medium text-brand-muted xl:flex">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition-colors hover:text-brand-forest">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center xl:flex">
              <Link
                href="/#book-appointment"
                className="inline-flex items-center gap-3 rounded-[4px] bg-brand-citrus px-5 py-3 text-xs font-semibold text-brand-ink transition-colors hover:bg-[#cddd60]"
              >
                Book a consultation <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <Link
                href="/#book-appointment"
                className="rounded-[4px] bg-brand-citrus px-3.5 py-2.5 text-xs font-semibold text-brand-ink transition-colors hover:bg-[#cddd60]"
              >
                Book
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-forest"
                aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>

          {isOpen && (
            <div id="mobile-navigation" className="border-t border-brand-line py-3 xl:hidden">
              <nav className="flex flex-col divide-y divide-brand-line/70">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm text-brand-ink transition-colors hover:text-brand-forest"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/#book-appointment"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 rounded-[4px] bg-brand-citrus px-4 py-3 text-center text-sm font-semibold text-brand-ink"
                >
                  Schedule an appointment
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
