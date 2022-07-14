import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

function Login({ loginState, setFormData }) {
  const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <div className="mb-3">
        {label && (
          <label htmlFor={props.name || props.id} className="form-label">
            {label}
          </label>
        )}
        <input className="form-control" {...field} {...props} />
        {meta.touched && meta.error && (
          <span className="form-text">{meta.error}</span>
        )}
      </div>
    );
  };

  const CustomCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (
      <div className="mb-3">
        <label className="form-check-label" htmlFor={props.name || props.id}>
          <input
            className="form-check-input mx-1"
            type="checkbox"
            {...field}
            {...props}
          />
          {children}
        </label>
        {meta.touched && meta.error && (
          <span className="form-text">{meta.error}</span>
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
        setFormData(values);
      }}
    >
      <section
        className="container-fluid min-vh-100 d-flex align-items-center"
        style={{ backgroundColor: '#eee' }}
      >
        <div className="row g-2 m-auto">
          <Form className="row col-6 col-sm-4 bg-primary bg-opacity-25 border rounded p-3 m-auto">
            <CustomInput
              // label="username"
              name="username"
              id="username"
              type="text"
              placeholder="username"
            />
            <CustomInput
              // label="password"
              name="password"
              id="password"
              type="password"
              placeholder="password"
            />
            <CustomCheckbox name="remember" id="remember">
              Remember me
            </CustomCheckbox>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
          <div className="w-100 d-block"></div>
          {loginState.error && (
            <span className="col-auto alert alert-danger m-auto">
              {loginState.message}
            </span>
          )}
        </div>
      </section>
    </Formik>
  );
}

export default Login;
