export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  durationMinutes: number;
  type: 'offline' | 'virtual';
  service: string;
  message?: string;
  createdAt: Date;
}

const bookings = new Map<string, Booking>();

export const SLOT_DURATION_MINUTES = 30;

function generateId(): string {
  return `bk_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Generates all 30-minute consultation slots.
 * Starts at 11:00 AM, Ends at 6:00 PM.
 * Morning: 11:00 AM to 01:00 PM (11:00, 11:30, 12:00, 12:30)
 * Break: 01:00 PM to 03:00 PM (13:00 to 15:00 is Lunch/Clinical Break)
 * Evening: 03:00 PM to 06:00 PM (15:00, 15:30, 16:00, 16:30, 17:00, 17:30)
 */
export function getAllTimeSlots(): string[] {
  const slots: string[] = [];

  // Morning Session: 11:00 AM to 01:00 PM (30 min slots)
  for (let hour = 11; hour < 13; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }

  // Break from 13:00 to 15:00 (1:00 PM - 3:00 PM) - No slots generated

  // Afternoon / Evening Session: 03:00 PM to 06:00 PM (30 min slots)
  for (let hour = 15; hour < 18; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }

  return slots;
}

export function addBooking(
  booking: Omit<Booking, 'id' | 'createdAt' | 'durationMinutes'> & { durationMinutes?: number }
): Booking {
  const newBooking: Booking = {
    ...booking,
    durationMinutes: 30, // 30-minute consultation standard
    id: generateId(),
    createdAt: new Date(),
  };
  bookings.set(newBooking.id, newBooking);
  return newBooking;
}

export function getBookings(): Booking[] {
  return Array.from(bookings.values());
}

export function getBookedSlots(date: string): string[] {
  return Array.from(bookings.values())
    .filter((b) => b.date === date)
    .map((b) => b.time);
}

export function isSlotAvailable(date: string, time: string): boolean {
  const slots = getAllTimeSlots();
  if (!slots.includes(time)) return false;

  return !Array.from(bookings.values()).some(
    (b) => b.date === date && b.time === time
  );
}
