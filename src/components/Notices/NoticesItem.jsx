import { ReactComponent as HeartLikeIcon } from '../../assets/icons/heart-like.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { apiAddNoticeToFavorites, apiRemoveNoticeFromFavorites } from '../../redux/Info/InfoSlice';
import { ReactComponent as StarIcon } from '../../assets/icons/icon-star.svg';
import { Notice } from './Notices.styled';
import { selectUserIsSignedIn } from '../../redux/Auth/authSelector';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { ModalNoticesContent } from './ModalContent';
import { ModalLearnMoreContent } from './ModalLearnMore';

export const NoticeItem = ({ notice, isLiked }) => {
    const {
      _id,
    birthday,
    category,
    comment,
    imgURL,
    name,
    popularity,
    sex,
    species,
    title,
  } = notice;
    
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(isLiked);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLearnMoreModalOpen, setLearnMoreIsModalOpen] = useState(false);
    const isSignedIn = useSelector(selectUserIsSignedIn)

    const handleAddToFavorite = () => {
        if (isSignedIn) {
            dispatch(apiAddNoticeToFavorites(_id));
            setIsFavorite(true);
        } else {
            setIsModalOpen(true);
        }
  };

  const handleRemoveFromFavorite = () => {
    dispatch(apiRemoveNoticeFromFavorites(_id));
    setIsFavorite(false);
    }; 
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
    const closeLearnMoreModal = () => {
        setLearnMoreIsModalOpen(false)
    }

    const openLearnMoreModal = () => {
        setLearnMoreIsModalOpen(true)
    }
  return (
    <Notice>
      <img className='image' src={imgURL} alt="" width="287"/>
      <div className='wrap-box'>
        <h3 className='title'>{title}</h3>
        <p className='star'><StarIcon /> {popularity}</p>
          </div>
          <div className='wrap-box'>
              <p className='info-title'>Name <br /><span className='info-span'>{name}</span></p>
              <p className='info-title'>Birthday <br /><span className='info-span'>{birthday}</span></p>
              <p className='info-title'>Sex <br /><span className='info-span'>{sex}</span></p>
              <p className='info-title'>Species <br /><span className='info-span'>{species}</span></p>
              <p className='info-title'>Category <br /><span className='info-span'>{ category}</span></p>
          </div>
          <p className='coment'>{comment}</p>
          <div className='wrap-box'>
              <button className='btn-more' onClick={openLearnMoreModal}>Laern More</button>
              {isFavorite ? (
          <button className="btn-like" onClick={handleRemoveFromFavorite}>
            <HeartLikeIcon fill="rgb(246, 184, 61)" />
          </button>
        ) : (
          <button className="btn-like" onClick={handleAddToFavorite}>
            <HeartLikeIcon />
          </button>
              )}
              {
                  isModalOpen ? (
                      <ModalWindow Content={<ModalNoticesContent onClose={closeModal} />} />
              ) : (
              <></>
                  )
              }
              {
                  isLearnMoreModalOpen ? (
                      <ModalWindow Content={< ModalLearnMoreContent onClose={closeLearnMoreModal} notice={notice} isFavorite={isFavorite} handleRemoveFromFavorite={handleRemoveFromFavorite} handleAddToFavorite={handleAddToFavorite} />} />
              ) : (
              <></>
                  )
              }
              </div>
    </Notice>
  );
};
