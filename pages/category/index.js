import Head from 'next/head';

import { getAllPostsByCategory } from '../../lib/posts-utils';

import Categories from '../../components/pages/categories';

function CategoriesPage(props) {
  const { categorizedPosts } = props;

  return (
    <>
      <Head>
        <title>Blog&apos;s Category</title>
      </Head>

      <Categories categorizedPostsData={categorizedPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPostsByCategory = getAllPostsByCategory();

  return { props: { categorizedPosts: allPostsByCategory } };
}

export default CategoriesPage;
