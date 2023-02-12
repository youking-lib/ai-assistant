import { siteConstants, __DEV__ } from '@/packages/constants';
import { Html, Head, Main, NextScript } from 'next/document';

const SCRIPT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NWXQDEPRCW');`;

export default function Document() {
  const analytics = !__DEV__ && siteConstants.ga && (
    <>
      <script async src={siteConstants.ga}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: SCRIPT,
        }}
      ></script>
    </>
  );

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {analytics}
      </body>
    </Html>
  );
}
