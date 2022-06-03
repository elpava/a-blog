import { useEffect } from 'react';
import Head from 'next/head';

import appleFavicon from '../public/favicon/apple-touch-icon.png';
import androidFavicon from '../public/favicon/android-chrome-512x512.png';
import chromeFavicon from '../public/favicon/android-chrome-192x192.png';
import favicon from '../public/favicon/favicon-32x32.png';

import Layout from '../components/layout/index';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
  }, []);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon-precomposed" href={appleFavicon} />

        <meta name="application-name" content="Name" />
        <meta name="msapplication-tooltip" content="Tooltip" />
        <meta name="msapplication-config" content={appleFavicon} />

        <link rel="icon" href="" color="#FF0000" />

        <link rel="shortcut icon" sizes="512x512" href={androidFavicon} />

        <link rel="shortcut icon" sizes="192x192" href={chromeFavicon} />

        <link rel="icon" href={favicon} sizes="32x32" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
