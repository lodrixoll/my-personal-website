import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/styles/global.css';
import '../public/styles/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
          <Head>
              <link rel="icon" href="/images/icons/favicon.svg" />
              <title>Liam O&apos;Driscoll | Portfolio</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
          </Head>
          <Component {...pageProps} />
        </>
    );
}

export default MyApp;
