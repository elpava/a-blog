import { useState } from 'react';
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa';
import Button from '../ui/button';

import styles from './accordion.module.scss';

function Accordion({ title, children, onDeleteItems }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpenAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.accordion}>
      <div className={styles.title} onClick={handleOpenAccordion}>
        <span>{title}</span>
        {isOpen ? <FaChevronDown /> : <FaChevronLeft />}
      </div>
      {isOpen && (
        <div className={styles.content}>
          {children}
          <div className={styles.tools}>
            <Button action="delete" text="delete" onClick={onDeleteItems} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Accordion;
