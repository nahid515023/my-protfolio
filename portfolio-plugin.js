// Custom Tailwind CSS extensions for the portfolio
import plugin from 'tailwindcss/plugin';

module.exports = plugin(function({ addUtilities }) {
  // Add custom utilities
  const newUtilities = {
    '.backdrop-blur-xs': {
      '--tw-backdrop-blur': 'blur(2px)',
      'backdropFilter': 'var(--tw-backdrop-blur)',
    },
    '.backdrop-saturate-150': {
      '--tw-backdrop-saturate': 'saturate(1.5)',
      'backdropFilter': 'var(--tw-backdrop-saturate)',
    },
    '.backdrop-brightness-110': {
      '--tw-backdrop-brightness': 'brightness(1.1)',
      'backdropFilter': 'var(--tw-backdrop-brightness)',
    },
  };
  
  addUtilities(newUtilities);
});
