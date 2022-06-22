import { FaSearch } from 'react-icons/fa';

import styles from './search.module.scss';

function Search({ hideOnDesktop }) {
  let classes = null;

  classes = hideOnDesktop ? styles.switch : '';

  return (
    <form className={`${styles.field} ${classes}`}>
      <input
        type="text"
        id="search"
        placeholder="SEARCH"
        className={styles.input}
      />
      <button className={styles.submit}>
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
