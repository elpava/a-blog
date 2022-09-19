import Head from 'next/head';

import { connectDatabase, getChunkOfAllPosts } from '../../lib/mongodb-utils';

import Categories from '../../components/pages/categories';

function CategoriesPage(props) {
  const { data } = props;
  const allPosts = JSON.parse(data);

  return (
    <>
      <Head>
        <title>Posts Category</title>
      </Head>

      <Categories allPosts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const client = await connectDatabase();
  let data = await getChunkOfAllPosts(
    client,
    {},
    { category: 1, categorySlug: 1, date: 1, image: 1, slug: 1, title: 1 }
  );
  data = JSON.stringify(data);

  return { props: { data } };
}

export default CategoriesPage;
