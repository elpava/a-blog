import styles from './primary-button.module.scss';

function PrimaryButton({ text, type = 'button' }) {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  );
}

export default PrimaryButton;
