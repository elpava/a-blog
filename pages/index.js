import Head from 'next/head';
import Home from '../components/pages/home';

import { connectDatabase, getAllDocuments } from '../lib/mongodb-utils';

function HomePage(props) {
  const { data } = props;

  const allPosts = JSON.parse(data);

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Home allPosts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const client = await connectDatabase();

  let allPosts = await getAllDocuments(client, 'posts', {});
  allPosts = JSON.stringify(allPosts);

  client.close();

  return {
    props: {
      data: allPosts,
    },
  };
}

export default HomePage;
