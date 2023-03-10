import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postItemsArrayType} from "../../redux/state";

export type ProfilePropsType = {
    state: postItemsArrayType
    addPost: () => void
    updateInputValue: (s: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts postItems={props.state.postItems}
                     newPostText={props.state.newPostText}
                     updateInputValue={props.updateInputValue}
                     addPost={props.addPost}/>
        </main>
    )
}

export default Profile