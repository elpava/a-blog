import Link from 'next/link';
import { useState } from 'react';

import styles from './category.module.scss';

function ByCategory({ categoriesData, activeItem }) {
  const [active, setActive] = useState(null);

  const uniqueCategories = [...new Set(categoriesData)];

  const categoriesList = uniqueCategories.map((item, index) => {
    const slug = item.replace(' ', '-');
    const classes = activeItem && active === index ? styles.active : '';

    return (
      <li key={item} className={classes} onClick={() => setActive(index)}>
        <Link href={`/category/${slug}`}>{item}</Link>
      </li>
    );
  });

  return (
    <div className={`${styles.block}`}>
      <h4 className={styles.title}>Categories</h4>
      <ul>{categoriesList}</ul>
    </div>
  );
}

export default ByCategory;
