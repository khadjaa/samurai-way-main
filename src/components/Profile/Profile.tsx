import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postItemsArrayType, PostType} from "../../redux/state";

export type ProfilePropsType = {
    state: postItemsArrayType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts postItems={props.state.postItems}/>
        </main>
    )
}

export default Profile