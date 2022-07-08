import GridPosts from '../containers/grid-posts';
import FeaturePosts from '../containers/feature-posts';
import Subscribe from '../containers/subscribe';
import PostsWithSidebar from '../containers/posts-with-sidebar';

function Home({
  featuredPostsData,
  allPostsData,
  allCategroriesData,
  allTagsData,
}) {
  return (
    <>
      <FeaturePosts posts={featuredPostsData} />
      <GridPosts posts={allPostsData} />
      <Subscribe />
      <PostsWithSidebar
        posts={allPostsData}
        featurePosts={featuredPostsData}
        categories={allCategroriesData}
        tags={allTagsData}
      />
    </>
  );
}

export default Home;
