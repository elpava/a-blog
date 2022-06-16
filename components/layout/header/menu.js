import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './menu.module.scss';

function Menu({ onToggle, toggleState }) {
  return (
    <button className={styles.toggle} onClick={onToggle}>
      {!toggleState ? <FaBars /> : <FaTimes />}
      <span>Menu</span>
    </button>
  );
}

export default Menu;
