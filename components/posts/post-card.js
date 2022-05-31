import Image from 'next/image';
import Link from 'next/link';

import styles from './posts.module.scss';

function PostCard({ postData }) {
  const { date, category, image, slug, title } = postData;

  const postSlug = `/posts/${slug}`;
  const postCategorySlug = `/category/${category}`;
  const postImage = `/${slug}/${image}`;
  const postDate = new Date(date).toLocaleString('en-us', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <>
      <div className={styles.postcard}>
        <div className={styles.postcard_image}>
          <Image src={postImage} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.postcard_header}>
          <Link href={postCategorySlug}>
            <a>
              <span className={styles.postcard_header_category}>
                {category}
              </span>
            </a>
          </Link>
          <time>{postDate}</time>
        </div>
        <Link href={postSlug}>
          <a className="text-dark">
            <h4>{title}</h4>
          </a>
        </Link>
      </div>
    </>
  );
}

export default PostCard;
