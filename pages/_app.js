import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
  }, []);

  const component =
    route === '/admin' ? (
      <Component {...pageProps} />
    ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../favicon-32x32.png" sizes="32x32" />

        {/* add more meta tags */}

        <title>Blog Website</title>
      </Head>
      {/* <Layout>
        <Component {...pageProps} />
      </Layout> */}
      {component}
    </>
  );
}

export default MyApp;
