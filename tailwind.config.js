/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'qatar-maroon': '#70193D',
        'midnight-navy': '#0C1A2B',
        'white': '#FFFFFF',
        
        // Secondary Colors (Digital Theme)
        'royal-blue': '#203C92',
        'gold-accent': '#E2B75E',
        'slate-blue': '#6667AB',
        'teal-blue': '#319CA9',
        'grey-blue': '#1E2D40',
        
        // Complementary Neutrals
        'soft-beige': '#EDE6D7',
        'warm-taupe': '#C9B6A0',
        'sandstone': '#F3E7E5',
        'charcoal': '#333333',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slide-in 0.8s ease-out forwards',
        'zoom-in': 'zoom-in 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'qatar-gradient': 'linear-gradient(to right, #70193D, #E2B75E)',
        'qatar-gradient-vertical': 'linear-gradient(to bottom, #70193D, #E2B75E)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elegant-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
