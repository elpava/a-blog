import Link from 'next/link';
import Posts from './posts';
import PrimaryButton from '../ui/primary-button';

import styles from './posts-block.module.scss';

function PostsBlock({ posts }) {
  const gridPosts = posts
    .slice(-3)
    .map(post => <Posts key={post.slug} postData={post} grid />);

  return (
    <section className={styles.container}>
      <div className="block">{gridPosts}</div>
      <Link href="#">
        <a>
          <PrimaryButton text="see all posts" />
        </a>
      </Link>
    </section>
  );
}

export default PostsBlock;
