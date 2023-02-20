import { Html, Head, Main, NextScript } from 'next/document';
import * as gtag from '@assistant/common/gtag';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        {ga}
      </body>
    </Html>
  );
}

const ga = gtag.GA_TRACKING_ID ? (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    />

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
  </>
) : null;
