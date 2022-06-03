import Link from 'next/link';

import PostCard from '../../posts/post-card';

import styles from './posts-block.module.scss';

function PostsBlock({ posts }) {
  const gridPosts = posts
    .slice(-3)
    .map(post => <PostCard key={post.slug} postData={post} grid />);

  return (
    <section className={styles.grid}>
      {gridPosts}
      <Link href="/">
        <a className={styles.link}>See all posts</a>
      </Link>
    </section>
  );
}

export default PostsBlock;
