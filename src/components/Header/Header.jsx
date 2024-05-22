import { AuthNav } from 'components/Header/AuthNav';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserIsSignedIn } from '../../redux/Auth/authSelector';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-btn.svg';
import { ReactComponent as OpenIcon } from '../../assets/icons/open-btn.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/logo-heart.svg';
import { ReactComponent as HeartIconAvtive } from '../../assets/icons/icon-logo-active.svg';
import {
  BurgerMenuOpen,
  NavLinks,
  NavLinkItem,
  NavLinkStyled,
  Menu,
  NavLinkAuth,
  BurgerMenuClose,
  LogoDesign,
    MenuDiv,
    ListSecondary,
  Wrap,
    NavLinkStyledMain
} from './Header.styled';
import { UserNav } from './UserNav';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSignedIn = useSelector(selectUserIsSignedIn);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Menu>
        <NavLinkStyled  to="/home" className={location.pathname === "/home" ? "active-link" : ""}>
          <LogoDesign>
            petl
            {location.pathname === "/home" ? <HeartIconAvtive/> : <HeartIcon />}
            ove
          </LogoDesign>
        </NavLinkStyled>
        <NavLinkAuth $isOpen={menuOpen}>
             {isSignedIn ? (
                  <UserNav/>
                ) : (
                    <AuthNav />
                )}
        </NavLinkAuth>
        <BurgerMenuOpen
          $isOpen={menuOpen}
          className="burger-menu"
          onClick={toggleMenu}
        >
          <OpenIcon />
        </BurgerMenuOpen>

        <MenuDiv $isOpen={menuOpen}>
          <BurgerMenuClose className="burger-menu" onClick={toggleMenu}>
            <CloseIcon />
          </BurgerMenuClose>
         <Wrap>
          <NavLinks>
            <li>
              <ListSecondary>
                <NavLinkItem>
                  <NavLinkStyledMain to="/news" >News</NavLinkStyledMain>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLinkStyledMain to="/notices">Find pet</NavLinkStyledMain>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLinkStyledMain to="/friends">Our friends</NavLinkStyledMain>
                </NavLinkItem>
              </ListSecondary>
            </li>
              <li>
                {isSignedIn ? (
                  <UserNav/>
                ) : (
                    <AuthNav />
                )}
            </li>
                      </NavLinks>
                      </Wrap> 
        </MenuDiv>
      </Menu>
    </>
  );
};
