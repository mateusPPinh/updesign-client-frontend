/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './struct/**/*.{js,ts,jsx,tsx,mdx}',
    './components/Article/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
    './renders/**/*.{js,ts,jsx,tsx,mdx}',
    './seo/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xl1: '2560px',
      sm2: '375px',
      mb: { 'max': '425px' },
      tb: { 'min': '726px' }
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
    },
    fontFamily: {
      primary: ['Montserrat Variable', 'sans-serif'],
      secondary: ['Roboto', 'serif'],
      tertiary: ['GeistMono-Medium', 'sans-serif'],
      sans: ['Montserrat Variable', 'sans-serif'],
      noto: ['Noto Sans Variable', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    letterSpacing: {
      tighter: '0.188rem',
    },
  },
  plugins: [],
};

export default config;