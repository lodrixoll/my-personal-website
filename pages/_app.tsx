import type { AppProps } from 'next/app';
import '../public/styles/global.css';
import '../public/styles/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
          <Component {...pageProps} />
        </>
    );
}

export default MyApp;
