import Footer from './footer/footer';
import Header from './header/header';

function Main({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Main;
