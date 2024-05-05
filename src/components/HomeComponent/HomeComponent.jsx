import homeImageDesktop from '../../assets/img/desktop-home.jpeg'; 
import homeImageTablet from "../../assets/img/tablet-home.jpeg";
import homeImagePhone from "../../assets/img/phone-home.jpeg";
import { ImgWrap, MainHomeWrap } from './HomeComponent.styled';

export const HomeComponent = () => {
    return (
        <MainHomeWrap>
            <div className='FirstHomeWrap'>
            <h1 className='MainTitle'>Take good <span className='MainTitleSpan'>care</span> of your small pets</h1>
                <p className='HomeText'>Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</p>
                </div>
            <ImgWrap>
                 <img src={homeImageDesktop} alt="img" className="desktop-image" />
        <img src={homeImageTablet} alt="img" className="tablet-image" />
        <img src={homeImagePhone} alt="img" className="phone-image" width="320"/>
            </ImgWrap>
        </MainHomeWrap>
    )
}