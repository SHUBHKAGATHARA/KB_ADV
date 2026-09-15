import type { Metadata } from 'next';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import PracticeAreas from '@/components/PracticeAreas';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Legal Services in Dhrol | Advocate K.B. Kagathara',
  description:
    'Explore legal services provided by Adv. K.B. Kagathara in Dhrol, Gujarat: Criminal defense, civil litigation, property & land disputes, family law, and legal consultation.',
  alternates: {
    canonical: 'https://kbkagathara-advocate.vercel.app/practice-areas',
  },
  openGraph: {
    title: 'Legal Services in Dhrol | Advocate K.B. Kagathara',
    description:
      'Explore legal services provided by Adv. K.B. Kagathara in Dhrol, Gujarat: Criminal defense, civil litigation, property & land disputes, family law, and legal consultation.',
    url: 'https://kbkagathara-advocate.vercel.app/practice-areas',
    siteName: 'Advocate K.B. Kagathara Legal Chambers',
    images: [
      {
        url: '/hero-portrait.png',
        width: 768,
        height: 1024,
        alt: 'Legal Services in Dhrol — Advocate K.B. Kagathara',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Services in Dhrol | Advocate K.B. Kagathara',
    description:
      'Professional legal representation and trial advocacy across Dhrol, Jamnagar, and Gujarat courts.',
    images: ['/hero-portrait.png'],
  },
};

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen flex flex-col bg-parchment text-ink">
      <Header />
      <Breadcrumbs items={[{ name: 'Legal Services', url: '/practice-areas' }]} />
      <div className="pt-8 bg-bone border-b border-ink">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="font-mono text-xs text-ember font-bold uppercase tracking-widest mb-2">
            PRACTICE DIRECTORY & SERVICES
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-ink">
            Legal Services in Dhrol — Advocate K.B. Kagathara
          </h1>
          <p className="font-serif text-lg text-charcoal max-w-3xl mt-3 leading-relaxed">
            Trial advocacy, commercial litigation, land property dispute resolution, and matrimonial
            proceedings across Dhrol, Jamnagar, and Gujarat courts.
          </p>
        </div>
      </div>
      <PracticeAreas />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
