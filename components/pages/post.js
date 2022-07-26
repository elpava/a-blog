import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import ByTags from '../sidebar/tags';
import CategoryLable from '../ui/category-label';
import CustomImage from '../ui/custom-image-tag';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import GridPosts from '../containers/grid-posts';

import styles from './post.module.scss';

function Post({ postsData, postData }) {
  const {
    category,
    content,
    date,
    image,
    imagesDimensions,
    slug,
    tags,
    title,
  } = postData;

  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const mainImagePath = `/posts/${slug}/${image}`;
  const mainImageWidth = imagesDimensions[image].width;
  const mainImageHeight = imagesDimensions[image].height;

  return (
    <>
      <div className={styles.hero}>
        <Image
          src={mainImagePath}
          alt={title}
          width={mainImageWidth}
          height={mainImageHeight}
          className={styles.hero}
        />
      </div>

      <section className={styles.container}>
        <section className={styles.content}>
          <div className={styles.header}>
            <CategoryLable data={{ text: category, slug: category }} />
            <time>{formattedDate}</time>
          </div>

          <h1 className={styles.title}>{title}</h1>

          <article className={styles.article}>
            <ReactMarkdown
              components={{
                p: node => (
                  <CustomImage node={node} dimensions={imagesDimensions} />
                ),
              }}
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </ReactMarkdown>
          </article>

          <Link href="/posts">
            <a className={styles.return}>
              <FaRegArrowAltCircleLeft />
              Go to posts
            </a>
          </Link>

          <ByTags tagsData={tags} />
        </section>
      </section>

      <GridPosts posts={postsData} />
    </>
  );
}

export default Post;
