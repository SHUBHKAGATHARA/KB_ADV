import type { Metadata } from 'next';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ADVOCATE_DATA } from '@/data/advocate';

export const metadata: Metadata = {
  title: 'Contact K.B. Kagathara | Advocate in Dhrol',
  description:
    'Contact Adv. K.B. Kagathara, Advocate in Dhrol, Gujarat. Office address: Laxminarayan Complex, Near Government Hospital, Dhrol. Phone: +91 96383 12551.',
  alternates: {
    canonical: 'https://kbkagathara-advocate.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact K.B. Kagathara | Advocate in Dhrol',
    description:
      'Contact Adv. K.B. Kagathara, Advocate in Dhrol, Gujarat. Office address: Laxminarayan Complex, Near Government Hospital, Dhrol. Phone: +91 96383 12551.',
    url: 'https://kbkagathara-advocate.vercel.app/contact',
    siteName: 'Advocate K.B. Kagathara Legal Chambers',
    images: [
      {
        url: '/hero-portrait.png',
        width: 768,
        height: 1024,
        alt: 'Contact Advocate K.B. Kagathara in Dhrol, Gujarat',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact K.B. Kagathara | Advocate in Dhrol',
    description:
      'Schedule a legal consultation with Adv. K.B. Kagathara in Dhrol, Gujarat. 24/7 emergency legal assistance available.',
    images: ['/hero-portrait.png'],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-parchment text-ink">
      <Header />
      <Breadcrumbs items={[{ name: 'Contact Chambers', url: '/contact' }]} />
      <div className="pt-8 bg-bone border-b border-ink">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="font-mono text-xs text-ember font-bold uppercase tracking-widest mb-2">
            OFFICE AUDIENCE & CONSULTATION BOOKING
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-ink">
            Contact Advocate K.B. Kagathara
          </h1>
          <p className="font-serif text-lg text-charcoal max-w-3xl mt-3 leading-relaxed">
            Chambers at {ADVOCATE_DATA.officeAddress}. Consultations are conducted by prior
            appointment. 24/7 hotline available for emergency bail or detention matters.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
