import { useState } from 'react';
import { FaSearch, FaTh } from 'react-icons/fa';

import c from './header.module.scss';

function Header() {
  const [toggle, setToggle] = useState(false);

  const onToggleClickHandler = () => setToggle(prevState => !prevState);

  return (
    <header className={c.header}>
      <div className={c.container}>
        <nav className={c.nav}>
          <button className="" onClick={onToggleClickHandler}>
            <FaTh />
            <span>Menu</span>
          </button>

          <div>
            <h2>blog</h2>
          </div>

          <form>
            <label htmlFor="search">
              <FaSearch />
              <input type="text" id="search" placeholder="SEARCH" />
            </label>
          </form>
        </nav>

        <div className={c.submenu}>
          {toggle && (
            <div className="">
              <span>page</span>
              <ul>
                <li>home</li>
                <li>posts</li>
                <li>contact</li>
                <li>about</li>
              </ul>

              <span>social</span>
              <ul>
                <li>facebook</li>
                <li>twitter</li>
                <li>youtube</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
