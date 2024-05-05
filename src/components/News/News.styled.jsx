import styled from 'styled-components';


export const NewsItem = styled.li`
width: 335px;
list-style: none;

.image{
    border-radius: 15px;
    width: 335px;
    height: 226px; 
}

.info-wrap{
    height: 194px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title{
    font-size: 16px;
    max-height: 50px; /* Limit the height */
        overflow: hidden;
        margin: 28px 0 14px 0;
}

.text{
    font-size: 14px;
      max-height: 40px; /* Limit the height */
        overflow: hidden;
        margin: 0px;
}

.date{
    font-size: 14px;
    color: rgba(38, 38, 38, 0.5);
}

.link{
    color: rgb(246, 184, 61);
    font-size: 14px;
}

.wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (min-width: 768px) {
    width: 340px;
    .image{
    width: 340px;
    height: 226px;
}

    .title{
    font-size: 20px;

}
.text{
    font-size: 16px
}

.date{
    font-size: 16px;
}

.link{
    color: rgb(246, 184, 61);
    font-size: 16px;
}


}
`

//List

export const NewListStyled = styled.ul`
display: flex;
flex-direction: column;
gap: 24px;
justify-content: center;
align-items: center;
padding: 0px;

@media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
}

`


export const MainNewsListStyled = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
        margin-bottom: 60px;
    

`

//Main Title

export const NewsTitle = styled.h3`
font-weight: 700;
font-size:28px;

@media screen and (min-width: 768px) {
    font-size:54px;
}
`