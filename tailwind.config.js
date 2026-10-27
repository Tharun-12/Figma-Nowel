/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#244D3A',
          50: '#EEF3F0',
          100: '#D6E2DC',
          200: '#ADC5B9',
          300: '#84A896',
          400: '#5B8A73',
          500: '#244D3A',
          600: '#1F4232',
          700: '#173629',
          800: '#102619',
          900: '#0A1810',
        },
        sage: {
          DEFAULT: '#A8B9A0',
          100: '#EDF1EA',
          200: '#DCE4D6',
          300: '#CBD9C2',
          400: '#A8B9A0',
          500: '#8FA37E',
          600: '#738864',
          700: '#5A6C4E',
          800: '#424F39',
          900: '#2A3324',
        },
        ivory: '#F8F6EF',
        sand: {
          DEFAULT: '#E8DDCC',
          100: '#F6F1E8',
          200: '#EFE7D8',
          300: '#E8DDCC',
          400: '#DCC9AA',
          500: '#CFB591',
          600: '#B89A6E',
        },
        earth: {
          DEFAULT: '#80634B',
          400: '#A88B6F',
          500: '#80634B',
          600: '#6B523D',
          700: '#55402F',
        },
        charcoal: {
          DEFAULT: '#282D28',
          400: '#5C625C',
          500: '#454A45',
          600: '#282D28',
          700: '#1C201C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.625rem, 3vw, 2.5rem)', { lineHeight: '1.15' }],
      },
      maxWidth: {
        'prose-narrow': '38rem',
        'content': '80rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      letterSpacing: {
        'wider-2': '0.15em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0.8' },
          '50%': { transform: 'translateY(8px)', opacity: '0.3' },
          '100%': { transform: 'translateY(0)', opacity: '0.8' },
        },
        'botanical-sway': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
        'botanical-sway': 'botanical-sway 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
