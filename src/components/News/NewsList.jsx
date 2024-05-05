import { NewItem } from "./NewItem";
import { NewListStyled } from "./News.styled";

export const NewsList = ({ news }) => {
    return (
        <NewListStyled>
            {news.map((singleNews) => {
                return <NewItem key={singleNews._id} news={singleNews} />;
            })}
        </NewListStyled>
    );
};
