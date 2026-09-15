import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ADVOCATE_DATA } from '@/data/advocate';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kbkagathara-advocate.vercel.app'),
  title: {
    default: 'K.B. Kagathara | Advocate in Dhrol, Gujarat',
    template: '%s | Advocate K.B. Kagathara',
  },
  description:
    'Consult K.B. Kagathara, Advocate in Dhrol, Gujarat, for professional legal representation and legal consultation. Explore legal services, experience and contact information.',
  keywords: [
    'Advocate in Dhrol',
    'Lawyer in Dhrol',
    'Best Advocate in Dhrol',
    'Advocate Dhrol',
    'Lawyer Dhrol',
    'K.B. Kagathara Advocate',
    'KB Kagathara Advocate',
    'K.B. Kagathara Lawyer',
    'Advocate in Jamnagar',
    'Lawyer in Jamnagar',
    'Legal services in Dhrol',
    'Legal services in Jamnagar',
    'Advocate in Gujarat',
    'Lawyer near Dhrol',
    'Legal consultation in Dhrol',
    'Court lawyer in Dhrol',
    'Gujarat State Bar Council 488/2004',
  ],
  authors: [{ name: 'Adv. K.B. Kagathara' }],
  creator: 'Adv. K.B. Kagathara',
  publisher: 'Adv. K.B. Kagathara Legal Chambers',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
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
      'Consult K.B. Kagathara, Advocate in Dhrol, Gujarat, for professional legal representation and legal consultation. Explore legal services, experience and contact information.',
    images: ['/hero-portrait.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'googlecfc6160073cee22a',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://kbkagathara-advocate.vercel.app/#legalservice',
        name: 'Adv. K.B. Kagathara Legal Chambers',
        alternateName: [
          'K.B. Kagathara Advocate',
          'Advocate in Dhrol',
          'Lawyer in Dhrol',
          'KB Kagathara Advocate Dhrol',
        ],
        url: 'https://kbkagathara-advocate.vercel.app',
        logo: 'https://kbkagathara-advocate.vercel.app/hero-portrait.png',
        image: 'https://kbkagathara-advocate.vercel.app/hero-portrait.png',
        description:
          'Professional legal chambers of Adv. K.B. Kagathara in Dhrol, Gujarat. Offering trial court advocacy, criminal defense, civil litigation, property dispute resolution, and legal consultation with 22+ years of experience since 2004.',
        telephone: [
          ADVOCATE_DATA.phones.primary,
          ADVOCATE_DATA.phones.secondary,
        ],
        email: ADVOCATE_DATA.emails.primary,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Laxminarayan Complex, Near Government Hospital',
          addressLocality: 'Dhrol',
          addressRegion: 'Gujarat',
          postalCode: '361210',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 22.5694,
          longitude: 70.4144,
        },
        hasMap:
          'https://www.google.com/maps/search/?api=1&query=K.B.KAGATHARA+ADV.',
        areaServed: [
          {
            '@type': 'City',
            name: 'Dhrol',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Jamnagar District',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Rajkot District',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Gujarat',
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '10:00',
            closes: '16:00',
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://kbkagathara-advocate.vercel.app/#advocate',
        name: 'K.B. Kagathara',
        alternateName: [
          'Adv. K.B. Kagathara',
          'Advocate K.B. Kagathara',
          'KB Kagathara',
        ],
        jobTitle: 'Advocate',
        worksFor: {
          '@id': 'https://kbkagathara-advocate.vercel.app/#legalservice',
        },
        alumniOf: 'Gujarat State Bar Council',
        memberOf: {
          '@type': 'Organization',
          name: 'Gujarat State Bar Council',
        },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Bar Council Enrollment',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Gujarat State Bar Council',
          },
          identifier: '488/2004',
        },
        telephone: ADVOCATE_DATA.phones.primary,
        email: ADVOCATE_DATA.emails.primary,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Laxminarayan Complex, Near Government Hospital',
          addressLocality: 'Dhrol',
          addressRegion: 'Gujarat',
          postalCode: '361210',
          addressCountry: 'IN',
        },
        knowsAbout: [
          'Criminal Defense Law',
          'Civil Litigation',
          'Property & Real Estate Law',
          'Land Revenue Disputes',
          'Family & Matrimonial Law',
          'Court Trial Advocacy',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kbkagathara-advocate.vercel.app/#website',
        url: 'https://kbkagathara-advocate.vercel.app',
        name: 'Advocate K.B. Kagathara Legal Chambers',
        description:
          'Official portal of Adv. K.B. Kagathara, Advocate in Dhrol, Gujarat.',
        inLanguage: 'en-IN',
        publisher: {
          '@id': 'https://kbkagathara-advocate.vercel.app/#legalservice',
        },
      },
    ],
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="bg-parchment text-ink antialiased min-h-screen paper-grain selection:bg-ink selection:text-parchment">
        {children}
      </body>
    </html>
  );
}
