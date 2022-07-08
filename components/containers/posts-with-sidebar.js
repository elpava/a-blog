import PostsBlock from '../cards/posts-block';
import Sidebar from './sidebar';
import StickyMenu from '../layout/sticky-menu';
import ByCategory from '../sidebar/category';
import ByFeature from '../sidebar/feature';
import ByTags from '../sidebar/tags';

import styles from './posts-with-sidebar.module.scss';

function PostsWithSidebar({
  posts,
  categories,
  categoriesActiveItem,
  featurePosts,
  tags,
}) {
  return (
    <section className={styles.container}>
      <PostsBlock posts={posts} />

      <Sidebar>
        <StickyMenu>
          {categories && (
            <ByCategory
              categoriesData={categories}
              activeItem={categoriesActiveItem}
            />
          )}
          {featurePosts && <ByFeature featurePostsData={featurePosts} />}
          {tags && <ByTags tagsData={tags} withTitle />}
        </StickyMenu>
      </Sidebar>
    </section>
  );
}

export default PostsWithSidebar;
