import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "../MyPosts/Post/Post"
import {ActionsTypes, PostType} from "../../../redux/state";

export type MyPostPropsType = {
    postItems: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostPropsType) => {

    const newPostItems = props.postItems
        .map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    // let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    const updateInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-NEW-TEXT", postMessage: e.currentTarget.value})
    }

    return (
        <div className={s.item}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={updateInputValue}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {newPostItems}
            </div>
        </div>
    )
}

export default MyPosts