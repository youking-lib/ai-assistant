import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Inter as FontSans } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import * as gtag from '@common/gtag';

import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!gtag.GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <style jsx global>{`
    :root {
      --font-sans: ${fontSans.style.fontFamily};
    }
  }`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
