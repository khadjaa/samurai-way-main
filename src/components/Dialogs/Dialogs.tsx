import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogsItemsProps = {
    id: number
    name: string
}

export type MessageItemsProps = {
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItems id={1} name={'Islam'}/>
                <DialogsItems id={2} name={'Senya'}/>
                <DialogsItems id={3} name={'Genya'}/>
                <DialogsItems id={4} name={'Artem'}/>
                <DialogsItems id={5} name={'Sasha'}/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <MessageItems message={'Hi'}/>
                    <MessageItems message={'How is your it?'}/>
                    <MessageItems message={'Cool'}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;