import { NoticeItem } from "components/Notices/NoticesItem";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/Auth/authSelector";
import { useEffect } from "react";
import { usersCurrentThunk } from "../../redux/Auth/authSlice";
import { UserNoticesStyled } from "./Profile.styled";

export const ProfileNotices = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
      useEffect(() => {
    dispatch(usersCurrentThunk());
  }, [dispatch, user.noticesFavorites]);
    
    return (
        <UserNoticesStyled>
            <p className="title">My favorite pets</p>
            <ul className="list">
                 {user.noticesFavorites.map(notice => {
                const isLiked = user && user.noticesFavorites ? user.noticesFavorites.some(favorite => favorite._id === notice._id) : false;
                return <NoticeItem key={notice._id} notice={notice} isLiked={isLiked} />;
            })}
            </ul>
    </UserNoticesStyled>
)
}