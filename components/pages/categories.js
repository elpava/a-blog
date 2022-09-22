import Link from 'next/link';

import GridPosts from '../containers/grid-posts';

import styles from './categories.module.scss';

function Categories({ allPosts }) {
  let categorizedPosts = {};

  allPosts.forEach(post => {
    const { category, categorySlug } = post;

    if (categorizedPosts[category]) {
      categorizedPosts[category].posts.push(post);
    } else {
      categorizedPosts[category] = {};
      categorizedPosts[category].category = category;
      categorizedPosts[category].categorySlug = categorySlug;
      categorizedPosts[category].posts = [];
      categorizedPosts[category].posts.push(post);
    }
  });

  categorizedPosts = Object.values(categorizedPosts);

  const postsCategory = categorizedPosts.map(item => {
    const { category, categorySlug, posts } = item;
    const slug = `/category/${categorySlug}`;

    return (
      <section className={styles.container} key={category}>
        <Link href={slug}>
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
