import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType} from "./redux/store";
import {rootReducerType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type AppPropsType = {
    store: rootReducerType
    // dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-main"}>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
