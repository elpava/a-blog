import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { FaUserAlt } from 'react-icons/fa';

import Login from './login';
import Logout from './logout';

import styles from './auth.module.scss';

function Auth() {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const { status } = useSession();

  function toggleAuthFormHandler() {
    setShowAuthForm(!showAuthForm);
  }

  function closeAuthFormHandler() {
    setShowAuthForm(false);
  }

  return (
    <section className={`${styles.container} ${showAuthForm && styles.show}`}>
      <div className={styles.indicator} onClick={toggleAuthFormHandler}>
        {<FaUserAlt color="green" />}
      </div>
      {status === 'unauthenticated' && (
        <Login closeForm={closeAuthFormHandler} />
      )}
      {status === 'authenticated' && <Logout />}
    </section>
  );
}

export default Auth;
