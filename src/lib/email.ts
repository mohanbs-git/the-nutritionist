import nodemailer from 'nodemailer';
import { siteContent } from '@/lib/content';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface BookingEmailData {
  name: string;
  email: string;
  date: string;
  time: string;
  type: string;
  service: string;
}

export async function sendBookingConfirmation(
  booking: BookingEmailData
): Promise<unknown> {
  const formattedDate = new Date(booking.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Appointment Confirmation - Thanya The Nutritionist</title>
    </head>
    <body style="margin:0;padding:0;background-color:#FAF7F2;font-family:'Georgia',serif;color:#242A27;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF7F2;padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E8E1D5;box-shadow:0 8px 30px rgba(18,40,31,0.06);">
              <!-- Header -->
              <tr>
                <td style="background-color:#19382C;padding:44px 40px;text-align:center;">
                  <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#C59B27;font-weight:600;margin-bottom:8px;">
                    Clinical & Lifestyle Nutrition
                  </div>
                  <h1 style="color:#FFFFFF;margin:0;font-size:30px;font-weight:700;letter-spacing:-0.5px;">
                    Thanya — The Nutritionist
                  </h1>
                  <p style="color:#D8E6DB;margin:8px 0 0;font-size:14px;font-family:sans-serif;">
                    Personalized Diet Therapy • Sustainable Wellness
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px;font-family:sans-serif;">
                  <div style="display:inline-block;background-color:#EAF1EB;color:#19382C;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:6px 14px;border-radius:20px;margin-bottom:20px;">
                    ✓ Booking Confirmed
                  </div>
                  
                  <h2 style="font-family:'Georgia',serif;color:#19382C;margin:0 0 12px;font-size:24px;font-weight:600;">
                    Dear ${booking.name},
                  </h2>
                  <p style="color:#555E59;font-size:15px;line-height:1.7;margin:0 0 28px;">
                    Your 1-on-1 consultation with <strong>Dt. Thanya</strong> has been scheduled. We look forward to evaluating your metabolic profile and crafting your personalized nutritional roadmap.
                  </p>

                  <!-- Details Card -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF7F2;border-radius:12px;border:1px solid #E8E1D5;margin-bottom:28px;">
                    <tr>
                      <td style="padding:24px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding:10px 0;color:#6C7570;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;width:130px;">
                              📅 Date
                            </td>
                            <td style="padding:10px 0;color:#19382C;font-size:15px;font-weight:600;">
                              ${formattedDate}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0;color:#6C7570;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">
                              ⏰ Time Slot
                            </td>
                            <td style="padding:10px 0;color:#19382C;font-size:15px;font-weight:600;">
                              ${booking.time} IST
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0;color:#6C7570;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">
                              🌿 Consultation
                            </td>
                            <td style="padding:10px 0;color:#19382C;font-size:15px;font-weight:600;text-transform:capitalize;">
                              ${booking.type === 'virtual' ? 'Virtual (Online Video Call)' : 'In-Person (Clinic Visit)'}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0;color:#6C7570;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">
                              🩺 Program Focus
                            </td>
                            <td style="padding:10px 0;color:#19382C;font-size:15px;font-weight:600;">
                              ${booking.service}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  ${
                    booking.type === 'virtual'
                      ? `<div style="background-color:#F4EFE6;border-left:4px solid #C59B27;padding:16px 20px;border-radius:8px;margin-bottom:28px;">
                          <div style="font-weight:700;color:#19382C;font-size:14px;margin-bottom:4px;">Virtual Consultation Guide</div>
                          <div style="color:#555E59;font-size:13px;line-height:1.6;">
                            Your private Google Meet / Zoom link will be sent to this email address before your appointment. Please have your recent blood reports (CBC, Thyroid, Lipid profile, etc.) handy if available.
                          </div>
                        </div>`
                      : `<div style="background-color:#EAF1EB;border-left:4px solid #2D6A4F;padding:16px 20px;border-radius:8px;margin-bottom:28px;">
                          <div style="font-weight:700;color:#19382C;font-size:14px;margin-bottom:4px;">Clinic Visit Location</div>
                          <div style="color:#555E59;font-size:13px;line-height:1.6;">
                            ${siteContent.clinic.name}, ${siteContent.clinic.suite}, ${siteContent.clinic.area}. Please arrive 10 minutes prior to complete your initial body composition analysis.
                          </div>
                        </div>`
                  }

                  <p style="color:#6C7570;font-size:13px;line-height:1.6;margin:0;">
                    Need to reschedule? Kindly reply to this email or call our desk at ${siteContent.contact.displayPhone} at least 24 hours in advance.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#FAF7F2;border-top:1px solid #E8E1D5;padding:30px 40px;text-align:center;font-family:sans-serif;">
                  <p style="margin:0 0 6px;color:#19382C;font-weight:600;font-size:14px;">
                    Dt. Thanya • Clinical Nutritionist
                  </p>
                  <p style="margin:0 0 16px;color:#8A928D;font-size:12px;">
                    M.Sc. Clinical Nutrition & Dietetics • Certified Diabetes Educator • IDA Member
                  </p>
                  <p style="margin:0;color:#A4ACA7;font-size:11px;">
                    © 2026 Thanya - The Nutritionist. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn(
      'EMAIL_USER or EMAIL_PASS not configured. Skipping actual email dispatch. Booking recorded successfully.'
    );
    return { skipped: true, reason: 'Credentials not configured' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Thanya - The Nutritionist" <${process.env.EMAIL_USER}>`,
      to: booking.email,
      subject: `Booking Confirmed: Consultation with Dt. Thanya on ${formattedDate}`,
      html: htmlBody,
    });
    return info;
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return null;
  }
}
