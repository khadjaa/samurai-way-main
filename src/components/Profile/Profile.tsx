import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType,
    children?: React.ReactNode
}

const Profile = (props: ProfilePropsType) => {

    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile