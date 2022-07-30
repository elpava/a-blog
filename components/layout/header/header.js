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
  const { ref: dropdownRef } = useClickOutsideElement(setToggle);

  const toggleMenuHandler = () => setToggle(prevState => !prevState);

  const onLoadHeaderHandler = e => setHeaderHeight(e.target.offsetHeight);

  return (
    <header className={styles.header} ref={headerTagRef}>
      <div className={styles.container} onLoad={onLoadHeaderHandler}>
        <Navbar>
          <Menu onToggle={toggleMenuHandler} toggleState={toggle} />
          <Logo parentHeight={headerHeight} />
          <Search />
        </Navbar>

        <Dropdown
          menuItems={headerMenuItems}
          toggleState={toggle}
          onToggle={toggleMenuHandler}
          dropdownRef={dropdownRef}
        />
      </div>
    </header>
  );
}

export default Header;
