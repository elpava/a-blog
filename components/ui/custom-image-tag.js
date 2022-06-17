import Image from 'next/image';

import styles from './custom-image-tag.module.scss';

function CustomImage(props) {
  const { node, dimensions } = props;

  if (node.children[0].type === 'img') {
    const image = node.children[0];
    const src = image.props.src;
    const alt = image.props.alt;
    const filename = src.slice(src.lastIndexOf('/') + 1);
    const width = dimensions[filename].width;
    const height = dimensions[filename].height;

    return (
      <div className={styles.image}>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    );
  }

  return <p>{node.children}</p>;
}

export default CustomImage;
