import { useEffect, useState } from 'react';
import Dashboard from '../dashboard/components/dashboard';

function AdminPage({ admin }) {
  const validAdminData = admin;
  const [accessState, setAccessState] = useState({
    access: false,
    message: null,
    error: false,
  });
  const [adminData, setAdminData] = useState(null);

  function checkAccessState(adminData, validAdminData) {
    if (
      adminData?.username === validAdminData.username &&
      adminData?.password === validAdminData.password
    )
      setAccessState({
        access: true,
        message: 'Login successful.',
        error: false,
      });
    else
      setAccessState({
        access: false,
        message: 'Login failed. Wrong username or password!',
        error: true,
      });
  }

  useEffect(() => {
    if (adminData !== null) checkAccessState(adminData, validAdminData);
  }, [adminData, validAdminData]);

  return <Dashboard loginState={accessState} setLoginData={setAdminData} />;
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
