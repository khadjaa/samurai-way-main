import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.main}>
            <div>
                <img
                    src="https://wallup.net/wp-content/uploads/2018/09/30/912666-quotes-typography-text-quote-motivational-inspirational.jpg"
                    alt="main_img"/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </main>
    )
}

export default Profile