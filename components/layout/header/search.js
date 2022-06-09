import { FaSearch } from 'react-icons/fa';

import styles from './header.module.scss';

function Search() {
  return (
    <form className={styles.search}>
      <input
        type="text"
        id="search"
        placeholder="SEARCH"
        className={styles.input_field}
      />
      <button className={styles.submit_button}>
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
