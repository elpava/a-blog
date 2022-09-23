import Head from 'next/head';

import Category from '../../../components/pages/category';
import {
  connectDatabase,
  getChunkOfAllPosts,
  getValuseFromPostsFields,
} from '../../../lib/mongodb-utils';

import { capitalizeWords, unslugString } from '../../../lib/utils';

function CategoryPage(props) {
  const { data, slug } = props;
  const allPosts = JSON.parse(data);

  const categoryString = unslugString(slug);
  const title = capitalizeWords(categoryString);

  const filteredPostsByCategory = [];
  const allCategory = [];
  const allTags = [];

  allPosts.forEach(post => {
    const { category, tags } = post;

    if (category === categoryString) {
      filteredPostsByCategory.push(post);
    }

    allCategory.push(category);
    allTags.push(tags);
  });

  return (
    <>
      <Head>
        <title>{title} Category</title>
      </Head>

      <Category
        postsData={filteredPostsByCategory}
        category={title}
        categoriesData={allCategory}
        tagsData={allTags}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const client = await connectDatabase();

  let allPosts = await getChunkOfAllPosts(
    client,
    {},
    { isFeatured: 0, mostViewed: 0, imagesDimensions: 0 }
  );
  allPosts = JSON.stringify(allPosts);

  client.close();

  return {
    props: {
      data: allPosts,
      slug,
    },
  };
}

export async function getStaticPaths() {
  const client = await connectDatabase();

  const allUniqueCategorySlug = await getValuseFromPostsFields(
    client,
    'categorySlug'
  );

  client.close();

  const slugs = allUniqueCategorySlug.map(categorySlug => ({
    params: { slug: categorySlug },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
}

export default CategoryPage;
