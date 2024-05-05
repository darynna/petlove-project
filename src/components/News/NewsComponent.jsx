import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'; 
import { useEffect } from "react";
import { selectNews } from "../../redux/Info/InfoSelector";
import { apiGetNews } from "../../redux/Info/InfoSlice";
import { NewsList } from "./NewsList";
import Pagination from '@mui/material/Pagination';
import { MainNewsListStyled, NewsTitle } from "./News.styled";

export const NewsComponent = () => {
    const dispatch = useDispatch();
    const news = useSelector(selectNews);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(news)

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage); 
    };

    useEffect(() => {
     dispatch(apiGetNews(currentPage))
    }, [ dispatch, currentPage])

    return (
        <>
        <NewsTitle>News</NewsTitle>
        <MainNewsListStyled>
            {news ? (
                <>
                <NewsList news={news.results} />
                    <Pagination count={news.totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" color="primary" />
                    </>
                ) : (
                    <div>Loading</div>
            )}
            </MainNewsListStyled>
            </>
    )
}