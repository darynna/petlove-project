import styled from "styled-components";
import { NavLink } from 'react-router-dom';

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

.info-span{
    color: black;
    font-size: 12px;
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

// Modal
export const ModalContentWrap = styled.div`
padding: 40px 20px;
position: relative;
width: 295px;
display: flex;
    flex-direction: column;
    align-items: center;
.close-btn{
    border: none;
    background-color: transparent;
    width: 24px;
    position: absolute;
    right: 30px;
    top: 20px;
}

.attention{
  color: #F6B83D;
  font-size: 20px;
  margin-bottom: 20px
}

.text{
    font-size: 14px;
  margin-bottom: 24px
}
  @media screen and (min-width: 768px) {
    padding:60px;
width: 346px;
  }
`

export const WrapBtns = styled.div`
display: flex;
    gap: 8px;

    .login{
    background-color: rgb(246, 184, 61);
    color: white;
}  
.register{
    background-color: rgb(255, 244, 223);
    color: rgb(246, 184, 61);
}
`

export const ModalFormBtn = styled(NavLink)`

width: 135px;
display: flex;
align-items: center;
    justify-content: center;
  height: 42px;
  border-radius: 30px;


`

export const ModalLearnMoreContentWrap = styled.div`
padding: 40px 38px;
position: relative;
width: 260px;
display: flex;
    flex-direction: column;
    align-items: center;
.close-btn{
    border: none;
    background-color: transparent;
    width: 24px;
    position: absolute;
    right: 30px;
    top: 20px;
}
.img{
    border-radius: 50%;
    margin-bottom: 20px;
}
.sell{
    position: absolute;
    left: 110px;
    background-color: rgb(255, 244, 223);
    color: rgb(246, 184, 61);
    font-size: 12px;
    border-radius: 30px;
    padding: 8px 14px;
}
.title{
    font-size: 16px;
    margin-bottom: 10px;
}
.popularity{
    font-size: 14px;
    margin-bottom: 26px;
}

.wrap-box{
    display: flex;
justify-content: space-between;
margin-bottom: 8px;
width: 246px;
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
    text-align: center;
}

.message{
    color: red;
    font-size: 16px;
    text-align: center;
}

.btn-like-modal{
    border: none;
    background-color: rgb(246, 184, 61);
    border-radius: 30px;
    padding: 12px 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;
    color: white;

    &:hover{
            background-color: rgb(255, 244, 223);
    color: rgb(246, 184, 61);
        }
}

.btn-like-modaladded{
    border: none;
    background-color: rgb(255, 244, 223);
    color: rgb(246, 184, 61);
    border-radius: 30px;
    padding: 12px 31px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
            background-color: rgb(246, 184, 61);
   color: white;
        }
}
.contact-btn{
     padding: 12px 37px;
}

.btn-box{
    display: flex;
    gap: 10px;
}
`