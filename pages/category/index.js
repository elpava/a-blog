import Head from 'next/head';

import { getAllPostsByCategory } from '../../lib/posts-utils';

import CategorizedPosts from '../../components/category-posts/categorized-posts';

function Categories(props) {
  const { categorizedPosts } = props;
  return (
    <>
      <Head>
        <title>Blog&apos;s Category</title>
      </Head>

      <CategorizedPosts categorizedPosts={categorizedPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPostsByCategory = getAllPostsByCategory();

  return { props: { categorizedPosts: allPostsByCategory } };
}

export default Categories;
