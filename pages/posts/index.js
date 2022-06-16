import Head from 'next/head';

import { getAllPosts } from '../../lib/posts-utils';

import PostCards from '../../components/posts/post-cards';

function posts(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Blog&apos;s Posts</title>
      </Head>

      <PostCards posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default posts;
