import React from 'react';
import {addDialogsMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {rootReducerType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

export type DialogsPropsType = {
    store: rootReducerType
}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    const sendMessage = () => props.store.dispatch(addDialogsMessageAC())

    const updateNewMessageBody = (text: string) => {
        props.store.dispatch(updateNewMessageBodyAC(text))
    }

    return (
      <Dialogs state={state} updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage}/>
    )
}

export default DialogsContainer;