import Head from 'next/head';
import GridPosts from '../components/grid-posts/grid-posts';

import FeaturePostsCards from '../components/posts/feature-post-cards';
import PostCards from '../components/posts/post-cards';
import Subscribe from '../components/subscribe';

import { getFeaturedPosts, getAllPosts, getAllTags } from '../lib/posts-utils';

function HomePage(props) {
  const { featuredPosts, allPosts, allTags } = props;

  return (
    <>
      <Head>
        <title>Blog&apos;s Posts</title>
      </Head>
      <main>
        <FeaturePostsCards posts={featuredPosts} />
        <PostCards posts={allPosts} />
        <Subscribe />
        <GridPosts
          posts={allPosts}
          featurePosts={featuredPosts}
          tags={allTags}
        />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  const allTags = getAllTags();

  return {
    props: { featuredPosts, allPosts, allTags },
  };
}

export default HomePage;
