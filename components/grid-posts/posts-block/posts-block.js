import Link from 'next/link';
import PrimaryButton from '../../ui/primary-button';

import styles from './posts-block.module.scss';

function PostsBlock({ children }) {
  return (
    <section className={styles.container}>
      {children}
      <Link href="#">
        <a>
          <PrimaryButton text="see all posts" />
        </a>
      </Link>
    </section>
  );
}

export default PostsBlock;
