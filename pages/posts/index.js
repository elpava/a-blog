import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { getAllPosts } from '../../lib/posts-utils';

function posts(props) {
  const { posts } = props;

  const AllPosts = props => {
    const { posts } = props;

    return posts.map(post => {
      const { date, excerpt, image, slug, title } = post;

      const postSlug = `/posts/${slug}`;
      const postImage = `${process.env.NEXT_PUBLIC_POST_IMAGE_FOLDER}/${slug}/${image}`;

      return (
        <section
          style={{
            border: '1px solid gray',
          }}
          key={slug}
        >
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
          <h2>{title}</h2>
          <h4>{excerpt}</h4>
          <time>{date}</time>
          <Link href={postSlug}>continue...</Link>
        </section>
      );
    });
  };

  return (
    <>
      <Head>
        <title>Blog&apos;s Posts</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default posts;
