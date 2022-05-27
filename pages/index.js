import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { getFeaturedPosts } from '../lib/posts-utils';

function HomePage(props) {
  const { posts } = props;

  const featuredPosts = posts.map(post => {
    const { date, excerpt, image, slug, title } = post;

    const postSlug = `/posts/${slug}`;
    const postImage = `/${slug}/${image}`;

    return (
      <>
        <Head>
          <title>Blog&apos;s Posts</title>
        </Head>
        <section
          style={{
            border: '1px solid salomon',
          }}
          key={slug}
        >
          <div
            style={{ position: 'relative', width: '300px', height: '165px' }}
          >
            <Image
              src={postImage}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2>{title}</h2>
          <h4>{excerpt}</h4>
          <time>{date}</time>
          <Link href={postSlug}>continue...</Link>
        </section>
      </>
    );
  });

  return <>{featuredPosts}</>;
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: { posts: featuredPosts },
  };
}

export default HomePage;
