import PostCard from './post-card';

import styles from './post-cards.module.scss';

function PostCards({ posts }) {
  const postCards = posts.map(post => (
    <PostCard postData={post} key={post.slug} />
  ));

  return <section className={styles.container}>{postCards}</section>;
}

export default PostCards;
