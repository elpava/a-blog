import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

function Logo() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a>
          <Image
            src="/logo/logo-512.png"
            alt="logo png"
            width={80}
            height={80}
          />
          <h3>
            BLOG{' '}
            <em>
              <span>for more knowledge</span>
            </em>
          </h3>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
