import { FaBars } from 'react-icons/fa';

import styles from './header.module.scss';

function Menu({ onToggle }) {
  return (
    <button className={styles.menu} onClick={onToggle}>
      <FaBars />
      <span>Menu</span>
    </button>
  );
}

export default Menu;
