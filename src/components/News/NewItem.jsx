import { formatDate } from "services/services-different";
import { NewsItem } from "./News.styled";
export const NewItem = ({ news }) => {
    const { date, imgUrl, text, title, url } = news;
    const formattedDate = formatDate(date);
    
    return (
        <NewsItem>
            <img className="image" src={imgUrl} alt="" />
            <div className="info-wrap">
                <div>
            <h3 className="title">{title}</h3>
                    <p className="text">{text}</p>
                    </div>
            <div className="wrap">
                <p className="date">{formattedDate}</p>
                <a className="link" href={url} alt="read more" target="_blank" rel="noreferrer">Read more</a>
                </div>
                </div>
    </NewsItem>
)
}