import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { apiGetNotices } from "../../redux/Info/InfoSlice";
import { selectNotices } from "../../redux/Info/InfoSelector";
import { NoticesList } from "./NoticesList";
import Pagination from '@mui/material/Pagination';
import { NoticeTitle,  MainNoticesListStyled } from "./Notices.styled";

export const NoticesComponent = () => {
    const dispatch = useDispatch();
    const notices = useSelector(selectNotices);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(notices)

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
                <NoticesList notices={notices.results} />
                    <Pagination count={notices.totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" color="primary" />
                    </>
                ) : (
                    <div>Loading</div>
            )}
            </MainNoticesListStyled>
            </>
    )
}