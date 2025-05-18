// Custom Tailwind CSS extensions for the portfolio
import plugin from 'tailwindcss/plugin';

module.exports = {
  // Add custom utilities for the portfolio site
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              fontWeight: '700',
            },
            code: {
              fontWeight: '500',
            },
            h1: {
              fontWeight: '800',
            },
            h2: {
              fontWeight: '700',
            },
            h3: {
              fontWeight: '600',
            },
          },
        },
      },
      animation: {
        'text-shimmer': 'text-shimmer 2.5s ease infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'bounce-soft': 'bounce-soft 3s infinite',
      },
      keyframes: {
        'text-shimmer': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'background-shine': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'bounce-soft': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-15px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [
    // Custom plugin to add backdrop utilities
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-xs': {
          '--tw-backdrop-blur': 'blur(2px)',
          'backdrop-filter': 'var(--tw-backdrop-blur)',
        },
        '.backdrop-saturate-150': {
          '--tw-backdrop-saturate': 'saturate(1.5)',
          'backdrop-filter': 'var(--tw-backdrop-saturate)',
        },
        '.backdrop-brightness-110': {
          '--tw-backdrop-brightness': 'brightness(1.1)',
          'backdrop-filter': 'var(--tw-backdrop-brightness)',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
}
