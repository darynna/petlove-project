import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = styled.nav`
width: 100%;
  display: flex;
  padding: 44px 32px;
  justify-content: space-between;
  align-items: center;
  max-width: 1152px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 32px 12px;
  }
`;

const BurgerMenuOpen = styled.button`
  display: none; /* Hide by default on larger screens */
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 768px) {
    display: block;
    ${({ $isOpen, ...props }) =>
      $isOpen &&
      `
            display: none; 
        `}
  }
`;

const BurgerMenuClose = styled.button`
  display: none;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  gap: 40px;

  @media screen and (max-width: 768px) {
    height: 80%;
    justify-content: space-between;
    flex-direction: column;

    ${({ $isOpen, ...props }) =>
      $isOpen &&
      `
            display: flex; 
        `}
  }
`;

const MenuDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
    position: absolute;
    top: 0px; /* Adjust as needed based on your header height */
    right: 0;
    background-color: #ffffff;
    width: 50%;
    height: 100%;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    ${({ $isOpen, ...props }) =>
      $isOpen &&
      `
            display: block; 
        `}
  }

  .burger-menu {
    position: absolute;
    right: 12px;
    top: 12px;
  }
`;

const Wrap = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
`;

const NavLinkItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 48px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }

  .btn-login-color {
    color: #ffffff;
  }

  .btn-register-color {
    color: #f6b83d;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
`;

const NavLinkAuth = styled.div`
  display: none;
  @media screen and (max-width: 768px) and (min-width: 624px) {
    display: block;

    ${({ $isOpen, ...props }) =>
      $isOpen &&
      `
            display: none; 
        `}
  }

  .auth-table {
    display: flex;
    flex-direction: row;
  }
`;

const LogoDesign = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const ListSecondary = styled.ul`
list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    

     @media screen and (max-width: 768px) {
        gap: 10px;
        flex-direction: column;
    }

    .btn-login{
        width: 170px;
        border-color: rgb(246, 184, 61);
        background-color: rgb(246, 184, 61);
        color: #FFFFFF;

        &:hover{
            background-color: #F9B020;
        }
    }

    .btn-register{
        width: 170px;
        border-color: rgb(255, 244, 223);
        background-color: rgb(255, 244, 223);
        color:rgb(246, 184, 61);

      &:hover{
            background-color: #FBE7C1;
        }

    }

    .btn-logout{
      padding: 12px 60px;
      border: none;
      font-size: 14px;
      border-radius: 30px;
        background-color: rgb(255, 244, 223);
        color:rgb(246, 184, 61);
 &:hover{
            background-color: #FBE7C1;
        }
    }

    .name{
      font-weight: 700;
      
    }

    .icon{
      padding: 13px;
      background-color: rgb(255, 244, 223);
      border-radius: 30px;
    }

    .link{
      text-decoration: none;
      color: black
    }

    @media screen and (min-width: 768px) {
        .btn-login{
        width: 120px;
    }

    .btn-register{
        width: 150px;
    }

     .btn-logout{
      font-size: 18px;
     }
    }
    }
`;

export {
  BurgerMenuOpen,
  BurgerMenuClose,
  NavLinks,
  NavLinkItem,
  NavLinkStyled,
  Menu,
  NavLinkAuth,
  LogoDesign,
  MenuDiv,
  ListSecondary,
  Wrap,
};
