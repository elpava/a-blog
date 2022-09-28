/* eslint-disable no-unused-vars */
import { useState } from 'react';
import useSWR from 'swr';
import { keyFetcher } from '../../../lib/utils';

import Accordion from '../layout/accordion';
import CmsTable from '../ui/table';

import styles from './forms.module.scss';

function Forms() {
  const { data } = useSWR(
    '/api/data?action=query&doc=contact-forms',
    keyFetcher
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
