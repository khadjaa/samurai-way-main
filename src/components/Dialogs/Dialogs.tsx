import s from './Dialogs.module.css';
import DialogsItems from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";

export type NamesType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}


const Dialogs = () => {

    const names: NamesType[] = [
        {id: 1, name: 'Islam'},
        {id: 2, name: 'Senya'},
        {id: 3, name: 'Genya'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Sasha'}
    ]

    const newNames = names.map(el => <DialogsItems id={el.id} name={el.name}/>)

    const messages: MessagesType[] = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What to learn today'},
        {id: 4, message: 'Good job'},
        {id: 5, message: 'Buy'},
    ]

    const newMessages = messages.map(el => {
        return (
            <MessageItems message={el.message}/>
        )
    })

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
        </div>
    )
}

export default Dialogs;