# Community Dentists of Lowell — Website Redesign Proposal

A modern, high-standard dental healthcare web application designed and built for **Community Dentists of Lowell, Massachusetts** (Dr. Mary Scannell, DMD).

This project was built to present a website improvement proposal to the clinic owner, elevating the practice's digital identity to the level of a top-tier dental practice while strictly preserving genuine clinic content, verified credentials, and real patient reviews.

---

## 🏢 Business Details & Verified Research

- **Clinic Name:** Community Dentists of Lowell
- **Lead Dentist:** Dr. Mary E. Scannell, DMD
- **Credentials:** Boston University Henry M. Goldman School of Dental Medicine (Class of 1994) — Over 30 years of clinical dental excellence
- **Official Address:** 1484 Gorham St, Lowell, MA 01852, USA
  - *Location Discrepancy Note:* Facebook previously listed 1485 Gorham St, while the official site and state records document 1484 Gorham St. The official address is used throughout and flagged for owner confirmation.
- **Phone:** (978) 459-4949
- **Email:** communitydentistsoflowell@gmail.com
- **Original Slogan:** *"Dare to have the smile you've always wanted."*
- **Clinical Focus:** Personalized, gentle family dental care, Cleanings & Prevention, and Conservative Restorations.

---

## 🎨 Creative Design System

- **Color Palette:**
  - Deep Navy (`#102D46` / `#0A1C2C`) — Authority, stability, clinical excellence
  - Primary Blue (`#2476A8`) — Trust, modern dental aesthetic
  - Soft Sky Blue (`#EAF5FB`) — Calming, anxiety-reducing background
  - Clean White (`#FFFFFF`) & Light Neutral (`#F5F8FA`) — Hospital-grade cleanliness
  - Subtle Turquoise Accents (`#14B8A6` / `#2DD4BF`) — Wellness & precision
- **Typography:** Plus Jakarta Sans & Manrope (modern editorial healthcare typography)
- **3D Interactive Experience:** Custom procedural anatomical human molar model rendered with **Three.js** and **React Three Fiber** featuring realistic ceramic enamel translucency, dual roots, gentle floating physics, interactive cursor rotation, and WebGL fallbacks.

---

## 🧭 Page Routes & Architecture

1. **`/` (Homepage):**
   - **Hero Section:** High-end split layout combining headline, interactive 3D tooth model, and appointment CTAs.
   - **Trust / Intro Section:** *"Your Smile Is Our Priority"* with 4 clinical proof stats.
   - **About Our Practice:** Introduction to Dr. Mary Scannell and her 30+ years serving Lowell.
   - **Dental Services:** Dedicated cards for Cleanings & Prevention and Restorations.
   - **Why Choose Us:** Editorial 6-pillar breakdown (High Standards, Education & Prevention, Safety & Infection Control, Training, Positive Experience, Conservative Restorations).
   - **Patient Experience:** Reassuring anxiety-reduction section.
   - **Testimonials:** Verified original patient quotes with 4.7★ community rating.
   - **Patient Information:** Accepted payments (Cash, checks, debit, Visa, MC, Discover, Amex) & insurance notice.
   - **Appointment CTA:** Full-width high-converting banner.
   - **Contact Section:** Address, hours, interactive contact message form, and embedded Google Map.
2. **`/about`:** Full biography of Dr. Mary Scannell, Boston University dental education, practice history, and ADA/OSHA/CDC compliance.
3. **`/services`:** Comprehensive overview of all dental procedures offered.
4. **`/services/cleanings-prevention`:** In-depth guide to exams, hygiene cleanings, digital X-rays, sealants, fluoride, and FAQs.
5. **`/services/restorations`:** Detailed guide to composite fillings, caps, crowns, fixed bridges, discomfort relief, and FAQs.
6. **`/patient-information`:** Transparent payment methods, insurance guidance, and new patient visit steps.
7. **`/testimonials`:** Verified patient reviews with 5-star ratings and authentic clinic quotes.
8. **`/contact`:** Full contact hub with directions, click-to-call links, hours, and inquiry form.

---

## 💻 Tech Stack (JavaScript App Router)

- **Framework:** Next.js 14 (App Router)
- **Language:** Pure JavaScript (`.js`, `.jsx`) — *Zero TypeScript*
- **Styling:** Tailwind CSS with custom medical theme extensions
- **Animation:** Framer Motion
- **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons:** Lucide React
- **Celebratory Feedback:** Canvas Confetti

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build and launch production server
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

