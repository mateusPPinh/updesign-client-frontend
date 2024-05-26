import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      blueDark: '#142634',
      white: '#FFFFFF',
      background1: '#F1EDE2',
      background2: '#F2EBDA',
      background3: '#F1F2F2',
      background4: '#FFF7FF',
      background5: '#E1EDF2',
      transparent: 'transparent',
      sideMenuColor: '#142634'
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['Roboto', 'serif'],
      tertiary: ['GeistMono-Medium', 'sans-serif'],
      sans: ['Montserrat', 'sans-serif'],
      noto: ['Noto Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    letterSpacing: {
      tighter: '0.188rem'
    },
    extend: {
      // spacing: {
      //   spacing: {
      //     px: '1px',
      //     0: '0',
      //     0.5: '0.125rem',
      //     1: '0.25rem',
      //     1.5: '0.375rem',
      //     2: '0.5rem',
      //     2.5: '0.625rem',
      //     3: '0.75rem',
      //     3.5: '0.875rem',
      //     4: '1rem',
      //     5: '1.25rem',
      //     6: '1.5rem',
      //     7: '1.75rem',
      //     8: '2rem',
      //     9: '2.25rem',
      //     10: '2.5rem',
      //     11: '2.75rem',
      //     12: '3rem',
      //     14: '3.5rem',
      //     16: '4rem',
      //     20: '5rem',
      //     24: '6rem',
      //     28: '7rem',
      //     32: '8rem',
      //     36: '9rem',
      //     40: '10rem',
      //     44: '11rem',
      //     48: '12rem',
      //     52: '13rem',
      //     56: '14rem',
      //     60: '15rem',
      //     64: '16rem',
      //     72: '18rem',
      //     80: '20rem',
      //     96: '24rem'
      //   }
      // },
      borderRadius: {},
      fontSize: {
        h1: ['4rem', { lineHeight: '4.8rem' }],
        h2: ['3rem', { lineHeight: '4.2rem' }],
        h3: ['2.5rem', { lineHeight: '3.5rem' }],
        h4: ['2rem', { lineHeight: '2.8rem' }],
        h5: ['1.5rem', { lineHeight: '2.1rem' }],
        h6: ['1rem', { lineHeight: '1.5rem' }]
      },
      fontWeight: {
        h1: 'medium',
        h2: 'medium',
        h3: 'medium',
        h4: 'medium',
        h5: 'medium',
        h6: 'medium'
      }
    }
  },
  plugins: []
};
export default config;
