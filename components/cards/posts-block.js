import { useState } from 'react';

import Posts from './posts';
import PrimaryButton from '../ui/primary-button';

import styles from './posts-block.module.scss';

function PostsColumn({ posts }) {
  const [endSlice, setEndSlice] = useState(3);
  const copiedPosts = JSON.parse(JSON.stringify(posts));
  const slicedPosts = copiedPosts.splice(0, endSlice);
  const generatedPosts = slicedPosts.map(post => (
    <Posts key={post._id} postData={post} grid />
  ));
  const showButton = endSlice < posts.length;

  function showAdditionalPostsHandler() {
    setEndSlice(prevState => prevState + 3);
  }

  return (
    <section className={styles.container}>
      <div className="block">{generatedPosts}</div>
      {showButton && (
        <PrimaryButton
          text="see all posts"
          onClick={showAdditionalPostsHandler}
        />
      )}
    </section>
  );
}

export default PostsColumn;
