import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import registrationImageDesktop from '../../assets/img/registration-desktop.jpeg'; 
import registrationImageTablet from "../../assets/img/registration-tablet.jpeg"
import registrationImagePhone from "../../assets/img/registration-phone.jpeg";
import { Image, ImgWrap, MainFormWrap, FormWrap } from './Form.styled';
import { apiUserRegister } from '../../redux/Auth/authSlice';
import { useDispatch} from "react-redux";

export const RegisterForm = () => {
    const dispatch = useDispatch();
  return (
      <MainFormWrap>
          <ImgWrap>
        <Image src={registrationImageDesktop} alt="Registration" className="desktop-image" />
        <Image src={registrationImageTablet} alt="Registration" className="tablet-image" />
        <Image src={registrationImagePhone} alt="Registration" className="phone-image" />
          </ImgWrap>
          <FormWrap>
          <h2 className='headline'>Registration</h2>
          <p className='text'>Thank you for your interest in our platform.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
            password: '',
          confirmPassword: ''
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
            const formData = {name: values.name, email: values.email, password: values.password };
            console.log(formData);
           dispatch(apiUserRegister(formData));
            setSubmitting(false);
         
        }}
      >
        <Form>
          <div>
            <Field className='input' type="text" name="name" placeholder="Name"/>
            <ErrorMessage className='message-error' name="name" component="div" />
          </div>

          <div>
            <Field className='input' type="email" name="email" placeholder="Email"/>
            <ErrorMessage className='message-error' name="email" component="div" />
          </div>

          <div>
            <Field className='input' type="password" name="password" placeholder="Password"/>
            <ErrorMessage className='message-error' name="password" component="div" />
          </div>

          <div>
            <Field className='input' type="password" name="confirmPassword" placeholder="Confirm password"/>
            <ErrorMessage className='message-error' name="confirmPassword" component="div" />
          </div>

          <button className='btn-register' type="submit">Registration</button>
        </Form>
          </Formik>
              <div className='text-change'>Already have an account? <NavLink className="change-link" to="login">Login</NavLink></div>
              </FormWrap>
    </MainFormWrap>
  );
};

export default RegisterForm;
