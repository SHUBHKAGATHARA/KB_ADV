import type { Metadata } from 'next';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';
import { ADVOCATE_DATA } from '@/data/advocate';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Advocate K.B. Kagathara, Dhrol',
  description:
    'Find answers to common legal inquiries regarding consultation booking, documents required, emergency bail assistance, and court jurisdictions in Dhrol, Gujarat.',
  alternates: {
    canonical: 'https://kbkagathara-advocate.vercel.app/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Advocate K.B. Kagathara, Dhrol',
    description:
      'Find answers to common legal inquiries regarding consultation booking, documents required, emergency bail assistance, and court jurisdictions in Dhrol, Gujarat.',
    url: 'https://kbkagathara-advocate.vercel.app/faq',
    siteName: 'Advocate K.B. Kagathara Legal Chambers',
    images: [
      {
        url: '/hero-portrait.png',
        width: 768,
        height: 1024,
        alt: 'Legal FAQs — Advocate K.B. Kagathara, Dhrol',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Advocate K.B. Kagathara, Dhrol',
    description:
      'Practical guidance on consultation procedures, essential legal documents, and emergency representation in Dhrol, Gujarat.',
    images: ['/hero-portrait.png'],
  },
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ADVOCATE_DATA.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen flex flex-col bg-parchment text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Breadcrumbs items={[{ name: 'Frequently Asked Questions', url: '/faq' }]} />
      <div className="pt-8 bg-bone border-b border-ink">
        <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="font-mono text-xs text-ember font-bold uppercase tracking-widest mb-2">
            CLIENT INFORMATION & PROCEDURAL GUIDANCE
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-ink">
            Legal FAQs — Advocate K.B. Kagathara, Dhrol
          </h1>
          <p className="font-serif text-lg text-charcoal max-w-3xl mt-3 leading-relaxed">
            Practical guidance on consultation procedures, essential legal documentation, emergency
            bail assistance, and court jurisdictions in Dhrol and Saurashtra.
          </p>
        </div>
      </div>
      <FAQSection />
      <ConsultationCTA />
      <Footer />
    </main>
  );
}
