import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../Loader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://wallup.net/wp-content/uploads/2018/09/30/912666-quotes-typography-text-quote-motivational-inspirational.jpg"
                     alt="main_img"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava"/>
                <span>{props.profile.fullName}</span>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;