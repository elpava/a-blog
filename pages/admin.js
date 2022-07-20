import { useState, useEffect, useContext, useCallback } from 'react';
import { useRouter } from 'next/router';

import Admin from '../dashboard/components/pages/admin';
import { LoginContext } from '../dashboard/store/loginStateContext';

function AdminPage({ admin }) {
  const route = useRouter();
  const validAdminData = admin;
  const { access, message, error, setLoginData } = useContext(LoginContext);
  const [userData, setUserData] = useState(null);

  const memoizedCheckAccessState = useCallback(
    (userData, validAdminData) => {
      if (
        userData?.username === validAdminData.username &&
        userData?.password === validAdminData.password
      ) {
        setLoginData(prevState => ({
          ...prevState,
          access: true,
          message: 'Login successful.',
          error: false,
        }));
      } else {
        setLoginData(prevState => ({
          ...prevState,
          access: false,
          message: 'Login failed. Wrong username or password!',
          error: true,
        }));
      }
    },
    [setLoginData]
  );

  useEffect(() => {
    if (userData !== null) memoizedCheckAccessState(userData, validAdminData);
  }, [userData, validAdminData, memoizedCheckAccessState]);

  useEffect(() => {
    if (access) route.push('/dashboard');
  }, [access, route]);

  return <Admin loginState={{ error, message }} setLoginData={setUserData} />;
}

export async function getStaticProps() {
  const admin = {
    username: process.env.DASHBOARD_USERNAME,
    password: process.env.DASHBOARD_PASSWORD,
  };

  return {
    props: { admin },
  };
}

export default AdminPage;
