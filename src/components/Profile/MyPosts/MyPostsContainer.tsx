import React from "react";

import {addPostAC, PostType, updateInputValueAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}

type DispatchPropsType = {
    addPost: () => void
    changePost: (text: string) => void
}

export type MyPostPropsType = MapStateToPropsType & DispatchPropsType

const mapStateToProps = (state: AppStateType) => {
    return{
        posts: state.profilePage.postItems,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        addPost:() => {
            dispatch(addPostAC())
        },
        changePost:(text: string) => {
            dispatch(updateInputValueAC(text))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer