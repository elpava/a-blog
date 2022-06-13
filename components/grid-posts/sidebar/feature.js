import Image from 'next/image';
import Link from 'next/link';
import CategoryLable from '../../ui/CategoryLabel';

import styles from './feature.module.scss';

function ByFeature({ featurePostsData }) {
  const featurePosts = featurePostsData.map(post => {
    const { category, categorySlug, image, slug, title } = post;

    const postSlug = `/posts/${slug}`;
    const postImage = `${process.env.NEXT_PUBLIC_POST_IMAGE_FOLDER}/${slug}/${image}`;

    return (
      <div key={slug} className={styles.feature_post}>
        <Link href={postSlug}>
          <a>
            <div className={styles.image}>
              <Image
                src={postImage}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
        <div className={styles.info}>
          <CategoryLable
            className="mb_half"
            data={{ text: category, slug: categorySlug }}
          />
          <Link href={postSlug}>
            <a>
              <h4>{title}</h4>
            </a>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className={`${styles.feature} mb_5`}>
      <h4 className={styles.title}>Featured</h4>
      {/* <ul>{featurePosts}</ul> */}
      {featurePosts}
    </div>
  );
}

export default ByFeature;
