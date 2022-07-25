/* eslint-disable no-inner-declarations */
import { useEffect, useState } from 'react';

import styles from './table.module.scss';

function CmsTable({ tableData, onSelectedItems }) {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  let counter = 1;

  function handleAllSelect(e) {
    setIsCheckedAll(!isCheckedAll);
    setIsChecked(tableData.map(item => item._id));
    if (isCheckedAll) setIsChecked([]);
  }

  function handleIsChecked(e) {
    const { dataset, checked } = e.target;
    const { id: elementId } = dataset;
    setIsChecked([...isChecked, elementId]);

    if (!checked) setIsChecked(isChecked.filter(id => id !== elementId));
  }

  useEffect(() => {
    onSelectedItems(isChecked);
  }, [onSelectedItems, isChecked]);

  const tableRows = tableData.map(form => (
    <tr key={form._id}>
      <td>{counter++}</td>
      <td>{form.name}</td>
      <td>{form.email}</td>
      <td>{form.message}</td>
      <td>
        <input
          type="checkbox"
          data-id={form._id}
          onChange={handleIsChecked}
          checked={isChecked.includes(form._id)}
        />
      </td>
    </tr>
  ));

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
            <th>message</th>
            <th>
              <input
                type="checkbox"
                onChange={handleAllSelect}
                checked={isCheckedAll}
              />
            </th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
}

export default CmsTable;
