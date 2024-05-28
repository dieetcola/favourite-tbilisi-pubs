import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { Layout } from 'components/layout';
import '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
