import { useState } from 'react';

import Menu from './menu';
import Logo from './logo';
import Search from './search';
import Submenu from './submenu';

import styles from './header.module.scss';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const toggleMenuHandler = () => setToggle(prevState => !prevState);

  const onLoadHeaderHandler = e => setHeaderHeight(e.target.offsetHeight);

  return (
    <header className={styles.header}>
      <div className={styles.container} onLoad={onLoadHeaderHandler}>
        <nav className={styles.nav}>
          <Menu onToggle={toggleMenuHandler} />
          <Logo parentHeight={headerHeight} />
          <Search />
        </nav>
        <Submenu toggleState={toggle} />
      </div>
    </header>
  );
}

export default Header;
