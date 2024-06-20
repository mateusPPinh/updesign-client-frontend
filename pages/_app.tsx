import { AppProps } from 'next/app';
import '../styles/global.css';
import { Montserrat, Noto_Sans, Poppins } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { GoogleAnalytics } from '@next/third-parties/google'

export const montserrat = Montserrat({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const notosans = Noto_Sans({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const poppins = Poppins({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID || ''} />
    </>
  );
}

export default MyApp;
