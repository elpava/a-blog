import Head from 'next/head';

import {
  connectDatabase,
  getChunkOfAllPosts,
  getPost,
  getValuseFromPostsFields,
} from '../../../lib/mongodb-utils';

import Post from '../../../components/pages/post';

function SinglePost(props) {
  const { data, morePosts } = props;
  const post = JSON.parse(data);
  const prevAndNextThePost = JSON.parse(morePosts);
  const { title } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Post postData={post} postsData={prevAndNextThePost} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const client = await connectDatabase();

  let post = await getPost(client, { slug });
  const { postId } = post;

  let prevAndNextThePost = await getChunkOfAllPosts(
    client,
    { postId: { $in: [postId - 1, postId + 1] } },
    { category: 1, categorySlug: 1, date: 1, image: 1, title: 1, slug: 1 }
  );

  prevAndNextThePost = JSON.stringify(prevAndNextThePost);
  post = JSON.stringify(post);

  return {
    props: {
      data: post,
      morePosts: prevAndNextThePost,
    },
  };
}

export async function getStaticPaths() {
  const client = await connectDatabase();
  const allUniquePostsSlug = await getValuseFromPostsFields(client, 'slug');

  const slugs = allUniquePostsSlug.map(slug => ({
    params: { slug },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
}

export default SinglePost;
