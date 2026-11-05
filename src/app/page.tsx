import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutTeaser from '@/components/AboutTeaser';
import Services from '@/components/Services';
import WhyNutrition from '@/components/WhyNutrition';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutTeaser />
      <Services />
      <WhyNutrition />
      <Testimonials />
      <FaqSection />
      <Suspense fallback={<div className="py-20 text-center text-[#1B4332]">Loading booking system...</div>}>
        <BookingForm />
      </Suspense>
      <Footer />
    </main>
  );
}
