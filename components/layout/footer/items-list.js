import Link from 'next/link';
import styles from './footer.module.scss';

function ItemsList({ items = [] }) {
  const lists = items.map(item => {
    const itemName = Object.keys(item).join();

    return (
      <li key={itemName}>
        <Link href={item[itemName]}>{itemName}</Link>
      </li>
    );
  });

  return (
    <div className={styles.wrapper}>
      <ul>{lists}</ul>
    </div>
  );
}

export default ItemsList;
