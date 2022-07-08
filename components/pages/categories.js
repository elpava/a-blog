import Link from 'next/link';

import GridPosts from '../containers/grid-posts';

import styles from './categories.module.scss';

function Categories({ categorizedPostsData }) {
  const postsCategory = categorizedPostsData.map(item => {
    const { category, slug, posts } = item;
    const categorySlug = `/category/${slug}`;

    return (
      <section className={styles.container} key={category}>
        <Link href={categorySlug}>
          <a className={styles.link}>
            <h1>{category}</h1>
          </a>
        </Link>
        <GridPosts posts={posts} category={category} />
      </section>
    );
  });

  return <>{postsCategory}</>;
}

export default Categories;
