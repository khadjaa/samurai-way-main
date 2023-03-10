import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType} from "./redux/state";

export type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-main"}>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs state={props.state.dialogsPage}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile state={props.state.profilePage}
                                                  dispatch={props.dispatch}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
