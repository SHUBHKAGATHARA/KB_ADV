import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ExperienceStats from '@/components/ExperienceStats';
import EditorialBanner from '@/components/EditorialBanner';
import PracticeAreas from '@/components/PracticeAreas';
import DhrolPracticeSection from '@/components/DhrolPracticeSection';
import LegalExcellenceBanner from '@/components/LegalExcellenceBanner';
import WhyChooseSection from '@/components/WhyChooseSection';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import ConsultationCTA from '@/components/ConsultationCTA';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'K.B. Kagathara | Advocate in Dhrol, Gujarat',
  description:
    'Consult K.B. Kagathara, Advocate in Dhrol, Gujarat, for professional legal representation and legal consultation. Explore legal services, experience and contact information.',
  alternates: {
    canonical: 'https://kbkagathara-advocate.vercel.app',
  },
  openGraph: {
    title: 'K.B. Kagathara | Advocate in Dhrol, Gujarat',
    description:
      'Consult K.B. Kagathara, Advocate in Dhrol, Gujarat, for professional legal representation and legal consultation. Explore legal services, experience and contact information.',
    url: 'https://kbkagathara-advocate.vercel.app',
    siteName: 'Advocate K.B. Kagathara Legal Chambers',
    images: [
      {
        url: '/hero-portrait.png',
        width: 768,
        height: 1024,
        alt: 'Advocate K.B. Kagathara in Dhrol, Gujarat — Senior Legal Counsel',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K.B. Kagathara | Advocate in Dhrol, Gujarat',
    description:
      'Consult K.B. Kagathara, Advocate in Dhrol, Gujarat, for professional legal representation and legal consultation.',
    images: ['/hero-portrait.png'],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-parchment text-ink selection:bg-ink selection:text-parchment">
      {/* 00. Miranda Editorial Masthead & Navigation */}
      <Header />

      {/* 01. Dominant Hero Experience with Advocate in Dhrol H1 */}
      <Hero />

      {/* 02. Introduction & Advocate Profile with Drop-Cap 'K' and Secondary Portrait */}
      <AboutSection />

      {/* 03. Experience, Credentials & Official Bar Enrollment Stats */}
      <ExperienceStats />

      {/* 04. Editorial Display Banner: Massive 'JUSTICE' Typography */}
      <EditorialBanner />

      {/* 05. Practice Areas: 3-Column Broadsheet Grid */}
      <PracticeAreas />

      {/* 06. Dedicated Local SEO Section: Advocate in Dhrol & Court Jurisdiction */}
      <DhrolPracticeSection />

      {/* 07. Legal Excellence Banner: '22+ YEARS OF LEGAL EXPERIENCE' */}
      <LegalExcellenceBanner />

      {/* 08. Why Choose Counsel: Editorial Criteria & Principles */}
      <WhyChooseSection />

      {/* 09. Verified Client Testimonials */}
      <Testimonials />

      {/* 10. Frequently Asked Procedural Inquiries */}
      <FAQSection />

      {/* 11. Direct Consultation Call to Action */}
      <ConsultationCTA />

      {/* 12. Office Coordinates & Interactive Consultation Briefing Form */}
      <ContactSection />

      {/* 13. Broadsheet Editorial Footer & Legal Notice */}
      <Footer />
    </main>
  );
}
