import styles from './notification.module.scss';

function Notification({ title, message }) {
  let classes;

  if (title === 'pending') {
    classes = styles.pending;
  } else if (title === 'success') {
    classes = styles.success;
  } else if (title === 'caution') {
    classes = styles.caution;
  } else if (title === 'warning') {
    classes = styles.warning;
  } else if (title === 'error') {
    classes = styles.error;
  }

  return (
    <div className={styles.block}>
      <p className={[styles.message, classes].join(' ')}>{message}</p>
    </div>
  );
}

export default Notification;
