import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useScrollPosition from '../../../hooks/useScrollPosition';

import styles from './logo.module.scss';

function Logo({ parentHeight }) {
  const { asPath: path } = useRouter();
  const postition = useScrollPosition();
  const isHomepage = path === '/';

  const classes =
    isHomepage && postition < parentHeight
      ? `${styles.default} ${styles.large}`
      : `${styles.default}`;

  return (
    <div className={styles.block}>
      <Link href="/">
        <a className={classes}>
          <Image src="/logo/logo-512.png" alt="logo" width={100} height={100} />
          <span className={styles.text}>BLOG</span>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
