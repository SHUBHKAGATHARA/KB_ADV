import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Adv. K.B. Kagathara — Advocate in Dhrol, Gujarat',
    short_name: 'K.B. Kagathara Adv.',
    description: 'Advocate in Dhrol, Gujarat. Practicing criminal defense, civil litigation, property disputes, and legal consultation since 2004.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F6F0',
    theme_color: '#111111',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
