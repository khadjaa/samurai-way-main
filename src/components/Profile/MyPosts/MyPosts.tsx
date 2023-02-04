import React from "react";
import s from "./MyPosts.module.css"
import Post from "../MyPosts/Post/Post"

const MyPosts = () => {
    return (
        <div className={s.item}>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={"hello bro"} likesCount={5}/>
                <Post message={"it's my first post!"} likesCount={12}/>
            </div>
        </div>
    )
}

export default MyPosts