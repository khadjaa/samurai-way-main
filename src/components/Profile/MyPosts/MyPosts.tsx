import React from "react";
import s from "./MyPosts.module.css"
import Post from "../MyPosts/Post/Post"

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = () => {

    const postItems: PostType[] = [
        {id: 1, message: 'Hello Bro!', likesCount: 12},
        {id: 2, message: 'It is so cool', likesCount:34}
    ]

    const newPostItems = postItems
        .map(el => <Post message={el.message} likesCount={el.likesCount}/>
    )

    return (
        <div className={s.item}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {newPostItems}
            </div>
        </div>
    )
}

export default MyPosts