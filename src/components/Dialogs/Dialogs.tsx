import s from './Dialogs.module.css';
import DialogsItems from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import {MessagesType, NamesType} from "../../index";

export type DialogsPropsType = {
    names: NamesType[]
    messages: MessagesType[]
}

const Dialogs = (props:DialogsPropsType) => {

    const newNames = props.names.map(el => <DialogsItems id={el.id} name={el.name}/>)

    const newMessages = props.messages.map(el => {
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