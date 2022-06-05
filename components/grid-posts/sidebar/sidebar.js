import ByCategory from './category';
import ByFeature from './feature';
import ByTags from './tags';

import styles from './sidebar.module.scss';

function Sidebar({ categories, featurePosts, tags }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sticky}>
        <ByCategory categoriesData={categories} />
        <ByFeature featurePostsData={featurePosts} />
        <ByTags tagsData={tags} />
      </div>
    </aside>
  );
}

export default Sidebar;
