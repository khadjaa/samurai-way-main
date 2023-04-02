import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {rootReducerType} from "../../redux/redux-store";

export type ProfilePropsType = {
    store: rootReducerType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
}

export default Profile