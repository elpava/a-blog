import { useSession } from 'next-auth/react';

import Login from './login';
import Logout from './logout';

import styles from './auth.module.scss';

function Auth() {
  const { status } = useSession();

  return (
    <section className={styles.container}>
      {status === 'unauthenticated' && <Login />}
      {status === 'authenticated' && <Logout />}
    </section>
  );
}

export default Auth;
