import Image from 'next/image';
import Link from 'next/link';

import CategoryLable from '../ui/category-label';

import styles from './category.module.scss';

function CategoryPosts({ posts }) {
  const postsByCategory = posts.map(post => {
    const { category, date, excerpt, image, slug, title } = post;
    const postSlug = `/posts/${slug}`;
    const postImage = `${process.env.NEXT_PUBLIC_POST_IMAGE_FOLDER}/${slug}/${image}`;
    const formattedDate = new Date(date).toLocaleString('en-us', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    return (
      <div key={slug} className={styles.postcard}>
        <div className={styles.image}>
          <Link href={postSlug}>
            <a>
              <Image
                src={postImage}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <CategoryLable data={{ text: category }} withoutLink />
            <time>{formattedDate}</time>
          </div>
          <Link href={postSlug}>
            <a>
              <h2>{title}</h2>
            </a>
          </Link>
          <p>{excerpt}</p>
        </div>
      </div>
    );
  });

  return <div className="block">{postsByCategory}</div>;
}

export default CategoryPosts;
