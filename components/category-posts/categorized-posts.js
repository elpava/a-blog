import Link from 'next/link';

import PostCards from '../posts/post-cards';

import styles from './categorized-posts.module.scss';

function CategorizedPosts({ categorizedPosts }) {
  const postsCategory = categorizedPosts.map(item => {
    const { category, slug, posts } = item;
    const categorySlug = `/category/${slug}`;

    return (
      <section className={styles.container} key={category}>
        <Link href={categorySlug}>
          <a className={styles.link}>
            <h1>{category}</h1>
          </a>
        </Link>
        <PostCards posts={posts} category={category} />
      </section>
    );
  });

  return <>{postsCategory}</>;
}

export default CategorizedPosts;
