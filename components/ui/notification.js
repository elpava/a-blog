import styles from './notification.module.scss';

function Notification({ title, message }) {
  let classes;

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
    <div className={styles.block}>
      <p className={[styles.message, classes].join(' ')}>{message}</p>
    </div>
  );
}

export default Notification;
