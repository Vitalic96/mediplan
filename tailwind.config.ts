import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xs': '390px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1340px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.25rem',
        lg: '1.25rem',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1340px',
      },
    },
    extend: {
      colors: {
        violet: {
          '50': '#F7F3FF',
          '100': '#F0E9FE',
          '200': '#E4D6FE',
          '300': '#CEB5FD',
          '400': '#B28BFA',
          '500': '#925CF6',
          '600': '#793AED',
          '700': '#6628D9',
          '800': '#5621B6',
          '900': '#471D95',
          '950': '#2E1065',
          DEFAULT: '#B28BFA',
        },
        gray: {
          '50': '#F6F6F6',
          '100': '#E7E7E7',
          '200': '#D1D1D1',
          '300': '#B0B0B0',
          '400': '#888888',
          '500': '#6D6D6D',
          '600': '#5D5D5D',
          '700': '#4F4F4F',
          '800': '#454545',
          '900': '#3D3D3D',
          '950': '#0A0A0A',
        },
      },
      fontFamily: {
        poppits: ['var(--font-poppits)'],
      },

      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      },
      animation: {
        fadein: 'fadein linear .3s',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
