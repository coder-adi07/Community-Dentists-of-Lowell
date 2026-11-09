import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PatientExperience from '@/components/home/PatientExperience';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PatientInfoPreview from '@/components/home/PatientInfoPreview';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import ContactPreview from '@/components/home/ContactPreview';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with 3D Tooth & CTAs */}
      <HeroSection />

      {/* 2. Trust / Introduction Section */}
      <TrustSection />

      {/* 3. About Our Practice & Dr. Mary Scannell */}
      <AboutPreview />

      {/* 4. Dental Services (Cleanings & Restorations) */}
      <ServicesOverview />

      {/* 5. Why Choose Our Practice (6 Pillars) */}
      <WhyChooseUs />

      {/* 6. Patient Experience (Comfort & Anxiety Relief) */}
      <PatientExperience />

      {/* 7. Actual Verified Testimonials */}
      <TestimonialsSection />

      {/* 8. Patient Information (Payments & Insurance Notice) */}
      <PatientInfoPreview />

      {/* 9. Appointment CTA Full Width */}
      <AppointmentCTA />

      {/* 10. Contact Section & Google Maps */}
      <ContactPreview />
    </>
  );
}

