/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFA',
          100: '#FDFBF7',
          200: '#F7F2EB',
          300: '#EFE7DC',
          400: '#DFD1BF',
        },
        blush: {
          50: '#FEF9F9',
          100: '#F9EBEC',
          200: '#F3D2D6',
          300: '#EAA7AF',
          400: '#DE7E8A',
          500: '#CE6B7D',
          600: '#B84A5E',
        },
        sage: {
          50: '#F5F7F5',
          100: '#E8EFE8',
          200: '#D2E0D0',
          300: '#B5CAB2',
          400: '#8FA78C',
          500: '#698565',
          600: '#4F684B',
        },
        champagne: {
          100: '#FAF5E6',
          200: '#F3E9C7',
          300: '#E8D59A',
          400: '#DBBE6A',
          500: '#C7A745',
          600: '#A48429',
        },
        petal: {
          light: '#FFF0F2',
          medium: '#F6C8CF',
          dark: '#B03A48'
        }
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Allura"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-gentle': 'floatGentle 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
