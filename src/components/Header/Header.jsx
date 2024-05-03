import { AuthNav } from 'components/Header/AuthNav';
import { useState } from 'react';
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

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <AuthNav />
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
              <AuthNav />
            </li>
                      </NavLinks>
                      </Wrap> 
        </MenuDiv>
      </Menu>
    </>
  );
};
