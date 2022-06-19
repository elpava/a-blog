import Grid from '../grid-posts/grid';
import PostsBlock from '../grid-posts/posts-block/posts-block';
import Sidebar from '../grid-posts/sidebar/sidebar';
import StickyMenu from '../layout/sticky-menu';
import ByCategory from '../grid-posts/sidebar/category';
import ByTags from '../grid-posts/sidebar/tags';
import PostCards from './post-cards';

import styles from './category-posts.module.scss';

function CategoryPosts({ category, categories, posts, tags }) {
  if (!posts) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <section className={styles.title}>
        <h1>{category}</h1>
      </section>

      <Grid>
        <PostsBlock>
          <PostCards posts={posts} />
        </PostsBlock>

        <Sidebar>
          <StickyMenu>
            <ByCategory categoriesData={categories} activeItem />
            <ByTags tagsData={tags} withTitle />
          </StickyMenu>
        </Sidebar>
      </Grid>
    </>
  );
}

export default CategoryPosts;
