import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import registrationImage from '../../assets/img/registration.jpeg'; 

export const RegisterForm = () => {
  return (
      <div>
          <div>
              <img src={registrationImage} alt="" />
          </div>
          <div>
          <h2>Registration</h2>
          <p>Thank you for your interest in our platform.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Enter a valid name'),
          email: Yup.string().email('Invalid email address').required('Enter a valid email'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Enter a valid password'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Repeat password'),
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
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

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

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
          </Formik>
              <div>Already have an account? <NavLink className="btn-register-color" to="login">Login</NavLink></div>
              </div>
    </div>
  );
};

export default RegisterForm;
