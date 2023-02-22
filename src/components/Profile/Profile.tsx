import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const Profile = () => {

    const postItems: PostType[] = [
        {id: 1, message: 'Hello Bro!', likesCount: 12},
        {id: 2, message: 'It is so cool', likesCount:34},
    ]

    return (
        <main>
            <ProfileInfo/>
            <MyPosts postItems={postItems}/>
        </main>
    )
}

export default Profile