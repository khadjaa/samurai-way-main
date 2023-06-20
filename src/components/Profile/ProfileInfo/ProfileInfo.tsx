import React from "react";
import s from "./ProfileInfo.module.css"

type ProfileInfoPropsType = {
    profile: any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://wallup.net/wp-content/uploads/2018/09/30/912666-quotes-typography-text-quote-motivational-inspirational.jpg"
                     alt="main_img"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava"/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;