import s from './Dialogs.module.css';
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