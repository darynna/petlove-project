import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { selectFriends } from "../../redux/Info/InfoSelector";
import { apiGetFriends } from "../../redux/Info/InfoSlice";
import { FriendsList } from "./FriendsList";
import { FriendsTitle } from "./Friends.styled";

export const FriendsComponent = () => {
    const dispatch = useDispatch();
    const friends = useSelector(selectFriends)

    useEffect(() => {
     dispatch(apiGetFriends())
    }, [ dispatch])

    return (
        <div>
            <FriendsTitle >Our friends</FriendsTitle>
             {friends ? (
                  <FriendsList friends={friends}/>
                ) : (
                    <div>Loading</div>
                )}
        </div>
    )
}