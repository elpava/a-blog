import Head from 'next/head';

import {
  getPostData,
  getAllPosts,
  getPostsFiles,
} from '../../../lib/posts-utils';

import Post from '../../../components/posts/post';

function SinglePost(props) {
  const { post, posts } = props;
  const { title } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Post postData={post} postsData={posts} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  const allPostsData = getAllPosts().slice(2, -1);

  return {
    props: {
      post: postData,
      posts: allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const postsFilenames = getPostsFiles();

  const slugs = postsFilenames.map(postFilename =>
    postFilename.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export default SinglePost;
