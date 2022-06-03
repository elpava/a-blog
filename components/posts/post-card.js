import Image from 'next/image';
import Link from 'next/link';

import styles from './posts.module.scss';

function PostCard({ postData, grid }) {
  const { category, date, excerpt, image, slug, title } = postData;

  const postSlug = `/posts/${slug}`;
  const postCategorySlug = `/category/${category}`;
  const postImage = `${process.env.NEXT_PUBLIC_POST_IMAGE_FOLDER}/${slug}/${image}`;
  const postDate = new Date(date).toLocaleString('en-us', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const customStyle = {
    postcard: styles.postcard,
    excerpt: styles.excerpt,
    image: styles.image,
    title: null,
  };

  if (grid) {
    customStyle.postcard = `${styles.postcard} mb_5`;
    customStyle.image = `${styles.image_lg} mb_1_half`;
    customStyle.title = `${styles.title_lg} mb_1`;
  }

  return (
    <div className={customStyle.postcard}>
      <div className={customStyle.image}>
        <Image src={postImage} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.header}>
        <Link href={postCategorySlug}>
          <a>
            <span className={styles.category}>{category}</span>
          </a>
        </Link>
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

export default PostCard;
