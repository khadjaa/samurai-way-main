import s from './Dialogs.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';
import DialogsItems from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import {addDialogsMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {ActionsTypes, NamesArrayType} from "../../redux/store";
import {rootReducerType} from "../../redux/redux-store";

export type DialogsPropsType = {
    // state: NamesArrayType
    // dispatch: (action: ActionsTypes) => void
    store: rootReducerType
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    const newNames = state.names.map(el => <DialogsItems id={el.id} name={el.name}/>)

    const newMessages = state.messages.map(el => {
        return (
            <MessageItems message={el.message}/>
        )
    })

    let newMessageBody = state.newMessageTextBody

    const addMessageHandler = () => props.store.dispatch(addDialogsMessageAC())


    const onKeyDownHandlerR = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addMessageHandler()
        }
    }

    const onChangeMessageValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.store.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {newNames}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {newMessages}
                </div>
            </div>
            <div>
                <input value={newMessageBody}
                       onChange={onChangeMessageValue}
                       onKeyDown={onKeyDownHandlerR}/>
                <button onClick={addMessageHandler}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs;