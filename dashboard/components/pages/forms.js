/* eslint-disable no-inner-declarations */
import { useState } from 'react';
import useSWR from 'swr';
import Accordion from '../layout/accordion';

import CmsTable from '../ui/table';

import styles from './forms.module.scss';

const fetcher = url => fetch(url).then(res => res.json());

function Forms() {
  const { data, error } = useSWR(
    '/api/data?action=query&doc=contact-forms',
    fetcher
  );
  const [selectedIds, setSelectedIds] = useState(null);
  let component = <h3>Loading...</h3>;

  async function handleDeleteItems() {
    const ids = selectedIds;
    const response = await fetch(`/api/data?action=delete&doc=contact-forms`, {
      method: 'POST',
      body: JSON.stringify(ids),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());

    console.log(response);
  }

  if (data) {
    const { result } = data;

    if (result) {
      component = (
        <Accordion title="contact forms" onDeleteItems={handleDeleteItems}>
          <CmsTable tableData={result} onSelectedItems={setSelectedIds} />
        </Accordion>
      );
    }
  }

  return <>{component}</>;
}

export default Forms;
