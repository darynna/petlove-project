import { AuthNav } from 'components/Header/AuthNav';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserIsSignedIn } from '../../redux/Auth/authSelector';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-btn.svg';
import { ReactComponent as OpenIcon } from '../../assets/icons/open-btn.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/logo-heart.svg';
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
    Wrap
} from './Header.styled';
import { UserNav } from './UserNav';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSignedIn = useSelector(selectUserIsSignedIn)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Menu>
        <NavLinkStyled to="/home">
          <LogoDesign>
            petl
            <HeartIcon />
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
                  <NavLinkStyled to="/news">News</NavLinkStyled>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLinkStyled to="/notices">Find pet</NavLinkStyled>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLinkStyled to="/friends">Our friends</NavLinkStyled>
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
