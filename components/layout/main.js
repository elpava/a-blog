import { useRouter } from 'next/router';

import Footer from './footer/footer';
import Header from './header/header';

function Main({ children }) {
  const { route } = useRouter();
  const isHomepage = route === '/';

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
