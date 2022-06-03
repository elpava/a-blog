import styles from './sidebar.module.scss';

function ByFeature() {
  return (
    <div className={`${styles.feature} mb_5`}>
      <h4 className={styles.title}>Featured</h4>
    </div>
  );
}

export default ByFeature;
