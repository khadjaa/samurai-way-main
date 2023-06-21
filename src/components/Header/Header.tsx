import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://wsd.events/2017/01/28/pres/here-be-dragons/pictures/react-logo.png" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header