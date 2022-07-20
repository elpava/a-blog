import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import styles from './admin.module.scss';

function Admin({ loginState, setLoginData }) {
  const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <div className="">
        {label && (
          <label htmlFor={props.name || props.id} className="">
            {label}
          </label>
        )}
        <input className="" {...field} {...props} />
        {meta.touched && meta.error && (
          <span className={styles.error}>{meta.error}</span>
        )}
      </div>
    );
  };

  const CustomCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
      <div className="">
        <label className="" htmlFor={props.name || props.id}>
          <input className="" type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error && (
          <span className={styles.error}>{meta.error}</span>
        )}
      </div>
    );
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string().required('Is required'),
        password: Yup.string()
          .min(6, 'Must be above 6 characters.')
          .required('Is required'),
      })}
      onSubmit={values => {
        setLoginData(values);
      }}
    >
      <section className={styles.container}>
        <Form className={styles.form}>
          <CustomInput
            // label="Username"
            name="username"
            id="username"
            type="text"
            placeholder="username"
          />
          <CustomInput
            // label="Password"
            name="password"
            id="password"
            type="password"
            placeholder="password"
          />
          <CustomCheckbox name="remember" id="remember">
            Remember me
          </CustomCheckbox>

          <button type="submit" className="">
            Submit
          </button>
        </Form>

        {loginState.error && <div className="">{loginState.message}</div>}
      </section>
    </Formik>
  );
}

export default Admin;
