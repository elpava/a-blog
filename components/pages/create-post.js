import { useState } from 'react';

import styles from './create-post.module.scss';

function CreatePost() {
  const [content, setContent] = useState('');

  function handle(e) {
    const text = e.currentTarget.value;

    setContent(text);
  }

  console.log('content :', content);

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.meta}>
          <label htmlFor="title">
            Title
            <input type="text" name="title" id="title" />
          </label>
          <label htmlFor="slug">
            Link
            <input type="text" name="slug" id="slug" />
          </label>
          <label className={styles.excerpt} htmlFor="excerpt">
            Excerpt
            <input type="text" name="excerpt" id="excerpt" />
          </label>
          <label className={styles.tags} htmlFor="tags">
            Tags
            <input type="text" name="tags" id="tags" />
          </label>
          <label className={styles.uploadimg} htmlFor="img">
            Upload Post Image
            <input type="file" name="img" id="img" />
          </label>
        </div>
        <div className={styles.data}>
          <p>Markdown Editor</p>
          <textarea onChange={handle} placeholder="type something" />
        </div>
        <button className={styles.submit}>Add Post</button>
      </form>
    </section>
  );
}

export default CreatePost;
