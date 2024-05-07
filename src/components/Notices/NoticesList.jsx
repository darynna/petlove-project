import { NoticeItem } from "./NoticesItem";
import { NoticesListStyled } from "./Notices.styled";

export const NoticesList = ({ notices, user }) => {
    return (
        <NoticesListStyled>
            {notices.map(notice => {
                const isLiked = user && user.noticesFavorites ? user.noticesFavorites.some(favorite => favorite._id === notice._id) : false;
                return <NoticeItem key={notice._id} notice={notice} isLiked={isLiked} />;
            })}
        </NoticesListStyled>
    );
};
