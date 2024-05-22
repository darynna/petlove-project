import { ReactComponent as UserWhiteIcon } from '../../assets/icons/user-02.svg';
// import { ReactComponent as EditIcon } from '../../assets/icons/edit-2.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/avatar.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/Auth/authSelector';
import { apiUpdateUserInfo } from '../../redux/Auth/authSlice';
import { UserCardStyled } from './Profile.styled';

export const UserCard = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <UserCardStyled>
            <div className='wrapIcons'>
                <p className='userIcon'>User <UserWhiteIcon /></p>
                <p className='userIcon'>Edit info</p>
            </div>
            <div className='userImg'>
                <UserIcon width="40" height="40"/>
            </div>
            <div className='formWrap'>
                <p className='info-title'>My information</p>
                <Formik
                    initialValues={{
                        name: user.name || '',
                        email: user.email || '',
                        phone: user.phone || '+44',
                        avatar: "https://XXXX.png"
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('Required'),
                        name: Yup.string().required('Required'),
                      phone: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
                    })}
            onSubmit={(values, {setSubmitting}) => {
                      console.log(values)
              dispatch(apiUpdateUserInfo(values));
              setSubmitting(false);
              
                    }}
                >
                    <Form className="form">
                        <div>
                            <Field className="input" type="text" name="name" placeholder="Name" />
                            <ErrorMessage className='message-error' name="name" component="div" />
                        </div>

                        <div>
                            <Field className="input" type="email" name="email" placeholder="Email" />
                            <ErrorMessage className='message-error' name="email" component="div" />
                        </div>
                        
                        <div>
                            <Field className="input" type="text" name="phone" placeholder="Number" />
                            <ErrorMessage className='message-error' name="phone" component="div" />
                        </div>
                        
                        <button className='save-btn' type="submit">Save</button>
                    </Form>
                </Formik>
            </div>
        </UserCardStyled>
    );
}
