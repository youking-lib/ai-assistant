import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@assistant/common/gtag';

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

  return <Component {...pageProps} />;
}
