import { FriendItem } from "./Friends.styled";
export const FriendsItem = ({ friend }) => {
    const { addressUrl, title, email, phone, imageUrl, address } = friend;
    return (
        <FriendItem>
            <img src={imageUrl} alt="" width="80"/>
            <div>
                <h3 className="title">{title}</h3>
                <p className="info">Email: <a className="link" href={email}>{email}</a></p>
                <p className="info">Address: <a className="link" href={addressUrl}>{address}</a></p>
                <p className="info">Phone: <a className="link" href={phone}>{phone}</a></p>
            </div>
    </FriendItem>
)
}