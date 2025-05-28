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
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        cyber: '#00ff41',
        neon: '#ff073a',
      },
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'scan-line': 'scan-line 2s linear infinite',
        'type-writer': 'type-writer 4s steps(40) 1s 1 normal both',
        'blink-cursor': 'blink-cursor 1s ease-in-out infinite',
        'cyber-grid': 'cyber-grid 20s linear infinite',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
        'data-stream': 'data-stream 15s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'orbit': 'orbit 10s linear infinite',
        'slide-in': 'slide-in 0.8s ease-out forwards',
        'zoom-in': 'zoom-in 0.6s ease-out forwards',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
            textShadow: '0 0 5px #00ffff'
          },
          '100%': { 
            boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
            textShadow: '0 0 10px #00ffff'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        'type-writer': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-cursor': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ffff' }
        },
        'cyber-grid': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' }
        },
        'neon-pulse': {
          '0%': { 
            filter: 'brightness(100%) hue-rotate(0deg)',
            transform: 'scale(1)'
          },
          '100%': { 
            filter: 'brightness(150%) hue-rotate(90deg)',
            transform: 'scale(1.02)'
          }
        },
        'data-stream': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'hologram': {
          '0%, 100%': { opacity: '0.8', transform: 'rotateY(0deg)' },
          '50%': { opacity: '1', transform: 'rotateY(180deg)' }
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
        'matrix-bg': 'radial-gradient(ellipse at center, rgba(0,255,65,0.15) 0%, rgba(0,0,0,0.85) 100%)',
        'hologram-gradient': 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff41)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      }
    },
  },
  plugins: [],
}
