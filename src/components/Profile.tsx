import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <main className={s.main}>
            <div>
                <img
                    src="https://wallup.net/wp-content/uploads/2018/09/30/912666-quotes-typography-text-quote-motivational-inspirational.jpg"
                    alt="main_img"/>
            </div>
            <div>ava + description</div>
            <div className={s.item}>
                My Posts
                <div className={s.item}>
                    New Posts
                </div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </main>
    )
}

export default Profile