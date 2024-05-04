import styled from 'styled-components';

export const Image = styled.img`


`;

export const ImgWrap = styled.div`
.phone-image {
      display: none;
      border-radius: 30px;
    }
    .desktop-image {
      display: none;
      border-radius: 60px;
    }
    .tablet-image {
      display: none;
      border-radius: 60px;
    }

  @media screen and (min-width: 1281px) {
    .desktop-image {
      display: block;
    }
    
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    .tablet-image {
      display: block;
    }
  }

  @media screen and (max-width: 767px) {
    .phone-image {
      display: block;
    }
  }
`;

export const MainFormWrap = styled.div`
  width: 335px;
  margin: 0 auto;

@media screen and (min-width: 768px){
 
  width: 704px;
  }

    @media screen and (min-width: 1280px) {
        width: 100%;
    display: flex;
    justify-content: space-between;

  }
`

export const FormWrap = styled.div`
border-radius: 30px;
background-color: white;
padding: 55px 22px;
margin-top: 10px;

@media screen and (min-width: 768px){
 padding: 30px 140px;
  }

@media screen and (min-width: 1280px) {
 padding: 69px 84px;
 margin-top: 0px;

  }

  .headline{
    font-size:28px;
    margin-bottom: 12px;
  }
   .text{
    font-size: 14px;
    margin-bottom: 10px;
  }
  .input{
    width: 264px;
    border-radius: 30px;
    border: 1px solid rgba(38, 38, 38, 0.15);
    padding: 12px;
    margin-top: 10px;
  }
  .message-error{
    font-size: 10px;
    color: rgb(239, 36, 71);
  }
  .btn-register{
        width: 100%;
        border: none;
        padding: 12px 0;
        background-color: rgb(246, 184, 61);
        color: #FFFFFF;
        border-radius: 30px;
        margin-top: 24px;
        margin-bottom: 12px;

      &:hover{
            background-color: #F9B020;
        }

    }
   .text-change{
    font-size: 12px;
    color:rgba(38, 38, 38, 0.5);
    font-weight: 700;
    text-align: center;
   } 
   .change-link{
    color: rgb(246, 184, 61);
   }



  @media screen and (min-width: 768px){
 .headline{
    font-size:54px;
    margin-bottom: 16px;
  }


   .text{
    font-size: 18px;
    margin-bottom: 32px;
  }

    .input{
    width: 390px;
    padding: 16px;
    margin-top: 16px;
  }
  .btn-register{
  font-size: 16px;
  margin-bottom: 16px;

    }
    .text-change{
        font-size: 14px;
    }
  }

  @media screen and (min-width: 1280px) {
 .text{
    margin-bottom: 16px;
  }

  }
`

