import MenuItem from './menu-item';

import styles from './menu-items.module.scss';

function MenuItems({ items = [] }) {
  const menuItems = items.map(item => {
    const { title, items } = item;

    return (
      <div className={styles[title]} key={title}>
        <ul>
          <MenuItem items={items} />
        </ul>
      </div>
    );
  });

  return <>{menuItems}</>;
}

export default MenuItems;
