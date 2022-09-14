import styles from './primary-button.module.scss';

function PrimaryButton({ text, type = 'button', onClick }) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default PrimaryButton;
