import { FaBars } from 'react-icons/fa';

import styles from './header.module.scss';

function Menu({ onToggle }) {
  return (
    <div onClick={onToggle}>
      <button className={styles.menu}>
        <FaBars />
        <span>Menu</span>
      </button>
    </div>
  );
}

export default Menu;
