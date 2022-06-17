import Grid from './grid';
import PostsBlock from './posts-block/posts-block';
import Sidebar from './sidebar/sidebar';
import StickyMenu from '../layout/sticky-menu';
import ByCategory from './sidebar/category';
import ByFeature from './sidebar/feature';
import ByTags from './sidebar/tags';
import Posts from './posts-block/posts';

function GridPosts({ posts, featurePosts, tags }) {
  const categories = posts.map(post => post.category);

  return (
    <Grid>
      <PostsBlock>
        <Posts posts={posts} />
      </PostsBlock>

      <Sidebar>
        <StickyMenu>
          <ByCategory categoriesData={categories} />
          <ByFeature featurePostsData={featurePosts} />
          <ByTags tagsData={tags} withTitle />
        </StickyMenu>
      </Sidebar>
    </Grid>
  );
}

export default GridPosts;
