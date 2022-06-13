import { useRouter } from 'next/router';

import Footer from './footer/footer';
import Header from './header/header';

function Main({ children }) {
  const { asPath: path } = useRouter();
  const isHomepage = path === '/';

  const classes = isHomepage ? 'top_row_gap' : '';

  return (
    <>
      <Header />
      <main className={classes}>{children}</main>
      <Footer />
    </>
  );
}

export default Main;
