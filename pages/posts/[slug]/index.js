import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { getPostData, getPostsFiles } from '../../../lib/posts-utils';

function Post(props) {
  const { post } = props;
  const {
    category,
    content,
    date,
    image,
    imagesDimensions,
    slug,
    tags,
    title,
  } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const mainImagePath = `/${slug}/${image}`;
  const mainImageWidth = imagesDimensions[image].width;
  const mainImageHeight = imagesDimensions[image].height;

  const CustomImage = props => {
    const { node } = props;

    if (node.children[0].type === 'img') {
      const image = node.children[0];
      const src = image.props.src;
      const alt = image.props.alt;
      const filename = src.slice(src.lastIndexOf('/') + 1);
      const width = imagesDimensions[filename].width;
      const height = imagesDimensions[filename].height;

      return (
        <div
          style={{
            display: 'block',
          }}
        >
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
      );
    }

    return <p>{node.children}</p>;
  };

  const postTags = tags.map(tag => <span key={tag}>{tag}</span>);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/posts">Go to posts</Link>
      <time>{formattedDate}</time>
      <Image
        src={mainImagePath}
        alt={title}
        width={mainImageWidth}
        height={mainImageHeight}
      />
      <ReactMarkdown
        components={{
          p: node => <CustomImage src={node.src} alt={node.alt} node={node} />,
        }}
      >
        {content}
      </ReactMarkdown>
      <section>{postTags}</section>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
}

export async function getStaticPaths() {
  const postsFilenames = getPostsFiles();

  const slugs = postsFilenames.map(postFilename =>
    postFilename.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export default Post;
