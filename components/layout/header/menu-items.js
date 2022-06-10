import Link from 'next/link';

function MenuItems({ items = [], handleToggle }) {
  const menuItems = items.map(item => (
    <li key={item.name}>
      <Link href={item.path}>
        <a onClick={handleToggle}>{item.name}</a>
      </Link>
    </li>
  ));
  return <ul>{menuItems}</ul>;
}

export default MenuItems;
