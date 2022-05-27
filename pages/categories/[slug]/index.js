import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {
  getPostsByCategory,
  getMostViewedPosts,
} from '../../../lib/posts-utils';
import { capitalizeWords } from '../../../lib/utils';

function Category(props) {
  const { posts, slug } = props;
  if (!posts) {
    return <h3>Loading</h3>;
  }

  const titleTag = capitalizeWords(slug);

  const postsByCategory = posts.map(post => {
    const { date, excerpt, image, slug, title } = post;

    const postSlug = `/posts/${slug}`;
    const postImage = `/${slug}/${image}`;
    const formattedDate = new Date(date).toLocaleString('en-us', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    return (
      <section key={slug} style={{ borderBottom: '1px dashed red' }}>
        <div style={{ position: 'relative', width: '326px', height: '230px' }}>
          <Image src={postImage} alt={title} layout="fill" objectFit="cover" />
        </div>
        <time>{formattedDate}</time>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <Link href={postSlug}>continue...</Link>
      </section>
    );
  });

  return (
    <>
      <Head>
        <title>{titleTag} Category</title>
      </Head>
      {postsByCategory}
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const posts = getPostsByCategory(slug);

  return {
    props: { posts, slug },
  };
}

export async function getStaticPaths() {
  const mostViewedPosts = getMostViewedPosts();

  const slugs = mostViewedPosts.map(post => post.slug.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true,
  };
}

export default Category;
