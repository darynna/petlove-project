import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import loginImage from '../../assets/img/login.jpeg'; 

const LoginForm = () => {
  return (
      <div>
          <div>
              <img src={loginImage} alt="" />
          </div>
          <div>
          <h2>Log in</h2>
          <p>Welcome! Please enter your credentials to login to the platform:</p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
          </Formik>
          <div>Don’t have an account? <NavLink className="btn-register-color" to="register">Register</NavLink></div>
          </div>
          </div>
  );
};

export default LoginForm;
