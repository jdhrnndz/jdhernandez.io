import '@styles/globals.css';
import Layout from '@components/Layout';
import Head from 'next/head';
import { MyMagicString } from '@components/enums';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>{MyMagicString.MyName}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
