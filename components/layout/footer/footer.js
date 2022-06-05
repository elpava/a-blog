import Logo from './logo';

import styles from './footer.module.scss';
import ItemsList from './items-list';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menu}>
          <ItemsList
            items={[
              { contact: '/contact' },
              { about: '/about' },
              { sitemap: '/sitemap' },
            ]}
          />
        </div>
        <div className={styles.social}>
          <ItemsList
            items={[
              { facebook: 'https://facebook.com' },
              { twitter: 'https://twitter.com' },
              { youtube: 'https://youtube.com' },
            ]}
          />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
