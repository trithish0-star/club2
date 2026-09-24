/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cloud: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.18) 0%, transparent 65%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-in-out both',
        'slide-up':   'slideUp 0.55s ease-out both',
        'float':      'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' },               '100%': { opacity: '1' } },
        slideUp:   { '0%': { transform: 'translateY(28px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(6,182,212,0.25)' },
          '50%':     { boxShadow: '0 0 48px rgba(6,182,212,0.55)' },
        },
      },
    },
  },
  plugins: [],
};
