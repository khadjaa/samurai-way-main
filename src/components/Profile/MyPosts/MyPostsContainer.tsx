import React from "react";

import {addPostAC, updateInputValueAC} from "../../../redux/profileReducer";
import {ActionsTypes, PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";

export type MyPostPropsType = {
    postItems: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostPropsType) => {
    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const changePost = (text: string) => {
        props.dispatch(updateInputValueAC(text))
    }

    return (
        <div>
            <MyPosts
                postItems={props.postItems}
                newPostText={props.newPostText}
                addPost={addPost}
                changePost={changePost}
            />
        </div>
    )
}

export default MyPostsContainer