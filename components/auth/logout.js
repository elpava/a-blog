import { useSession, signOut } from 'next-auth/react';

import CTAbtn from '../ui/cta-button';

import styles from './logout.module.scss';

function Logout() {
  const { data: session } = useSession();

  const username =
    session.user.name.charAt(0).toUpperCase() + session.user.name.slice(1);

  function handleSignOut() {
    signOut({});
  }

  return (
    <div className={styles.block}>
      <div className={styles.logout}>
        <p>
          Welcome <span>{username}</span>
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
