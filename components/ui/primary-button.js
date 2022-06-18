import styles from './primary-button.module.scss';

function PrimaryButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}

export default PrimaryButton;
