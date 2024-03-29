import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "../MyPosts/Post/Post"
import {MyPostPropsType} from "./MyPostsContainer";

const MyPosts = (props: MyPostPropsType) => {

    const newPostItems = props.posts
        .map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    // let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const onAdPost = () => {
        props.addPost()
    }

    const onUpdateInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePost(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            onAdPost()
        }
    }

    return (
        <div className={s.item}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={onUpdateInputValue}
                              onKeyDown={onKeyDownHandler}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onAdPost}>Add post</button>
                </div>
            </div>
            <div>
                {newPostItems}
            </div>
        </div>
    )
}

export default MyPosts