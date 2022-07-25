import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginContext } from '../../store/loginStateContext';

import Forms from './forms';

function Dashboard() {
  const route = useRouter();
  const { access, message, error, setLoginData } = useContext(LoginContext);
  const tempAcces = true;

  useEffect(() => {
    // if (access) route.push('/admin');
  }, [access, route]);

  const component = (
    <>
      <Forms />
    </>
  );

  return (
    <>
      {tempAcces ? component : <h3 style={{ margin: '1rem' }}>Redirect...</h3>}
    </>
  );
}

export default Dashboard;
