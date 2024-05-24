import { NoticeItem } from "components/Notices/NoticesItem";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/Auth/authSelector";
import { useEffect } from "react";
import { usersCurrentThunk } from "../../redux/Auth/authSlice";
import { UserNoticesStyled } from "./Profile.styled";
import Loader from "components/Loader/Loader";

export const ProfileNotices = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersCurrentThunk());
    }, [dispatch, user.noticesFavorites]);

    return (
        <UserNoticesStyled>
            <p className="title">My favorite pets</p>
            <ul className="list">
                {user.noticesFavorites ? (
                    user.noticesFavorites.length > 0 ? (
                        user.noticesFavorites.map(notice => {
                            const isLiked = user.noticesFavorites.some(favorite => favorite._id === notice._id);
                            return <NoticeItem key={notice._id} notice={notice} isLiked={isLiked} />;
                        })
                    ) : (
                        <p>No favorite pets found.</p>
                    )
                ) : (
                    <Loader />
                )}
            </ul>
        </UserNoticesStyled>
    );
};
