import React from "react";
import s from "./MyPosts.module.css"
import Post from "../MyPosts/Post/Post"
import {PostType} from "../../../redux/state";

export type MyPostPropsType = {
    postItems: PostType[]
}

const MyPosts = (props: MyPostPropsType) => {

    const newPostItems = props.postItems
        .map(el => <Post message={el.message} likesCount={el.likesCount}/>
        )

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        alert(postMessageRef.current?.value)
    }

    return (
        <div className={s.item}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={postMessageRef}></textarea>
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