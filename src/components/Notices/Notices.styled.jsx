import styled from "styled-components";

export const Notice = styled.li`
width: 287px;
padding: 24px;
background-color: white;
border-radius: 30px;

.image{
    width:287px;
    height: 178px;
    object-fit: cover;
    border-radius: 16px;
    margin: 0 auto;
    margin-bottom: 24px;
}

.wrap-box{
    display: flex;
justify-content: space-between;
margin-bottom: 8px;
}

.title{
    font-size: 16px;
    font-weight: 700;
}

.star{
    font-size:14px;
    display: flex;
    align-items: center;
}

.info-title{
    font-size: 10px;
    color: rgba(38, 38, 38, 0.5);
}
.info-texr{
    font-size: 12px;
}

.coment{
    font-size: 14px;
    margin: 16px 0 24px 0;
}


    .btn-more{
      padding: 14px 80px;
      border: none;
      font-size: 14px;
      border-radius: 30px;
        background-color: rgb(246, 184, 61);
        color:rgb(255, 244, 223);
 &:hover{
            background-color:  #F9B020;
        }
    }
.btn-like{
    padding: 14px 14px 8px 14px;
    border: none;
    border-radius: 50%;
    background-color: rgb(255, 244, 223);
}

@media screen and (min-width: 768px) {
    width: 294px;
    .image{
        width: 294px;
    }

    .title{
    font-size: 18px;
}
.coment{
    margin: 16px 0 32px 0;
}
}
`
// List 
export const NoticesListStyled = styled.ul`

@media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
justify-content: center;
align-items: center;
padding: 0px;
}

`

//Main title
export const NoticeTitle = styled.h3`
font-weight: 700;
font-size:28px;
margin-bottom:40px;

@media screen and (min-width: 768px) {
    font-size:54px;
}
`
//Main List
export const MainNoticesListStyled = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
        margin-bottom: 60px;
    

`