import s from './Dialogs.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';
import DialogsItems from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import {ActionsTypes, addDialogsMessageAC, NamesArrayType, updateInputValueDialogsAC} from "../../redux/state";

export type DialogsPropsType = {
    state: NamesArrayType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    const newNames = props.state.names.map(el => <DialogsItems id={el.id} name={el.name}/>)

    const newMessages = props.state.messages.map(el => {
        return (
            <MessageItems message={el.message}/>
        )
    })

    const addMessageHandler = () => {
        props.dispatch(addDialogsMessageAC())
    }

    const onKeyDownHandlerR = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addMessageHandler()
        }
    }


    const onChangeMessageValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateInputValueDialogsAC(e.currentTarget.value))
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
                <input value={props.state.newMessageTextBody}
                        onChange={onChangeMessageValue}
                        onKeyDown={onKeyDownHandlerR}/>
                <button onClick={addMessageHandler}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;