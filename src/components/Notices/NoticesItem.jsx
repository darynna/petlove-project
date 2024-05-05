import { ReactComponent as HeartLikeIcon } from '../../assets/icons/heart-like.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { apiAddNoticeToFavorites, apiRemoveNoticeFromFavorites } from '../../redux/Info/InfoSlice';
import { ReactComponent as StarIcon } from '../../assets/icons/icon-star.svg';
import { Notice } from './Notices.styled';

export const NoticeItem = ({ notice }) => {
    const {
      _id,
    birthday,
    category,
    comment,
    createdAt,
    imgURL,
    location,
    name,
    popularity,
    sex,
    species,
    title,
  } = notice;
    
    const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorite = () => {
    dispatch(apiAddNoticeToFavorites(_id));
    setIsFavorite(true);
  };

  const handleRemoveFromFavorite = () => {
    dispatch(apiRemoveNoticeFromFavorites(_id));
    setIsFavorite(false);
  };
  return (
    <Notice>
      <img className='image' src={imgURL} alt="" width="287"/>
      <div className='wrap-box'>
        <h3 className='title'>{title}</h3>
        <p className='star'><StarIcon /> {popularity}</p>
          </div>
          <div className='wrap-box'>
              <p className='info-title'>Name <br /><span>{name}</span></p>
              <p className='info-title'>Birthday <br /><span>{birthday}</span></p>
              <p className='info-title'>Sex <br /><span>{sex}</span></p>
              <p className='info-title'>Species <br /><span>{species}</span></p>
              <p className='info-title'>Category <br /><span>{ category}</span></p>
          </div>
          <p className='coment'>{comment}</p>
          <div className='wrap-box'>
              <button className='btn-more'>Laern More</button>
              {isFavorite ? (
          <button className="btn-like" onClick={handleRemoveFromFavorite}>
            <HeartLikeIcon fill="rgb(246, 184, 61)" />
          </button>
        ) : (
          <button className="btn-like" onClick={handleAddToFavorite}>
            <HeartLikeIcon />
          </button>
        )}
              </div>
    </Notice>
  );
};
