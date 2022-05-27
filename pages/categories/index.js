import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { getAllPostsByCategory } from '../../lib/posts-utils';

function Categories(props) {
  const { groupedPosts } = props;

  const PostCategory = props => {
    const { postsData } = props;

    const posts = postsData.map(post => {
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
          <div
            style={{ position: 'relative', width: '326px', height: '230px' }}
          >
            <Image
              src={postImage}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <time>{formattedDate}</time>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <Link href={postSlug}>Read more</Link>
        </section>
      );
    });

    return <>{posts}</>;
  };

  const postsCategory = groupedPosts.map(item => {
    const { category, slug } = item;
    const categorySlug = `/categories/${slug}`;

    return (
      <>
        <section style={{ border: '3px solid violet' }}>
          <Link href={categorySlug}>
            <a>
              <h1>{category}</h1>
            </a>
          </Link>
          <PostCategory postsData={item.posts} />
        </section>
      </>
    );
  });

  return (
    <>
      <Head>
        <title>Blog&apos;s Category</title>
      </Head>
      {postsCategory}
    </>
  );
}

export async function getStaticProps() {
  const allPostsByCategory = getAllPostsByCategory();

  return { props: { groupedPosts: allPostsByCategory } };
}

export default Categories;
