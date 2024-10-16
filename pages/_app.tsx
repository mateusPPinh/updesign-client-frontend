import { AppProps } from 'next/app';
import '../styles/global.css';
import { Montserrat, Noto_Sans, Poppins } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { GoogleAnalytics } from '@next/third-parties/google';
import '../styles/article.styles.css';
import '@fontsource-variable/montserrat';
import '@fontsource-variable/noto-sans';
import '@fontsource/poppins';
import { useWindowSize } from 'rooks';

export const montserrat = Montserrat({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const notosans = Noto_Sans({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notosans'
});

export const poppins = Poppins({
  weight: ['400', '700', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { innerWidth } = useWindowSize();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (innerWidth && (innerWidth <= 460 || innerWidth >= 1024)) {
      import('../styles/article.responsive.styles.css');
    }
  }, [innerWidth]);

  return (
    <main
      className={`${notosans.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID || ''} />
    </main>
  );
}

export default MyApp;
