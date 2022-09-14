import GridPosts from '../containers/grid-posts';
import FeaturePosts from '../containers/feature-posts';
import Subscribe from '../containers/subscribe';
import PostsWithSidebar from '../containers/posts-with-sidebar';

function Home({ allPosts }) {
  const featuredPostsData = [];
  const allCategroriesName = [];
  const allTagsData = [];

  allPosts.forEach(post => {
    if (post.isFeatured) featuredPostsData.push(post);

    if (!allCategroriesName.includes(post.category)) {
      allCategroriesName.push(post.category);
    }

    allTagsData.push(post.tags);
  });

  return (
    <>
      <FeaturePosts posts={featuredPostsData} />
      <GridPosts posts={allPosts} />
      <Subscribe />
      <PostsWithSidebar
        posts={allPosts}
        featurePosts={featuredPostsData}
        categories={allCategroriesName}
        tags={allTagsData}
      />
    </>
  );
}

export default Home;
