import styles from './navbar.module.scss';

function Navbar({ children, refNavbar }) {
  return (
    <nav className={styles.container} ref={refNavbar}>
      {children}
    </nav>
  );
}

export default Navbar;
