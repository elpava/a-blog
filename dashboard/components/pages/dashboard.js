import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginContext } from '../../store/loginStateContext';

function Dashboard() {
  const route = useRouter();
  const { access, message, error, setLoginData } = useContext(LoginContext);
  const tempAcces = true;

  useEffect(() => {
    // if (access) route.push('/admin');
  }, [access, route]);

  const component = (
    <button
      type="submit"
      onClick={() =>
        setLoginData(prevState => ({
          ...prevState,
          access: false,
          error: false,
          message: null,
        }))
      }
    >
      Logout
    </button>
  );

  return (
    <>
      {tempAcces ? component : <h3 style={{ margin: '1rem' }}>Redirect...</h3>}
    </>
  );
}

export default Dashboard;
