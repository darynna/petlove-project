import { ProfileNotices } from "./MyNotices"
import { ProfileWrapStyled } from "./Profile.styled"
import { UserCard } from "./UserCard"

export const ProfileComponent = () => {
    return (
        <div>
            <ProfileWrapStyled>
                <UserCard />
            </ProfileWrapStyled>
    
            <ProfileNotices/>
</div>
)
}