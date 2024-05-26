/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppProps } from 'next/app';
import '../styles/global.css';
import { Montserrat, Noto_Sans, Poppins } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const notosans = Noto_Sans({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const poppins = Poppins({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
