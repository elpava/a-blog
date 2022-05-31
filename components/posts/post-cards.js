import PostCard from './post-card';

import styles from './posts.module.scss';

function PostCards({ posts }) {
  const postCards = posts.map(post => (
    <PostCard postData={post} key={post.slug} />
  ));

  return <section className={styles.posts_container}>{postCards}</section>;
}

export default PostCards;
