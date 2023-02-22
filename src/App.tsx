import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

export type NamesType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}


export type PostType = {
    id: number
    message: string
    likesCount: number
}

function App() {

    const names: NamesType[] = [
        {id: 1, name: 'Islam'},
        {id: 2, name: 'Senya'},
        {id: 3, name: 'Genya'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Sasha'}
    ]

    const messages: MessagesType[] = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What to learn today'},
        {id: 4, message: 'Good job'},
        {id: 5, message: 'Buy'},
    ]

    const postItems: PostType[] = [
        {id: 1, message: 'Hello Bro!', likesCount: 12},
        {id: 2, message: 'It is so cool', likesCount:34},
    ]

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-main"}>
                    <Route path={'/dialogs'} render={() => <Dialogs names={names} messages={messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile postItems={postItems}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
