import FeaturePostCard from '../cards/feature-post.js';

import styles from './feature-posts.module.scss';

function FeaturePosts({ posts }) {
  const featuredPosts = posts.map(post => (
    <FeaturePostCard postData={post} key={post._id} />
  ));

  return <section className={styles.container}>{featuredPosts}</section>;
}

export default FeaturePosts;
