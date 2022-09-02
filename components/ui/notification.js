import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './notification.module.scss';

function Notification({ title, message }) {
  const [status, setStatus] = useState();
  const show = status && title;

  useEffect(() => {
    if (title) setStatus(true);

    const timer = setTimeout(() => {
      if (title === 'success' || title === 'error') setStatus(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [title]);

  return show
    ? createPortal(
        <div className={styles.block}>
          <span className={`${styles.message} ${styles[title]}`}>
            {message}
          </span>
        </div>,
        document.getElementById('rootNotify')
      )
    : null;
}

export default Notification;
