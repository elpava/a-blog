import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';

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
            Blog <em>for more knowledge</em>
          </h3>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
