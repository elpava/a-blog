import { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { keyFetcher } from '../../../lib/utils';

import useClickOutsideElement from '../../../hooks/useClickOutside';

import { FaSearch } from 'react-icons/fa';

import styles from './search.module.scss';

function Search({ hideOnDesktop }) {
  const { data } = useSWR(
    '/api/data?action=query&doc=articles&fields=title,slug',
    keyFetcher
  );
  const [search, setSearch] = useState('');
  const { ref: showResultRef } = useClickOutsideElement(
    handleCloseSearchResult
  );
  let classes = null;
  let matchedResults = [];
  let showResult = [];

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
  }

  if (data) {
    if (search.length > 1) {
      matchedResults = Object.values(data.result).filter(post =>
        post.title.toLowerCase().includes(search)
      );
    }

    showResult = matchedResults.map(post => (
      <li key={post._id} onClick={handleCloseSearchResult}>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </li>
    ));
  }

  function handleCloseSearchResult() {
    setSearch('');
  }

  classes = hideOnDesktop ? styles.switch : '';

  return (
    <div className={`${styles.field} ${classes}`} ref={showResultRef}>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          id="search"
          placeholder="SEARCH"
          className={styles.input}
          onChange={handleSearch}
          value={search}
        />
        <button className={styles.submit}>
          <FaSearch />
        </button>
      </form>
      {showResult.length > 0 && <ul>{showResult}</ul>}
    </div>
  );
}

export default Search;
