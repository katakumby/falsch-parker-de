/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,jsx}', './src/app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        light: '#F5F7F9',
        green: '#05D54B',
        dark: '#0D0F11',
      },
      backgroundImage: {
        greenGradient: 'linear-gradient(139.89deg, #05D54B 0%, #69AFBA 100%)',
      },
      maxWidth: {
        container: '1360px',
      },
      height: {
        card: '700px',
        cardMobile: '600px',
      },
      borderRadius: {
        card: '32px',
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 90s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
