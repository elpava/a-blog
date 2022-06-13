import Link from 'next/link';

import styles from './tags.module.scss';

function ByTags({ tagsData }) {
  const uniqueTags = [...new Set(tagsData.flat(1))];

  const tags = uniqueTags.map(tag => (
    <Link href={`/tags/${tag.replace(' ', '-')}`} key={tag}>
      <a>
        <span>{tag}</span>
      </a>
    </Link>
  ));

  return (
    <div className={styles.tags}>
      <h4 className={styles.title}>Tags</h4>
      {tags}
    </div>
  );
}

export default ByTags;
