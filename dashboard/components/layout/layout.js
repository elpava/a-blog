import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo/logo-512.png';
import { FaChevronRight, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

import styles from './layout.module.scss';

const menuItems = ['posts', 'users', 'forms'];

function Layout({ children }) {
  const [active, setActive] = useState(null);

  const menus = menuItems.map((item, i) => (
    <li
      key={item}
      onClick={() => setActive(i)}
      className={`${menuItems[active] === item ? styles.active : ''}`}
    >
      <Link href={`/dashboard/${item}`}>
        <a>
          <FaChevronRight
            size=".8rem"
            style={{ marginRight: '.3rem' }}
            color={`${menuItems[active] === item ? 'white' : ''}`}
          />
          {item}
        </a>
      </Link>
    </li>
  ));

  return (
    <section className={styles.container}>
      <aside className={styles.sidenav}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width="40" height="40" />
          <span>Dashboard</span>
        </div>

        <hr />

        <nav>
          <ul>{menus}</ul>
        </nav>

        <hr />

        <div className={styles.logout}>
          <FaUserCircle />
          <span>Logout</span>
          <FaSignOutAlt className={styles.signout} />
        </div>
      </aside>

      <section className={styles.content}>{children}</section>
    </section>
  );
}

export default Layout;
