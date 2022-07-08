import { useEffect } from 'react';
import Head from 'next/head';

import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../favicon-32x32.png" sizes="32x32" />

        {/* add more meta tags */}

        <title>Blog Website</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
