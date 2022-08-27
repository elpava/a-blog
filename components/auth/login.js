import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';

import styles from './login.module.scss';

async function createUser(username, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Something went wrong!');

  return data;
}

async function signInRequest(username, password, applyFn) {
  const signInResult = await signIn('credentials', {
    redirect: false,
    username: username.toLowerCase(),
    password,
  });

  if (signInResult.status === 200) {
    setTimeout(() => {
      applyFn();
    }, 2500);
  }

  return signInResult;
}

const Alert = function ({ errors, touched }) {
  const errorKeys = Object.keys(errors);

  touched.samePassword = true;
  const errorsList = errorKeys.map(
    err =>
      touched[err] && (
        <li key={err}>{`${
          err === 'confirmPassword'
            ? 'confirm password'
            : err === 'samePassword'
            ? 'passwords'
            : err
        } ${errors[err]}`}</li>
      )
  );

  return <ul>{errorsList}</ul>;
};

function Login({ closeForm, showNotification }) {
  const [isSignup, setIsSignup] = useState(false);
  let signInStatus;

  const initialFields = { username: '', password: '' };
  const validateByYup = {
    username: Yup.string().required('is required'),
    password: Yup.string()
      .required('is required')
      .min(6, 'must be above 6 characters'),
  };

  if (isSignup) {
    initialFields.confirmPassword = '';
    validateByYup.confirmPassword = Yup.string()
      .required('is required')
      .min(6, 'must be above 6 characters');
  }

  const validate = values => {
    const { password, confirmPassword } = values;
    const errors = {};

    if (confirmPassword?.length > 5) {
      if (password !== confirmPassword) errors.samePassword = 'are not same';
      else {
        delete errors.samePassword;
      }
    }

    return errors;
  };

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialFields,
      validationSchema: Yup.object(validateByYup),
      validate,
      onSubmit: async values => {
        const { username, password } = values;

        if (isSignup) {
          try {
            const res = await createUser(username, password);
            const { result } = res;

            if (!result) return;

            showNotification({
              status: 'success',
              message: 'The new account created.',
            });

            signInStatus = await signInRequest(
              result.username,
              result.password,
              closeForm
            );

            if (result.status === 401) {
              showNotification({ status: 'error', message: result.error });
            }

            console.log(signInStatus);
          } catch (err) {
            console.log(err);
          }
        } else {
          signInStatus = await signInRequest(username, password, closeForm);

          if (signInStatus.status === 401) {
            showNotification({
              status: 'warning',
              message: 'The user not found, first register please',
            });
          } else if (signInStatus.status === 200) {
            showNotification({
              status: 'success',
              message: 'Welcome ' + username,
            });
          }
          console.log(signInStatus);
        }
      },
    });

  function handleToggle() {
    setIsSignup(!isSignup);
  }

  const classes = isSignup ? styles.signup : null;

  return (
    <>
      <div className={styles.block}>
        <div className={styles.toggle} onClick={handleToggle}>
          {isSignup
            ? 'If You have an account please login'
            : "If you don't have any account please register"}
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword || ''}
            />
          )}
          <button type="submit" className={classes}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        {Object.keys(errors).length > 0 && (
          <div className={styles.alert}>
            <Alert errors={errors} touched={touched} />
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
