import styles from './sidebar.module.scss';

function Sidebar({ children }) {
  return <aside className={styles.sidebar}>{children}</aside>;
}

export default Sidebar;
