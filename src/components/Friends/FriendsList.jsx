import { FriendsItem } from "./FriendsItem";
import { FriendsListStyled } from "./Friends.styled";

export const FriendsList = ({ friends }) => {
    return (
        <FriendsListStyled>
            {
                friends.map((friend) => {
                    return <FriendsItem key={friend._id} friend={friend} />
                })
             }
        </FriendsListStyled>
)
}