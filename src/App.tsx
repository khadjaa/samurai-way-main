import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MessagesType, NamesType, PostType} from "./index";

export type AppPropsType = {
    names: NamesType[]
    messages: MessagesType[]
    postItems: PostType[]
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-main"}>
                    <Route path={'/dialogs'} render={() => <Dialogs names={props.names} messages={props.messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile postItems={props.postItems}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
