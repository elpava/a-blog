import Link from 'next/link';

function ItemsList({ items = [] }) {
  const lists = items.map(item => {
    const itemName = Object.keys(item).join();

    return (
      <li key={itemName}>
        <Link href={item[itemName]}>{itemName}</Link>
      </li>
    );
  });

  return <ul>{lists}</ul>;
}

export default ItemsList;
