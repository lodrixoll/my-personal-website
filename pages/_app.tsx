import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/styles/global.css';
import '../public/styles/projects.css';
import '../public/styles/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Liam O&apos;Driscoll | Portfolio</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;