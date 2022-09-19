import Image from 'next/image';
import Link from 'next/link';

import CategoryLable from '../ui/category-label';

import styles from './posts.module.scss';

function Posts({ postData, grid }) {
  const { category, categorySlug, date, excerpt, image, slug, title } =
    postData;

  const postSlug = `/posts/${slug}`;
  const postImage = `/posts/${slug}/${image}`;
  const postDate = new Date(date).toLocaleString('en-us', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const customStyle = {
    card: styles.card,
    excerpt: styles.excerpt,
    image: styles.image,
    title: null,
  };

  if (grid) {
    customStyle.card = `${styles.card} mb_5`;
    customStyle.image = `${styles.image_lg} mb_1_half`;
    customStyle.title = `${styles.title_lg} mb_1`;
  }

  return (
    <div className={customStyle.card}>
      <div className={customStyle.image}>
        <Image
          src={postImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.header}>
        <CategoryLable data={{ text: category, slug: categorySlug }} />
        <time>{postDate}</time>
      </div>
      <Link href={postSlug}>
        <a className="text-dark">
          {grid ? (
            <h2 className={customStyle.title}>{title}</h2>
          ) : (
            <h4>{title}</h4>
          )}
        </a>
      </Link>
      {grid && <p className={customStyle.excerpt}>{excerpt}</p>}
    </div>
  );
}

export default Posts;
