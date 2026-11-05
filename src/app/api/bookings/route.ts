import { NextRequest, NextResponse } from 'next/server';
import { addBooking, getBookings, isSlotAvailable } from '@/lib/bookingStore';
import { sendBookingConfirmation } from '@/lib/email';

export async function GET() {
  const bookings = getBookings();
  return NextResponse.json({ bookings });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, type, service, message } = body;

    // Validate required fields
    const requiredFields = { name, email, phone, date, time, type, service };
    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Check slot availability
    if (!isSlotAvailable(date, time)) {
      return NextResponse.json(
        {
          error:
            'This time slot is no longer available. Please choose a different time.',
        },
        { status: 409 }
      );
    }

    // Create the booking
    const booking = addBooking({
      name,
      email,
      phone,
      date,
      time,
      type,
      service,
      message,
    });

    // Send confirmation email (non-blocking)
    sendBookingConfirmation({ name, email, date, time, type, service }).catch(
      (err) => console.error('Email sending failed:', err)
    );

    return NextResponse.json({ booking }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
