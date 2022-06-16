import MenuItem from './menu-item';

import styles from './menu-items.module.scss';

function MenuItems({ items = [] }) {
  const menuItems = items.map(item => {
    const { title, items } = item;

    return (
      <div className={styles[title]} key={title}>
        <div className={styles.wrapper}>
          <ul>
            <MenuItem items={items} />
          </ul>
        </div>
      </div>
    );
  });

  return <>{menuItems}</>;
}

export default MenuItems;
