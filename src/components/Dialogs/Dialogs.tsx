import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogsItemsProps = {
    id: number
    name: string
}

export type MessageItemsProps = {
    message: string
}

export type NamesType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

const MessageItems = (props: MessageItemsProps) => {
    return (
        <div>{props.message}</div>
    )
}

const DialogsItems = (props: DialogsItemsProps) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {

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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItems id={names[0].id} name={names[0].name}/>
                <DialogsItems id={names[1].id} name={names[1].name}/>
                <DialogsItems id={names[2].id} name={names[2].name}/>
                <DialogsItems id={names[3].id} name={names[3].name}/>
                <DialogsItems id={names[4].id} name={names[4].name}/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <MessageItems message={messages[0].message}/>
                    <MessageItems message={messages[1].message}/>
                    <MessageItems message={messages[2].message}/>
                    <MessageItems message={messages[3].message}/>
                    <MessageItems message={messages[4].message}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;