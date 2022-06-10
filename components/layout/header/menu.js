import { FaBars } from 'react-icons/fa';

import styles from './header.module.scss';

function Menu({ onToggle, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onClick={onToggle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className={styles.menu}>
        <FaBars />
        <span>Menu</span>
      </button>
    </div>
  );
}

export default Menu;
