import Login from './login';

function Dashboard({ loginState, setLoginData }) {
  const login = loginState.access ? (
    <p>success</p>
  ) : (
    <Login loginState={loginState} setFormData={setLoginData} />
  );
  return <>{login}</>;
}

export default Dashboard;
