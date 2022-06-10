import { useState, useRef } from 'react';

import Menu from './menu';
import Logo from './logo';
import Search from './search';
import Dropdown from './dropdown';

import {
  dropdownMenuPageItems,
  dropdownMenuSocialItems,
} from '../../../store/dropdown-menu-items';

import useClickOutsideElement from '../../../hooks/useClickOutside';

import styles from './header.module.scss';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerTagRef = useRef();
  const { ref: navTagRef } = useClickOutsideElement(setToggle);

  const toggleMenuHandler = () => setToggle(prevState => !prevState);

  const onLoadHeaderHandler = e => setHeaderHeight(e.target.offsetHeight);

  // immediately hidden if we want going to click on menu items
  // const onMouseEnterDropdown = () => window.innerWidth > 900 && setToggle(true);
  // const onMouseLeaveDropdown = () => window.innerWidth > 900 && setToggle(false);

  return (
    <header className={styles.header} ref={headerTagRef}>
      <div className={styles.container} onLoad={onLoadHeaderHandler}>
        <nav className={styles.nav} ref={navTagRef}>
          <Menu onToggle={toggleMenuHandler} />
          <Logo parentHeight={headerHeight} />
          <Search />
        </nav>

        <Dropdown
          menuItems={{ dropdownMenuPageItems, dropdownMenuSocialItems }}
          toggleState={toggle}
          onToggle={toggleMenuHandler}
        />
      </div>
    </header>
  );
}

export default Header;
