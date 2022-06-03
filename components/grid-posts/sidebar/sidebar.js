import ByCategory from './category';
import ByFeature from './feature';
import ByTags from './tags';

import styles from './sidebar.module.scss';

function Sidebar({ categories }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sticky}>
        <ByCategory categories={categories} />
        <ByFeature />
        <ByTags />
      </div>
    </aside>
  );
}

export default Sidebar;
