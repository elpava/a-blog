import Head from 'next/head';

import { getAllPosts } from '../../lib/posts-utils';

import Posts from '../../components/pages/posts';

function PostsPage(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Blog&apos;s Posts</title>
      </Head>

      <Posts postsData={posts} />
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

export default PostsPage;
