import Head from 'next/head';

import { connectDatabase, getChunkOfAllPosts } from '../../lib/mongodb-utils';

import Posts from '../../components/pages/posts';

function PostsPage(props) {
  const { data } = props;
  const allPosts = JSON.parse(data);

  return (
    <>
      <Head>
        <title>Blog&apos;s Posts</title>
      </Head>

      <Posts postsData={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const client = await connectDatabase();

  let allPosts = await getChunkOfAllPosts(
    client,
    {},
    { category: 1, categorySlug: 1, date: 1, image: 1, slug: 1, title: 1 }
  );

  allPosts = JSON.stringify(allPosts);

  client.close();

  return {
    props: {
      data: allPosts,
    },
  };
}

export default PostsPage;
