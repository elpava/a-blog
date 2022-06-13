import Head from 'next/head';

import CategoryPosts from '../../../components/category-posts/category-posts';

import {
  getPostsByCategory,
  getAllPostsCategorySlug,
  getAllPostsCategoryName,
  getAllTags,
} from '../../../lib/posts-utils';
import { capitalizeWords } from '../../../lib/utils';

function Category(props) {
  const { allTags, allPostsCategoryName, postsByCategory, slug } = props;

  const title = capitalizeWords(slug);

  return (
    <>
      <Head>
        <title>{title} Category</title>
      </Head>

      <CategoryPosts
        posts={postsByCategory}
        category={title}
        categories={allPostsCategoryName}
        tags={allTags}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postsByCategory = getPostsByCategory(slug);
  const allPostsCategoryName = getAllPostsCategoryName();
  const allTags = getAllTags();

  return {
    props: { allTags, allPostsCategoryName, postsByCategory, slug },
  };
}

export async function getStaticPaths() {
  const allPostsCategorySlug = getAllPostsCategorySlug();

  const slugs = allPostsCategorySlug.map(category => ({
    params: { slug: category },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
}

export default Category;
