import Link from 'next/link';

function MenuItem({ items = [] }) {
  const lists = items.map(item => {
    const { name, path } = item;

    return (
      <li key={name}>
        <Link href={path}>{name}</Link>
      </li>
    );
  });

  return <>{lists}</>;
}

export default MenuItem;
