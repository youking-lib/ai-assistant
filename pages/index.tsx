import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Layout } from '@packages/ui-site';
import { siteConstants } from '@/packages/constants';

const AsyncAIChat = dynamic(() => import('@/packages/ui-chat').then(def => def.AIChat), {
  ssr: false,
  loading: () => <>loading...</>,
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteConstants.name}</title>
        <meta name="description" content={siteConstants.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AsyncAIChat />
    </Layout>
  );
}
