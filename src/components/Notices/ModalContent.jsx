import { ReactComponent as CloseIcon } from '../../assets/icons/close-btn.svg';
import { ModalContentWrap, ModalFormBtn, WrapBtns } from './Notices.styled';

export const ModalNoticesContent = ({ onClose }) => {
  return (
    < ModalContentWrap>
      <button className='close-btn' onClick={onClose}>
        <CloseIcon/>
          </button>
      <h3 className='attention'>Attention</h3>
      <p className='text'>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
          </p>
          <WrapBtns>
                <ModalFormBtn className="login" to="login">Login</ModalFormBtn>
                <ModalFormBtn className="register" to="register">Register</ModalFormBtn>
          </WrapBtns>
    </ ModalContentWrap>
  );
};
