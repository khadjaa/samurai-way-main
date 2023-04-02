import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {rootReducerType} from "../../redux/redux-store";

export type ProfilePropsType = {
    store: rootReducerType
}

const Profile = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer />
        </main>
    )
}

export default Profile