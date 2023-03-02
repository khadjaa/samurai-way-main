import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "../MyPosts/Post/Post"
import {PostType} from "../../../redux/state";

export type MyPostPropsType = {
    postItems: PostType[]
    newPostText: string
    addPost: () => void
    updateInputValue: (s: string) => void
}

const MyPosts = (props: MyPostPropsType) => {

    const newPostItems = props.postItems
        .map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    // let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {props.addPost()}

    const updateInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateInputValue(e.currentTarget.value)
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