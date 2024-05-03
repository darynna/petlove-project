import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = styled.nav`
    display: flex;
`;

// Burger menu icon styles
const BurgerMenuOpen = styled.button`
    display: none; /* Hide by default on larger screens */
    cursor: pointer;
    background-color: transparent;
    border: none;

    @media screen and (max-width: 768px) {
        display: block; 
        ${({ $isOpen, ...props }) => $isOpen && `
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

    @media screen and (max-width: 768px) {
        display: none; 
        flex-direction: column;
        position: absolute;
        top: 0px; /* Adjust as needed based on your header height */
        right: 0;
        background-color: #f9f9f9;
        width: 50%;
        height: 100%;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        ${({ $isOpen, ...props }) => $isOpen && `
            display: flex; 
        `}
    }
`;

const NavLinkItem = styled.li`
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }
`;

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: #FF5733; /* Change color on hover */
    }
`;

const NavLinkAuth = styled.div`
display: none;
    @media screen and (max-width: 768px) and (min-width: 480px) {
        display: block; 

        ${({ $isOpen, ...props }) => $isOpen && `
            display: none; 
        `}
    }
`;

export { BurgerMenuOpen,BurgerMenuClose, NavLinks, NavLinkItem, NavLinkStyled, Menu, NavLinkAuth };
