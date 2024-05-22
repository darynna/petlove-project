import styled from 'styled-components';


export const ProfileWrapStyled = styled.div`
width: 335px;
background-color: white;
border-radius: 30px;
display: flex;
    justify-content: center;
    margin: 0 auto;
      @media screen and (min-width: 768px){
  width: 704px
  }

      @media screen and (min-width: 1280px){
 width:1152px;
    }
`

export const UserCardStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 295px;
padding: 20px;

.userIcon{
    background-color: #F6B83D;
    padding: 10px 14px;
    border-radius: 30px;
    font-size: 14px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-bottom: 20px;
}

.wrapIcons{
        display: flex;
    justify-content: space-between;
    width: 100%;
}

.userImg{
width: 94px;
    height: 94px;
    margin-bottom: 30px;
    background-color: rgb(255, 244, 223);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.formWrap{
  display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
}

.input{
    width: 268px;
      margin-bottom: 10px;
      padding: 12px;
      border-radius: 30px;
      border: 1px solid #F6B83D;
}

.info-title{
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
}

.save-btn{
     padding: 10px 60px;
      border: none;
      height: 42px;
      font-size: 14px;
      border-radius: 30px;
        background-color: rgb(255, 244, 223);
        color:rgb(246, 184, 61);
 &:hover{
            background-color: #FBE7C1;
        }
}
  @media screen and (min-width: 768px){
  width: 624px;

  .info-title{
    font-size: 18px;
 
}

.userIcon{
    margin-bottom: 0px;
}

.form{
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    gap: 14px;
}
.input{
    font-size: 16px;
}
  }


   @media screen and (min-width: 1280px){
width: 1152px;

.form{
  gap: 0px;
  justify-content: space-between;
}
}
`

export const UserNoticesStyled = styled.div`

width: 335px;
margin: 0 auto;
.title{
  font-size: 14px;
  font-weight: 700;
  margin: 20px 0;
  padding: 12px;
  background-color: white;
  border-radius: 30px;
  width: 104px
}

  @media screen and (min-width: 768px){
    width: 704px;
.list{
  display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
}

    @media screen and (min-width: 1280px){
width: 1152px;

.list{
  gap: 0px;
  justify-content: space-between;
}
    }
`