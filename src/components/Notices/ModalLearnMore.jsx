import { ReactComponent as CloseIcon } from '../../assets/icons/close-btn.svg';
import { ModalLearnMoreContentWrap } from './Notices.styled';
import { ReactComponent as StarIcon } from '../../assets/icons/icon-star.svg';
import { ReactComponent as HeartLikeIcon } from '../../assets/icons/heart-like.svg';
import { selectUserIsSignedIn } from '../../redux/Auth/authSelector';
import { useSelector } from 'react-redux';
export const ModalLearnMoreContent = ({
  onClose,
  notice,
  isFavorite,
  handleRemoveFromFavorite,
  handleAddToFavorite,
}) => {
  const {
    birthday,
    comment,
    imgURL,
    name,
    popularity,
    sex,
    species,
    title,
  } = notice;
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <ModalLearnMoreContentWrap>
      <button className="close-btn" onClick={onClose}>
        <CloseIcon />
      </button>
      <img className='img' src={imgURL} alt="" width="120"/>
      <p className='sell'>Sell</p>
      <h3 className='title'>{title}</h3>
      <p className="popularity">
        <StarIcon /> {popularity}
      </p>
      <div className="wrap-box">
        <p className="info-title">
          Name <br />
          <span className='info-span'>{name}</span>
        </p>
        <p className="info-title">
          Birthday <br />
          <span className='info-span'>{birthday}</span>
        </p>
        <p className="info-title">
          Sex <br />
          <span className='info-span'>{sex}</span>
        </p>
        <p className="info-title">
          Species <br />
          <span className='info-span'>{species}</span>
        </p>
      </div>
      <p className="coment">{comment}</p>
      <div>
        {isSignedIn ? (
          isFavorite ? (
            <div className='btn-box'>
              <button className="btn-like-modaladded" onClick={handleRemoveFromFavorite}>
                Added <HeartLikeIcon fill="rgb(246, 184, 61)" />
              </button>
              <button className='btn-like-modaladded contact-btn'>Contact</button>
            </div>
          ) : (
            <div className='btn-box'>
              <button className="btn-like-modal" onClick={handleAddToFavorite}>
                Add to <HeartLikeIcon fill='rgb(255, 255, 255)' />
              </button>
              <button className='btn-like-modaladded contact-btn'>Contact</button>
            </div>
          )
        ) : (
          <p className='message'>Please sign in to contact the owner</p>
        )}
      </div>
    </ModalLearnMoreContentWrap>
  );
};
