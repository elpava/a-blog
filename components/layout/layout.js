import Auth from '../auth/auth';
import Main from './main';

function Layout({ children }) {
  return (
    <>
      <Auth />
      <Main>{children}</Main>;
    </>
  );
}

export default Layout;
