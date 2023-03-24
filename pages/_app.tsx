import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import * as gtag from '@assistant/common/gtag';
import Script from 'next/script';

// import '@assistant/assistant-ui-chat/chat.css';

import type { AppProps } from 'next/app';

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
      {ga && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gtag.GA_TRACKING_ID}', {
  page_path: window.location.pathname,
});`,
            }}
          />
        </Head>
      )}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Component {...pageProps} />;
    </>
  );
}

const ga = gtag.GA_TRACKING_ID ? <></> : null;
