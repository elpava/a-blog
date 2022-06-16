import Link from 'next/link';

import styles from './category-label.module.scss';

function CategoryLable({ data, light, className, withoutLink }) {
  const { text, slug } = data;
  let classes = `${styles.label} ${className}`;

  const categorySlug = `/category/${slug}`;

  if (light) classes = `${classes} ${styles.light}`;

  if (withoutLink) return <span className={classes}>{text}</span>;

  return (
    <Link href={categorySlug}>
      <a>
        <span className={classes}>{text}</span>
      </a>
    </Link>
  );
}

export default CategoryLable;
