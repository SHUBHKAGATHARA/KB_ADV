/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#e2dedb',
        bone: '#cdc6be',
        ink: '#1d1d1b',
        charcoal: '#69645f',
        pureblack: '#000000',
        ember: '#c03f13',
      },
      fontFamily: {
        display: ['"Bodoni MT Poster Compressed"', '"Bodoni Poster Compressed"', 'var(--font-display)', 'serif'],
        serif: ['var(--font-serif)', 'Newsreader', 'Source Serif 4', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        accent: ['var(--font-accent)', 'Pirata One', 'IM Fell English', 'serif'],
      },
      boxShadow: {
        print: '-4px 4px 6px 0px rgba(29, 29, 27, 0.2)',
        'print-alt': '-5px 3px 6px 0px rgba(29, 29, 27, 0.2)',
        hard: '4px 4px 0px 0px #1d1d1b',
        'hard-sm': '2px 2px 0px 0px #1d1d1b',
        'hard-lg': '6px 6px 0px 0px #1d1d1b',
      },
      borderRadius: {
        sharp: '0px',
        btn: '2.88px',
        card: '11.52px',
      },
      maxWidth: {
        editorial: '1440px',
      }
    },
  },
  plugins: [],
}
