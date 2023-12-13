/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'section-background': 'linear-gradient(180deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0.00) 100%)'
      },
      colors: {
        'blue': '#01005b',
        'light-brown': '#f9f0e5',
        'gray': '#676869',
        'gray-2': '#828282',
        'gray-3': '#868787'
      },
      letterSpacing: {
        wide: '1.04px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
