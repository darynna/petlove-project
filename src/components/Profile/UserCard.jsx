import { ReactComponent as UserWhiteIcon } from '../../assets/icons/user-02.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit-2.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/avatar.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/authSelector';

export const UserCard = () => {
    const user = useSelector(selectUser)
    console.log(user)
    return (
        <div>
            <div>
                <p>User <UserWhiteIcon /></p>
                <button><EditIcon/></button>
            </div>
            <div>
                <UserIcon width="40"/>
            </div>
            <div>
                <p>My information</p>
                <Formik
                    initialValues={{
          name: '',
          email: '',
          number: '+44',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
            name: Yup.string().required('Required'),
          number: Yup.number()
        })}
      >
                  <Form>
          <div>
            <Field className="input" type="email" name="email" placeholder="name"/>
            <ErrorMessage className='message-error' name="email" component="div" />
          </div>

          <div>
            <Field className="input" type="email" name="email" placeholder="email"/>
            <ErrorMessage className='message-error' name="email" component="div" />
                        </div>
                        
                        <div>
            <Field className="input" type="number" name="number" placeholder="number"/>
            <ErrorMessage className='message-error' name="number" component="div" />
          </div>

          <button className='btn-register' type="submit">LOG IN</button>
        </Form>
          </Formik>
            </div>
        </div>
)
}