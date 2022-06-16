import { useState, useRef } from 'react';

import Navbar from './navbar';
import Menu from './menu';
import Logo from './logo';
import Search from './search';
import Dropdown from './dropdown';

import { headerMenuItems } from '../../../store/menu-items';

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
        <Navbar refNavbar={navTagRef}>
          <Menu onToggle={toggleMenuHandler} toggleState={toggle} />
          <Logo parentHeight={headerHeight} />
          <Search />
        </Navbar>

        <Dropdown
          menuItems={headerMenuItems}
          toggleState={toggle}
          onToggle={toggleMenuHandler}
        />
      </div>
    </header>
  );
}

export default Header;
