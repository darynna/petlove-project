import { ListSecondary, NavLinkStyled, NavLinkItem } from "./Header.styled";
import { ReactComponent as UserIcon } from '../../assets/icons/avatar.svg';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/Auth/authSlice";
import { NavLink } from "react-router-dom";
import { selectUser } from "../../redux/Auth/authSelector";

export const UserNav = () => {
    const usere = useSelector(selectUser)
    const dispatch = useDispatch();
    return (
        <ListSecondary className="auth-table">
            <button  onClick={() => {
              dispatch(logoutUser());
            }} className="btn-logout">Log out</button>
            <div>
                <p className="name"><span className="icon"><UserIcon /></span><NavLink className="link" to="/profile"> {usere.name}</NavLink></p>
            </div>
        </ListSecondary>
    )
}