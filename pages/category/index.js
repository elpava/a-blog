import Head from 'next/head';

import { getAllPostsByCategory } from '../../lib/posts-utils';

import CategoryPosts from '../../components/category-posts/category-posts';

function Categories(props) {
  const { groupedPosts } = props;
  return (
    <>
      <Head>
        <title>Blog&apos;s Category</title>
      </Head>
      <CategoryPosts groupedPosts={groupedPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPostsByCategory = getAllPostsByCategory();

  return { props: { groupedPosts: allPostsByCategory } };
}

export default Categories;
