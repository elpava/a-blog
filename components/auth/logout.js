import { signOut } from 'next-auth/react';

import CTAbtn from '../ui/cta-button';

import styles from './logout.module.scss';

function Logout() {
  function handleSignOut() {
    signOut();
  }

  return (
    <div className={styles.block}>
      <div className={styles.logout}>
        <p>
          Welcome <span>Alex Smith</span>
        </p>
        <CTAbtn
          type="submit"
          text="Logout"
          className="logout"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
}

export default Logout;
