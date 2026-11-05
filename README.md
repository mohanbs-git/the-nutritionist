# Thanya - The Nutritionist 🥗

A classy, modern, and data-driven web application for **Dt. Thanya (Clinical Nutritionist & Lifestyle Coach)**.

Built with **Next.js 16 (App Router)**, **Tailwind CSS**, **TypeScript**, and **Nodemailer**.

---

## 🎛️ Easy Content Management via JSON

All frequently changed content (services, case studies, social channels, clinic hours, FAQs, qualifications) is centrally controlled by a single master JSON file:

👉 **`src/data/siteContent.json`**

*(Note: The Hero section and top Announcement Bar remain styled in their dedicated components as requested).*

### What you can edit in `src/data/siteContent.json`:

1. **Social Media Channels (`socials`)**:
   Add or update Instagram, YouTube, LinkedIn, or WhatsApp links:
   ```json
   {
     "name": "Instagram",
     "handle": "@thanyanutrition",
     "url": "https://instagram.com/thanyanutrition"
   }
   ```
   *(These automatically appear in the footer and contact sections).*

2. **Case Studies / Patient Stories (`caseStudies`)**:
   Add a new patient transformation anytime:
   ```json
   {
     "id": "case-05",
     "patient": "Sneha K., 31",
     "location": "Chennai",
     "profession": "Architect",
     "diagnosis": "Postpartum weight retention & low ferritin",
     "quote": "Within 3 months, my energy returned and my iron levels normalized...",
     "timeline": "3 Months Protocol",
     "outcome": "Energy restored & 8 kg healthy postpartum loss",
     "verified": true
   }
   ```
   *(Instantly renders a new case study card on the homepage).*

3. **Clinical Programs (`programs`)**:
   Add new programs or modify existing ones:
   ```json
   {
     "id": "thyroid-care",
     "code": "PROGRAM 07",
     "title": "Hypothyroidism & Hashimoto's Protocol",
     "subtitle": "Targeted selenium, zinc, and tyrosine rich nutrition...",
     "image": "https://images.unsplash.com/photo-...",
     "details": "Anti-inflammatory elimination • T3 conversion optimization",
     "format": "Virtual & In-Clinic",
     "isActive": true
   }
   ```
   *(Automatically adds a card to the Services section AND populates the appointment booking dropdown).*

4. **FAQs (`faqs`)**:
   Add or edit questions that clients frequently ask.

5. **Clinic & Contact Information (`clinic` & `contact`)**:
   Update your phone, email, clinic address, or working hours (e.g., changing from `9:00 AM – 6:00 PM` will automatically update the booking calendar and confirmation emails).

---

## 🚀 Running the Project

```bash
# 1. Run local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
