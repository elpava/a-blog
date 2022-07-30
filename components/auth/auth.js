import Login from './login';
import Logout from './logout';

import styles from './auth.module.scss';

function Auth() {
  return (
    <section className={styles.container}>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'unauthenticated' && <Login />}
      {status === 'authenticated' && <Logout />}
    </section>
  );
}

export default Auth;
