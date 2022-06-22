import MenuItems from './menu-items';

import styles from './dropdown.module.scss';
import Search from './search';

function Dropdown({ toggleState, onToggle, menuItems, dropdownRef }) {
  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      {toggleState && (
        <div className={styles.submenu}>
          <Search hideOnDesktop />
          <MenuItems items={menuItems} onToggle={onToggle} />
        </div>
      )}
    </div>
  );
}

export default Dropdown;
