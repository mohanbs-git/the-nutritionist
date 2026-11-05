import Link from 'next/link';
import { siteContent, getActivePrograms, getSocials } from '@/lib/content';

export default function Footer() {
  const programs = getActivePrograms();
  const socials = getSocials();

  return (
    <footer className="bg-[#0D281E] text-gray-200 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                Thanya
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#B48A3C] font-semibold mt-1">
                Clinical Nutritionist
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Clinical diet therapy and metabolic rehabilitation led by Dt. Thanya (M.Sc., CDE, RD). Specializing in evidence-based management of PCOS, insulin resistance, thyroid health, and sustainable fat loss.
            </p>

            {/* Social Media Links from siteContent.json */}
            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-wider text-[#B48A3C] font-semibold mb-2">
                Connect with Dt. Thanya
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-200 hover:text-white bg-[#163B2F] hover:bg-[#1B4332] px-3 py-1.5 rounded-full border border-emerald-900/60 transition-colors flex items-center gap-1.5"
                  >
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] text-gray-400 space-y-1">
              <div>Member, Indian Dietetic Association (IDA)</div>
              <div>Certified Diabetes Educator (CDE)</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#B48A3C] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-white font-medium">
                  About Dt. Thanya
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Clinical Programs
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="hover:text-white transition-colors">
                  Metabolic Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Consultation FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Dynamic Programs List from siteContent.json */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#B48A3C] font-semibold">
              Programs
            </div>
            <ul className="space-y-2 text-xs text-gray-400">
              {programs.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic & Location from siteContent.json */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#B48A3C] font-semibold">
              Clinic & Appointments
            </div>
            <div className="space-y-2 text-xs text-gray-400">
              <p>
                {siteContent.clinic.name} <br />
                {siteContent.clinic.area}
              </p>
              <p className="pt-1">
                {siteContent.clinic.timings.weekdays} <br />
                {siteContent.clinic.timings.sunday}
              </p>
              <p className="pt-1 text-[#D4A373] font-medium">
                Desk: {siteContent.contact.displayPhone} <br />
                {siteContent.contact.email}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Thanya - Clinical Nutritionist. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Patient Privacy</span>
            <span className="hover:text-white cursor-pointer">Clinical Ethics</span>
            <span className="hover:text-white cursor-pointer">Medical Disclaimer</span>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-6 text-[11px] text-gray-500 text-center leading-relaxed max-w-4xl mx-auto">
          Medical Disclaimer: Clinical nutrition plans and therapeutic consultations provided by Dt. Thanya are designed to support lifestyle health and metabolic function. They are not intended to replace prescription medical treatment from your primary healthcare physician.
        </div>
      </div>
    </footer>
  );
}
