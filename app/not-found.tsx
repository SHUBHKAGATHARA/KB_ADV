import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Home, BookOpen, Scale, Mail } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found (404) | Advocate K.B. Kagathara',
  description: 'The requested page could not be found. Navigate back to the official legal portal of Advocate K.B. Kagathara, Dhrol, Gujarat.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-parchment text-ink">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full border-2 border-ink p-8 sm:p-12 bg-bone shadow-print text-center space-y-6">
          <div className="font-mono text-xs text-ember font-bold uppercase tracking-widest">
            ERROR RECORD 404
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-ink">
            RECORD NOT FOUND
          </h1>
          <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed">
            The judicial page or document you are seeking does not exist or has been relocated within our directory.
          </p>

          <div className="grid grid-cols-2 gap-3 text-left font-mono text-xs pt-4 border-t border-ink/30">
            <Link
              href="/"
              className="p-3 border border-ink bg-parchment hover:bg-ink hover:text-parchment transition-colors flex items-center gap-2"
            >
              <Home className="w-3.5 h-3.5 text-ember shrink-0" />
              <span>HOMEPAGE</span>
            </Link>
            <Link
              href="/about"
              className="p-3 border border-ink bg-parchment hover:bg-ink hover:text-parchment transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-ember shrink-0" />
              <span>ABOUT ADVOCATE</span>
            </Link>
            <Link
              href="/practice-areas"
              className="p-3 border border-ink bg-parchment hover:bg-ink hover:text-parchment transition-colors flex items-center gap-2"
            >
              <Scale className="w-3.5 h-3.5 text-ember shrink-0" />
              <span>PRACTICE AREAS</span>
            </Link>
            <Link
              href="/contact"
              className="p-3 border border-ink bg-parchment hover:bg-ink hover:text-parchment transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-ember shrink-0" />
              <span>CONTACT CHAMBERS</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
