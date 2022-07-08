import Posts from '../cards/posts';

import styles from './grid-posts.module.scss';

function GridPosts({ posts }) {
  const gridPosts = posts.map(post => (
    <Posts postData={post} key={post.slug} />
  ));

  return <section className={styles.container}>{gridPosts}</section>;
}

export default GridPosts;
