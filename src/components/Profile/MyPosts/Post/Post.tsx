import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://mobimg.b-cdn.net/v3/fetch/81/8189b923f97721e57c7ee1784bcecbc4.jpeg" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post