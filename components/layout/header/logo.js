import Image from 'next/image';
import Link from 'next/link';

import useScrollPosition from '../../../hooks/useScrollPosition';

import styles from './header.module.scss';

function Logo({ parentHeight }) {
  const postition = useScrollPosition();

  const classes =
    postition > parentHeight
      ? `${styles.default} ${styles.small}`
      : `${styles.default}`;

  return (
    <div className={styles.logo}>
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
