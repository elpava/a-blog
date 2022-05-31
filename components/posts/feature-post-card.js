import Image from 'next/image';
import Link from 'next/link';

import styles from './posts.module.scss';

function FeaturePostCard({ postData }) {
  const { date, category, image, slug, title } = postData;

  const postSlug = `/posts/${slug}`;
  const postImage = `/${slug}/${image}`;
  const postDate = new Date(date).toLocaleString('en-us', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <>
      <div className={styles.postcard}>
        <Image src={postImage} alt={title} layout="fill" objectFit="cover" />
        <Link href={postSlug}>
          <a>
            <div className={styles.postcard_info}>
              <div className={styles.postcard_info_header}>
                <span className={styles.postcard_info_category}>
                  {category}
                </span>
                <time>{postDate}</time>
              </div>
              <h1 className="text-light">{title}</h1>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default FeaturePostCard;
