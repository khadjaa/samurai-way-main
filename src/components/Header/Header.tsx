import React from "react";
import s from "./Header.module.css"
import {UserDataType} from "../../redux/authReducer";

type HeaderPropsType = {
    id: number
    email: string
    login: string
    isAuth: boolean
    setAuthUserData: (data: UserDataType) => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://wsd.events/2017/01/28/pres/here-be-dragons/pictures/react-logo.png" alt="logo"/>
            <span>
                {props.email}
            </span>
        </header>
    )
}

export default Header