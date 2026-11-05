import type { Metadata } from 'next';
import { DM_Sans, Lora } from 'next/font/google';
import './globals.css';

const display = Lora({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-display',
  display: 'swap',
});

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thanya Natashekar | Clinical Nutritionist',
  description:
    'Personalized, evidence-led nutrition and metabolic wellness with Dt. Thanya Natashekar. In-clinic care in Bengaluru and virtual consultations worldwide.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${sans.variable}`}>
      <body className="bg-brand-cloud text-brand-ink font-sans antialiased selection:bg-brand-citrus selection:text-brand-ink">
        {children}
      </body>
    </html>
  );
}
