import styles from './header.module.scss';
import ItemsList from './items-list';

function Submenu({ toggleState }) {
  return (
    <div className={styles.submenu}>
      {toggleState && (
        <div className={styles.container}>
          <div className={styles.page}>
            <span className={styles.title}>page</span>
            <ItemsList
              items={[
                { home: '/' },
                { posts: '/posts' },
                { category: '/category' },
              ]}
            />
          </div>

          <div className={styles.social}>
            <span className={styles.title}>social</span>
            <ItemsList
              items={[
                { facebook: 'https://facebook.com' },
                { twitter: 'https://twitter.com' },
                { youtube: 'https://youtube.com' },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Submenu;
