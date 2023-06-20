import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Preloader} from "../Loader/Preloader";

type ProfilePropsType = {
    profile: any,
    children?: React.ReactNode
}

const Profile = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile