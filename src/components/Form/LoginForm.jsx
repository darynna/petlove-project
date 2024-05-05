import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import loginImageDesktop from '../../assets/img/login-desktop.jpeg'; 
import loginImageTablet from "../../assets/img/login-tablet.jpeg";
import loginImagePhone from "../../assets/img/login-phone.jpeg";
import { Image, ImgWrap, MainFormWrap, FormWrap } from './Form.styled';
import { apiUserLogin } from '../../redux/Auth/authSlice';

const LoginForm = () => {
   const dispatch = useDispatch();
  return (
      <MainFormWrap>
           <ImgWrap>
        <Image src={loginImageDesktop} alt="Registration" className="desktop-image" />
        <Image src={loginImageTablet} alt="Registration" className="tablet-image" />
        <Image src={loginImagePhone} alt="Registration" className="phone-image" />
          </ImgWrap>
          <FormWrap>
          <h2 className='headline'>Log in</h2>
          <p className='text'>Welcome! Please enter your credentials to login to the platform:</p>
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
          const formData = { email: values.email, password: values.password };
      dispatch(apiUserLogin(formData));
            setSubmitting(false);
        }}
      >
        <Form>
          <div>
            <Field className="input" type="email" name="email" placeholder="Email"/>
            <ErrorMessage className='message-error' name="email" component="div" />
          </div>

          <div>
            <Field className="input" type="password" name="password" placeholder="Password"/>
            <ErrorMessage className='message-error' name="password" component="div" />
          </div>

          <button className='btn-register' type="submit">LOG IN</button>
        </Form>
          </Formik>
          <div className='text-change'>Don’t have an account? <NavLink className="change-link" to="register">Register</NavLink></div>
          </FormWrap>
          </MainFormWrap>
  );
};

export default LoginForm;
