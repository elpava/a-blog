import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { FaUserAlt } from 'react-icons/fa';

import Login from './login';
import Logout from './logout';
import Notification from '../ui/notification';

import styles from './auth.module.scss';

function Auth() {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [notification, setNotification] = useState(null);
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
        <Login
          closeForm={closeAuthFormHandler}
          showNotification={setNotification}
        />
      )}
      {status === 'authenticated' && <Logout />}
      {notification && (
        <Notification
          title={notification.status}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default Auth;
