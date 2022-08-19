import Head from 'next/head';
import { getSession } from 'next-auth/react';

import CreatePost from '../components/pages/create-post';

function CreatePostPage() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
      </Head>
      <CreatePost />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default CreatePostPage;
