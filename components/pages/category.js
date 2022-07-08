import PostsWithSidebar from '../containers/posts-with-sidebar';

import styles from './category.module.scss';

function Category({ category, categoriesData, postsData, tagsData }) {
  if (!postsData) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <section className={styles.title}>
        <h1>{category}</h1>
      </section>

      <PostsWithSidebar
        posts={postsData}
        categories={categoriesData}
        tags={tagsData}
        categoriesActiveItem
      />
    </>
  );
}

export default Category;
