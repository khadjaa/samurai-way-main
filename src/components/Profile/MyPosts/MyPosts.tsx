import React from "react";
import s from "./MyPosts.module.css"
import Post from "../MyPosts/Post/Post"

const MyPosts = () => {
    return (
        <div className={s.item}>
            My Posts
            <div className={s.item}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={"hello bro"}/>
                <Post message={"it's my first post!"}/>
            </div>
        </div>
    )
}

export default MyPosts