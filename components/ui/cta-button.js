import styles from './cta-button.module.scss';

function CTAbtn({ type, text, className, onClick }) {
  let classes;

  if (className === 'login') classes = styles.login;
  if (className === 'logout') classes = styles.logout;

  return (
    <button
      type={type}
      className={`${styles.cta} ${classes}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CTAbtn;
