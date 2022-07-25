import styles from './button.module.scss';

function Button({ action, text, size, firstBtn, lastBtn, onClick }) {
  let classes;

  if (action === 'delete') classes = styles.delete;
  if (action === 'edit') classes = styles.edit;
  if (action === 'show') classes = styles.show;

  return (
    <button
      type="button"
      className={`${styles.btn} ${classes}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
