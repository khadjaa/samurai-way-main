import React from "react";

import {addPostAC, updateInputValueAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {rootReducerType} from "../../../redux/redux-store";

export type MyPostPropsType = {
    store: rootReducerType
}

const MyPostsContainer = (props: MyPostPropsType) => {

    const state = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const changePost = (text: string) => {
        props.store.dispatch(updateInputValueAC(text))
    }

    return (
        <div>
            <MyPosts
                postItems={state.postItems}
                newPostText={state.newPostText}
                addPost={addPost}
                changePost={changePost}
            />
        </div>
    )
}

export default MyPostsContainer