import FeaturePostCard from './feature-post-card.js';

import styles from './feature-post-cards.module.scss';

function FeaturePostsCards({ posts }) {
  const featuredPosts = posts.map(post => (
    <FeaturePostCard postData={post} key={post.slug} />
  ));

  return <section className={styles.container}>{featuredPosts}</section>;
}

export default FeaturePostsCards;
