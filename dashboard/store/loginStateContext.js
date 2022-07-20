import React, { useState } from 'react';

const tempalateFunction = () => {};

const initialSatate = {
  access: false,
  message: null,
  error: false,
  setLoginData: tempalateFunction,
};

export const LoginContext = React.createContext(initialSatate);

function LoginProvider({ children }) {
  const [accessState, setLoginData] = useState(initialSatate);

  return (
    <LoginContext.Provider
      value={{
        ...accessState,
        setLoginData,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
