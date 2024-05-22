import styled from 'styled-components';

//Item
export const FriendItem = styled.li`
width: 290px;
padding: 40px 20px;
display: flex;
align-items: center;
background-color: #FFFFFF;
gap: 14px;
border-radius: 15px;

.title{
    font-size: 16px;
    font-weight: 700;
   margin-bottom: 14px
}

.info{
    font-size: 14px;
    color: rgba(38, 38, 38, 0.5);
    margin-bottom: 8px
}

.info-phone{
     margin-bottom: 0px
}

.link{
    text-decoration: none;
    color: black;
}

@media screen and (min-width: 768px) {
    .title{
    font-size: 20px;

}
}
`

//List

export const FriendsListStyled = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
padding: 0;
align-items: center;

@media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
}

`

//Main Title

export const FriendsTitle = styled.h3`
font-weight: 700;
font-size:28px;
margin-bottom: 60px;

@media screen and (min-width: 768px) {
    font-size:54px;
}
`