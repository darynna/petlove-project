import styled from 'styled-components';
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

export const MainHomeWrap = styled.div`
width: 320px;
display: flex;
margin: 0 auto;
    flex-direction: column;
    align-items: center;

.FirstHomeWrap{
    position: relative;
    padding: 50px 20px;
background-color: #F6B83D;
border-radius: 30px;
}
.MainTitle{
    font-weight: 700;
    font-size: 50px;
    color: white;
}

.MainTitleSpan{
    color: rgba(255, 255, 255, 0.4);
}

.HomeText{
    font-size: 14px;
    font-weight: 500;
    color: white;
}

@media screen and (min-width: 768px) {
    width: 704px;

    .MainTitle{
        font-size: 80px;
    }

    .HomeText{
        width: 255px;
        position: absolute;
        right: 32px;
        bottom: 20px;
        font-size: 18px;
    }
  }

  @media screen and (min-width: 1280px) {
 width: 1216px;

     .MainTitle{
        font-size: 90px;
        width: 760px;
    }

    .HomeText{
        position: static;
        width: 255px;
    }

    .FirstHomeWrap{
        display:flex;
        align-items: flex-end;
        gap: 73px;
        padding: 32px 64px;
    }
  }
  }
`