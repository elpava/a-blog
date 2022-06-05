import Image from 'next/image';
import Link from 'next/link';
import CategoryLable from '../ui/CategoryLabel';

import styles from './posts.module.scss';

function FeaturePostCard({ postData }) {
  const { category, categorySlug, date, image, slug, title } = postData;

  const postSlug = `/posts/${slug}`;
  const postImage = `${process.env.NEXT_PUBLIC_POST_IMAGE_FOLDER}/${slug}/${image}`;
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
            <div className={styles.info}>
              <div className={styles.header}>
                <CategoryLable
                  data={{ text: category, slug: categorySlug }}
                  light
                  withoutLink
                />
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
