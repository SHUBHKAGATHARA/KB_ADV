import type { Metadata } from 'next';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import AboutSection from '@/components/AboutSection';
import ExperienceStats from '@/components/ExperienceStats';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About K.B. Kagathara | Advocate in Dhrol, Gujarat',
  description:
    'Learn about Adv. K.B. Kagathara, Advocate in Dhrol, Gujarat. Practicing since 2004 with 22+ years of legal experience across criminal defense, civil litigation, and property law.',
  alternates: {
    canonical: 'https://kbkagathara-advocate.vercel.app/about',
  },
  openGraph: {
    title: 'About K.B. Kagathara | Advocate in Dhrol, Gujarat',
    description:
      'Learn about Adv. K.B. Kagathara, Advocate in Dhrol, Gujarat. Practicing since 2004 with 22+ years of legal experience across criminal defense, civil litigation, and property law.',
    url: 'https://kbkagathara-advocate.vercel.app/about',
    siteName: 'Advocate K.B. Kagathara Legal Chambers',
    images: [
      {
        url: '/hero-portrait.png',
        width: 768,
        height: 1024,
        alt: 'Advocate K.B. Kagathara in Dhrol, Gujarat',
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About K.B. Kagathara | Advocate in Dhrol, Gujarat',
    description:
      'Practicing advocate in Dhrol, Gujarat with 22+ years of legal experience. Gujarat State Bar Council Enrollment No. 488/2004.',
    images: ['/hero-portrait.png'],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-parchment text-ink">
      <Header />
      <Breadcrumbs items={[{ name: 'About Advocate', url: '/about' }]} />
      <div className="pt-8 bg-bone border-b border-ink">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="font-mono text-xs text-ember font-bold uppercase tracking-widest mb-2">
            BIOGRAPHICAL RECORD & CREDENTIALS
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-ink">
            About K.B. Kagathara — Advocate in Dhrol
          </h1>
          <p className="font-serif text-lg text-charcoal max-w-3xl mt-3 leading-relaxed">
            Over two decades of courtroom advocacy, ethical counsel, and procedural command before
            the Gujarat State Bar Council. Admitted to practice in 2004 (Roll No. 488/2004).
          </p>
        </div>
      </div>
      <AboutSection />
      <ExperienceStats />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
