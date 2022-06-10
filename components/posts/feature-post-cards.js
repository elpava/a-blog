import FeaturePostCard from './feature-post-card.js';

import styles from './posts.module.scss';

function FeaturePostsCards({ posts }) {
  const featuredPosts = posts.map(post => (
    <FeaturePostCard postData={post} key={post.slug} />
  ));

  return (
    <>
      <section className={styles.feature_container}>{featuredPosts}</section>
    </>
  );
}

export default FeaturePostsCards;
