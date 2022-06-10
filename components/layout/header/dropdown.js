import styles from './header.module.scss';
import MenuItems from './menu-items';

function Dropdown({ toggleState, onToggle, menuItems }) {
  const { dropdownMenuPageItems, dropdownMenuSocialItems } = menuItems;

  return (
    <div className={styles.submenu}>
      {toggleState && (
        <div className={styles.container}>
          <div className={styles.page}>
            <span className={styles.title}>page</span>
            <MenuItems items={dropdownMenuPageItems} handleToggle={onToggle} />
          </div>

          <div className={styles.social}>
            <span className={styles.title}>social</span>
            <MenuItems
              items={dropdownMenuSocialItems}
              handleToggle={onToggle}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
