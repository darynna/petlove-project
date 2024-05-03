import { AuthNav } from 'components/Header/AuthNav';
import { useState } from "react";
import { ReactComponent as CloseIcon } from '../../assets/icons/close-btn.svg';
import { ReactComponent as OpenIcon } from '../../assets/icons/open-btn.svg';
import { BurgerMenuOpen, NavLinks, NavLinkItem, NavLinkStyled , Menu, NavLinkAuth, BurgerMenuClose} from './Header.styled';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
    
<>
            <Menu>
                <NavLinkStyled to="/home">PetLove</NavLinkStyled>
                <NavLinkAuth $isOpen={menuOpen}><NavLinkItem> <AuthNav /></NavLinkItem></NavLinkAuth>
                <BurgerMenuOpen $isOpen={menuOpen} className="burger-menu" onClick={toggleMenu}>
                    <OpenIcon/>
                </BurgerMenuOpen>
                <NavLinks $isOpen={menuOpen}>
                    <BurgerMenuClose className="burger-menu" onClick={toggleMenu}>
                    <CloseIcon/>
                </BurgerMenuClose>
                    <NavLinkItem><NavLinkStyled to="/news">News</NavLinkStyled></NavLinkItem>
                    <NavLinkItem><NavLinkStyled to="/notices">Find pet</NavLinkStyled></NavLinkItem>
                    <NavLinkItem><NavLinkStyled to="/friends">Our friends</NavLinkStyled></NavLinkItem>
                    <NavLinkItem> <AuthNav /></NavLinkItem>
                </NavLinks>
            </Menu>
        </>
    )
}



    /* <nav>
            <NavLink to="home">PetLove</NavLink>
            <NavLink to="news">News</NavLink>
            <NavLink to="notices">Find pet</NavLink>
            <NavLink to="friends">Our friends</NavLink>
            <AuthNav/>
            
            </nav> */