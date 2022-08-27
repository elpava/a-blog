import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './notification.module.scss';

function Notification({ title, message }) {
  const [show, setShow] = useState(true);
  let classes;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (title === 'success' || title === 'error') setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [title]);

  switch (title) {
    case 'pending':
      classes = styles.pending;
      break;
    case 'success':
      classes = styles.success;
      break;
    case 'caution':
      classes = styles.caution;
      break;
    case 'warning':
      classes = styles.warning;
      break;
    case 'error':
      classes = styles.error;
      break;
    default:
      break;
  }

  return (
    show &&
    createPortal(
      <div className={styles.block}>
        <span className={`${styles.message} ${classes}`}>{message}</span>
      </div>,
      document.getElementById('rootNotify')
    )
  );
}

export default Notification;
