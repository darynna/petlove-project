import styled from 'styled-components';

//Item
export const FriendItem = styled.div`
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

}

.info{
    font-size: 14px;
    color: rgba(38, 38, 38, 0.5);
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

export const FriendsListStyled = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;

@media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
}

`