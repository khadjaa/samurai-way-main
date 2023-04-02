import s from './Dialogs.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';
import DialogsItems from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import {NamesArrayType} from "../../redux/store";

export type DialogsPropsType = {
    state: NamesArrayType
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}

const Dialogs = (props: DialogsPropsType) => {

    const newNames = props.state.names.map(el => <DialogsItems id={el.id} name={el.name}/>)

    const newMessages = props.state.messages.map(el => {
        return (
            <MessageItems message={el.message}/>
        )
    })

    let newMessageBody = props.state.newMessageTextBody

    const addMessageHandler = () => props.sendMessage()


    const onKeyDownHandlerR = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addMessageHandler()
        }
    }

    const onChangeMessageValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
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