import s from './Dialogs.module.css';
import React from 'react';
import DialogsItems from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import {NamesArrayType} from "../../redux/state";

export type DialogsPropsType = {
    state: NamesArrayType
}

const Dialogs = (props:DialogsPropsType) => {

    const newNames = props.state.names.map(el => <DialogsItems id={el.id} name={el.name}/>)

    const newMessages = props.state.messages.map(el => {
        return (
            <MessageItems message={el.message}/>
        )
    })

    let inputMessageDialogsRef = React.createRef<HTMLInputElement>()

    const addMessageHandler = () => {
        alert(inputMessageDialogsRef.current?.value)
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
                <input ref={inputMessageDialogsRef}/>
                <button onClick={addMessageHandler}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;