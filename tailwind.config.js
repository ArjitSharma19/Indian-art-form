/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFCF9',
          100: '#FAF6ED',
          200: '#F3EBDD',
          300: '#E6DAC4',
          400: '#D5C4A5',
          DEFAULT: '#FAF6ED',
        },
        maroon: {
          50: '#F9EBEF',
          100: '#F1CAD3',
          300: '#D27289',
          600: '#942338',
          700: '#781A2C',
          800: '#5C1221',
          900: '#3D0A14',
          DEFAULT: '#781A2C',
        },
        saffron: {
          50: '#FEF4EC',
          100: '#FCE4D0',
          300: '#F5AB6F',
          500: '#E0691E',
          600: '#C75313',
          700: '#A43E0B',
          DEFAULT: '#C75313',
        },
        gold: {
          100: '#F5EACF',
          300: '#E2C78A',
          400: '#D4B364',
          500: '#C59B4B',
          600: '#A67D34',
          700: '#835E21',
          DEFAULT: '#C59B4B',
        },
        heritage: {
          charcoal: '#1C1714',
          dark: '#261F1A',
          brown: '#3E3129',
          muted: '#6E6157',
          border: '#E2D6C0',
        }
      },
      fontFamily: {
        display: ['"Cinzel"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'museum': '0 10px 35px -5px rgba(44, 24, 16, 0.08), 0 4px 12px -2px rgba(44, 24, 16, 0.04)',
        'museum-lg': '0 20px 45px -10px rgba(44, 24, 16, 0.12), 0 8px 20px -4px rgba(44, 24, 16, 0.06)',
        'gold-glow': '0 0 25px rgba(197, 155, 75, 0.35)',
      },
      backgroundImage: {
        'ornate-pattern': "radial-gradient(#C59B4B 0.75px, transparent 0.75px), radial-gradient(#C59B4B 0.75px, #FAF6ED 0.75px)",
      }
    },
  },
  plugins: [],
}
