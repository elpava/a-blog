import Link from 'next/link';

import styles from './category.module.scss';

function ByCategory({ categoriesData }) {
  const uniqueCategories = [...new Set(categoriesData)];

  const categoriesList = uniqueCategories.map(item => {
    const tempSlug = item.replace(' ', '-');
    return (
      <li key={item}>
        <Link href={`/category/${tempSlug}`}>{item}</Link>
      </li>
    );
  });

  return (
    <div className={`${styles.category} mb_5`}>
      <h4 className={styles.title}>Categories</h4>
      <ul>{categoriesList}</ul>
    </div>
  );
}

export default ByCategory;
