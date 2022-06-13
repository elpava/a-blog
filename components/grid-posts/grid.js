import styles from './grid.module.scss';

function Grid({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default Grid;
