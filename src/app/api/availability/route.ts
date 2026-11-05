import { NextRequest, NextResponse } from 'next/server';
import { getAllTimeSlots, getBookedSlots, SLOT_DURATION_MINUTES } from '@/lib/bookingStore';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get('date');

  const today = new Date();
  const date = dateParam || today.toISOString().split('T')[0];

  const allSlots = getAllTimeSlots();
  const bookedSlots = getBookedSlots(date);

  const isToday = date === today.toISOString().split('T')[0];
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();
  const currentTotalMinutes = currentHour * 60 + currentMinute;

  const slots = allSlots
    .filter((time) => {
      if (!isToday) return true;
      const [hour, minute] = time.split(':').map(Number);
      const slotMinutes = hour * 60 + minute;
      // Allow only future slots (must start after current time)
      return slotMinutes > currentTotalMinutes;
    })
    .map((time) => ({
      time,
      available: !bookedSlots.includes(time),
    }));

  return NextResponse.json({
    date,
    slotDurationMinutes: SLOT_DURATION_MINUTES,
    slots,
  });
}
