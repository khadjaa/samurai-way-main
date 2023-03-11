import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postItemsArrayType} from "../../redux/state";

export type ProfilePropsType = {
    state: postItemsArrayType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts postItems={props.state.postItems}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </main>
    )
}

export default Profile