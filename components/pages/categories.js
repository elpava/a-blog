import Link from 'next/link';

import GridPosts from '../containers/grid-posts';

import styles from './categories.module.scss';

function Categories({ allPosts }) {
  const uniqueCategories = allPosts.reduce((total, post) => {
    const { category } = post;

    if (!total.includes(category)) {
      total.push(category);
    }

    return total;
  }, []);

  const categorizedPosts = uniqueCategories.map(category => {
    let categorySlug;

    const filteredPosts = allPosts.filter(post => {
      if (post.category === category) {
        categorySlug = post.categorySlug;
        return post;
      } else {
        return null;
      }
    });

    return { category, posts: filteredPosts, categorySlug };
  });

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
