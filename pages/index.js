import Head from 'next/head';
import Home from '../components/pages/home';

import {
  getFeaturedPosts,
  getAllPosts,
  getAllPostsCategoryName,
  getAllTags,
} from '../lib/posts-utils';

function HomePage(props) {
  const { featuredPosts, allPosts, allPostsCategoryName, allTags } = props;

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Home
        featuredPostsData={featuredPosts}
        allPostsData={allPosts}
        allCategroriesData={allPostsCategoryName}
        allTagsData={allTags}
      />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  const allPostsCategoryName = getAllPostsCategoryName();
  const allTags = getAllTags();

  return {
    props: { featuredPosts, allPosts, allPostsCategoryName, allTags },
  };
}

export default HomePage;
