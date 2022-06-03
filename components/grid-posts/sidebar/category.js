import Link from 'next/link';

import styles from './sidebar.module.scss';

function ByCategory({ categories }) {
  const uniqueCategories = [...new Set(categories)];

  const categoriesList = uniqueCategories.map(item => (
    <li key={item}>
      <Link href={`/category/${item}`}>{item}</Link>
    </li>
  ));

  return (
    <div className={`${styles.category} mb_5`}>
      <h4 className={styles.title}>Categories</h4>
      <ul>{categoriesList}</ul>
    </div>
  );
}

export default ByCategory;
