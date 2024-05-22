import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { apiGetNotices } from "../../redux/Info/InfoSlice";
import { selectNotices } from "../../redux/Info/InfoSelector";
import { NoticesList } from "./NoticesList";
import Pagination from '@mui/material/Pagination';
import { NoticeTitle, MainNoticesListStyled } from "./Notices.styled";
import { selectUser } from "../../redux/Auth/authSelector";
import Loader from "components/Loader/Loader";

export const NoticesComponent = () => {
    const dispatch = useDispatch();
    const notices = useSelector(selectNotices);
    const user = useSelector(selectUser);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage); 
    };

    useEffect(() => {
     dispatch(apiGetNotices(currentPage))
    }, [ dispatch, currentPage])

    return (
        <>
        <NoticeTitle>Find your favorite pet</NoticeTitle>
        < MainNoticesListStyled>
            {notices ? (
                <>
                        <NoticesList notices={notices.results} user={user} />
                    <Pagination count={notices.totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" color="primary" />
                    </>
                ) : (
                    <Loader/>
            )}
            </MainNoticesListStyled>
            </>
    )
}