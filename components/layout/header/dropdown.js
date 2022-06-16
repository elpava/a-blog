import MenuItems from './menu-items';

import styles from './dropdown.module.scss';

function Dropdown({ toggleState, onToggle, menuItems }) {
  return (
    <div className={styles.wrapper}>
      {toggleState && (
        <div className={styles.submenu}>
          <MenuItems items={menuItems} onToggle={onToggle} />
        </div>
      )}
    </div>
  );
}

export default Dropdown;
