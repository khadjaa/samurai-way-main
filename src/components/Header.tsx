import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://wsd.events/2017/01/28/pres/here-be-dragons/pictures/react-logo.png" alt="logo"/>
        </header>
    )
}

export default Header