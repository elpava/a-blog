import Link from 'next/link';

import styles from './posts-block.module.scss';

function PostsBlock({ children }) {
  return (
    <section className={styles.container}>
      {children}
      <Link href="/">
        <a className={styles.link}>See All Posts</a>
      </Link>
    </section>
  );
}

export default PostsBlock;
