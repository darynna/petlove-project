import {ListSecondary, NavLinkStyled, NavLinkItem} from "./Header.styled"

export const AuthNav = () => {
    return (
        <ListSecondary className="auth-table">
            <NavLinkItem className="btn-login">
                <NavLinkStyled className="btn-login-color btn" to="login">Login</NavLinkStyled>
            </NavLinkItem>
            <NavLinkItem className="btn-register" >
                <NavLinkStyled className="btn-register-color btn" to="register">Register</NavLinkStyled>
                </NavLinkItem>
        </ListSecondary>
    )
}