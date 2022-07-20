import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import SiteLayout from '../components/layout/layout';
import DashboardLayout from '../dashboard/components/layout/layout';
import LoginProvider from '../dashboard/store/loginStateContext';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  let component;

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
  }, []);

  switch (route) {
    case '/admin':
      component = (
        <LoginProvider>
          <Component {...pageProps} />
        </LoginProvider>
      );
      break;
    case '/dashboard':
      component = (
        <LoginProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </LoginProvider>
      );
      break;
    default:
      component = (
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      );
      break;
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../favicon-32x32.png" sizes="32x32" />

        {/* add more meta tags */}

        <title>Blog Website</title>
      </Head>
      {component}
    </>
  );
}

export default MyApp;
