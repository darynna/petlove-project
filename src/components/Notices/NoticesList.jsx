import { NoticeItem } from "./NoticesItem";
import { NoticesListStyled } from "./Notices.styled";

export const NoticesList = ({ notices }) => {
    return (
        <NoticesListStyled>
            {notices.map((singleNotice) => {
                return <NoticeItem key={singleNotice._id} notice={singleNotice} />;
            })}
        </NoticesListStyled>
    );
};
