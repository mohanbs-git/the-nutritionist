'use client';

import { useState, useEffect } from 'react';
import { siteContent, getActivePrograms } from '@/lib/content';

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function BookingForm() {
  const activePrograms = getActivePrograms();
  const defaultProgram = activePrograms[0]?.title || 'Clinical Consultation';
  const serviceOptions = [
    ...activePrograms.map((program) => ({ value: program.title, label: program.title })),
    { value: 'Comprehensive General Consultation', label: 'Comprehensive General Consultation' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultProgram,
    type: 'virtual' as 'virtual' | 'offline',
    date: '',
    time: '',
    message: '',
  });

  const [todayStr, setTodayStr] = useState('');
  const [maxDateStr, setMaxDateStr] = useState('');
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const selectedServiceIndex = Math.max(
    0,
    serviceOptions.findIndex((option) => option.value === formData.service),
  );

  // Default date and bounds on mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const max = new Date();
    max.setDate(max.getDate() + 60);
    setTodayStr(today);
    setMaxDateStr(max.toISOString().split('T')[0]);
    setFormData((prev) => ({ ...prev, date: today }));
  }, []);

  // Listen to select-service custom event from Services component
  useEffect(() => {
    const handleServiceSelect = (e: any) => {
      if (e.detail) {
        setFormData((prev) => ({ ...prev, service: e.detail }));
      }
    };
    window.addEventListener('select-service', handleServiceSelect);
    return () => window.removeEventListener('select-service', handleServiceSelect);
  }, []);

  // Fetch slots whenever date changes
  useEffect(() => {
    if (!formData.date) return;

    let isMounted = true;
    setLoadingSlots(true);
    setErrorMessage('');

    fetch(`/api/availability?date=${formData.date}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          if (data && data.slots) {
            setSlots(data.slots);
            if (formData.time) {
              const currentSlot = data.slots.find((s: TimeSlot) => s.time === formData.time);
              if (!currentSlot || !currentSlot.available) {
                setFormData((prev) => ({ ...prev, time: '' }));
              }
            }
          } else {
            setSlots([]);
          }
        }
      })
      .catch((err) => {
        console.error('Error fetching availability:', err);
        if (isMounted) setSlots([]);
      })
      .finally(() => {
        if (isMounted) setLoadingSlots(false);
      });

    return () => {
      isMounted = false;
    };
  }, [formData.date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.time) {
      setErrorMessage('Please select a preferred appointment time.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || 'Failed to complete booking. Please try a different slot.');
        setSubmitting(false);
        return;
      }

      setSuccessBooking(result.booking);
      // Refresh slots
      if (formData.date) {
        fetch(`/api/availability?date=${formData.date}`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.slots) setSlots(data.slots);
          });
      }
    } catch (err) {
      console.error('Booking submission error:', err);
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book-appointment" className="scroll-mt-20 border-b border-brand-line bg-brand-cloud pt-10 pb-16 lg:pt-12 lg:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-[#1B4332] text-[11px] font-semibold tracking-wider uppercase mb-3">
            Patient Scheduling
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
            Schedule Your Consultation
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Choose between an in-person clinical consultation at our Indiranagar practice or a private virtual video consultation worldwide.
          </p>
        </div>

        {/* Centered Main Booking Form Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-lg">
          
          {successBooking ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#1B4332] text-2xl font-bold flex items-center justify-center mx-auto border border-emerald-200">
                ✓
              </div>
              
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-[#B48A3C] font-bold">
                  Booking Confirmed
                </span>
                <h3 className="font-serif text-3xl font-bold text-gray-950">
                  We look forward to meeting you, {successBooking.name}.
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  A clinical confirmation and preparatory instructions have been dispatched to <strong className="text-gray-950">{successBooking.email}</strong>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 max-w-lg mx-auto text-left space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-200 pb-2.5">
                  <span className="text-gray-500">Reference Code:</span>
                  <span className="font-mono font-semibold text-gray-900">{successBooking.id}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2.5">
                  <span className="text-gray-500">Consultation Mode:</span>
                  <span className="font-semibold text-gray-900">
                    {successBooking.type === 'virtual' ? 'Virtual Video Session (Google Meet)' : `In-Person Clinic (${siteContent.clinic.area})`}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2.5">
                  <span className="text-gray-500">Date & Time:</span>
                  <span className="font-semibold text-gray-900">{successBooking.date} at {successBooking.time} IST</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-500">Focus Area:</span>
                  <span className="font-semibold text-gray-900">{successBooking.service}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSuccessBooking(null);
                    setFormData((prev) => ({ ...prev, time: '', message: '' }));
                  }}
                  className="px-8 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#1B4332] text-white hover:bg-[#0D281E] transition-colors"
                >
                  Schedule Another Session
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Mode Switcher */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-gray-900 mb-3">
                  01. Consultation Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'virtual' })}
                    className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                      formData.type === 'virtual'
                        ? 'border-[#1B4332] bg-emerald-50/50 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-gray-950">
                        Virtual Video Consult
                      </span>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${formData.type === 'virtual' ? 'border-[#1B4332]' : 'border-gray-300'}`}>
                        {formData.type === 'virtual' && <span className="w-2 h-2 rounded-full bg-[#1B4332]" />}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Google Meet / Zoom video session with Dt. Thanya. Recommended for clients outside Bengaluru and international patients.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'offline' })}
                    className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                      formData.type === 'offline'
                        ? 'border-[#1B4332] bg-emerald-50/50 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-gray-950">
                        In-Person Clinic Visit
                      </span>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${formData.type === 'offline' ? 'border-[#1B4332]' : 'border-gray-300'}`}>
                        {formData.type === 'offline' && <span className="w-2 h-2 rounded-full bg-[#1B4332]" />}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      At {siteContent.clinic.name}, Bengaluru. Includes full Bioelectrical Impedance Body Composition Analysis.
                    </p>
                  </button>
                </div>
              </div>

              {/* Step 2: Program Focus */}
              <div>
                <label htmlFor="service" className="block text-xs uppercase tracking-[0.2em] font-bold text-gray-900 mb-2">
                  02. Select Clinical Program
                </label>
                <div
                  className="relative"
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setIsServiceMenuOpen(false);
                    }
                  }}
                >
                  <button
                    id="service"
                    type="button"
                    role="combobox"
                    aria-label="Select clinical program"
                    aria-haspopup="listbox"
                    aria-expanded={isServiceMenuOpen}
                    aria-controls="service-options"
                    aria-activedescendant={isServiceMenuOpen ? `service-option-${activeServiceIndex}` : undefined}
                    onClick={() => {
                      setActiveServiceIndex(selectedServiceIndex);
                      setIsServiceMenuOpen((isOpen) => !isOpen);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        setIsServiceMenuOpen(true);
                        setActiveServiceIndex((index) =>
                          isServiceMenuOpen ? Math.min(index + 1, serviceOptions.length - 1) : selectedServiceIndex,
                        );
                      } else if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        setIsServiceMenuOpen(true);
                        setActiveServiceIndex((index) =>
                          isServiceMenuOpen ? Math.max(index - 1, 0) : selectedServiceIndex,
                        );
                      } else if (event.key === 'Home' && isServiceMenuOpen) {
                        event.preventDefault();
                        setActiveServiceIndex(0);
                      } else if (event.key === 'End' && isServiceMenuOpen) {
                        event.preventDefault();
                        setActiveServiceIndex(serviceOptions.length - 1);
                      } else if ((event.key === 'Enter' || event.key === ' ') && isServiceMenuOpen) {
                        event.preventDefault();
                        setFormData((previous) => ({
                          ...previous,
                          service: serviceOptions[activeServiceIndex].value,
                        }));
                        setIsServiceMenuOpen(false);
                      } else if (event.key === 'Escape') {
                        setIsServiceMenuOpen(false);
                      }
                    }}
                    className="flex min-h-12 w-full items-center justify-between gap-4 rounded-[4px] border border-brand-line bg-brand-cloud px-4 text-left text-sm font-medium text-brand-ink transition-colors hover:border-brand-leaf focus-visible:border-brand-forest focus-visible:bg-brand-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-forest"
                  >
                    <span>{serviceOptions[selectedServiceIndex].label}</span>
                    <svg
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 text-brand-forest transition-transform ${isServiceMenuOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {isServiceMenuOpen && (
                    <div
                      id="service-options"
                      role="listbox"
                      aria-label="Clinical programs"
                      className="absolute inset-x-0 top-full z-30 mt-1 max-h-64 overflow-y-auto rounded-[4px] border border-brand-line bg-brand-paper p-1 shadow-xl shadow-brand-ink/10"
                    >
                      {serviceOptions.map((option, index) => {
                        const isSelected = option.value === formData.service;
                        const isActive = index === activeServiceIndex;

                        return (
                          <button
                            key={option.value}
                            id={`service-option-${index}`}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            tabIndex={-1}
                            onMouseDown={(event) => event.preventDefault()}
                            onMouseEnter={() => setActiveServiceIndex(index)}
                            onClick={() => {
                              setFormData((previous) => ({ ...previous, service: option.value }));
                              setIsServiceMenuOpen(false);
                            }}
                            className={`flex min-h-11 w-full items-center justify-between gap-3 px-3 text-left text-sm transition-colors ${
                              isActive
                                ? 'bg-brand-citrus text-brand-ink'
                                : 'text-brand-muted hover:bg-brand-cloud hover:text-brand-ink'
                            }`}
                          >
                            <span>{option.label}</span>
                            {isSelected && <span className="text-brand-forest" aria-hidden="true">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Step 3: Date & Time Slots (No break mention) */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-[0.2em] font-bold text-gray-900 mb-2">
                    03. Consultation Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={todayStr}
                    max={maxDateStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full sm:w-72 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-[#1B4332] focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900">
                      04. Available Time Slots ({formData.date || 'Selected Date'})
                    </label>
                    {loadingSlots ? (
                      <span className="text-xs text-[#1B4332] animate-pulse">
                        Checking schedule...
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-gray-500">
                        Choose a time that works for you
                      </span>
                    )}
                  </div>

                  {slots.length === 0 && !loadingSlots ? (
                    <p className="text-xs sm:text-sm text-gray-500 italic p-4 bg-gray-50 rounded-xl border border-gray-200">
                      No remaining appointment slots on this date. Please select tomorrow or an upcoming date.
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
                      {slots.map((slot) => {
                        const isSelected = formData.time === slot.time;
                        return (
                          <button
                            key={slot.time}
                            type="button"
                            disabled={!slot.available}
                            onClick={() => setFormData({ ...formData, time: slot.time })}
                            className={`py-3 px-3 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                              !slot.available
                                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through'
                                : isSelected
                                ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-sm font-bold'
                                : 'bg-white text-gray-900 border-gray-200 hover:border-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {slot.time}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Step 4: Patient Details */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900">
                  05. Patient Information
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Radhika Menon"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#1B4332] focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address (For Video Link & Plan) *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#1B4332] focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#1B4332] focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                    Primary Health Symptoms & Recent Blood Test Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g., Irregular cycles for 1 year, recent blood report indicates elevated fasting insulin..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#1B4332] focus:bg-white resize-none"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm">
                  {errorMessage}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-full font-semibold uppercase tracking-wider text-xs sm:text-sm bg-[#1B4332] text-white hover:bg-[#0D281E] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Confirming appointment...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm appointment</span>
                      <span>→</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-3">
                  Appointments are held in strict confidence.
                </p>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
