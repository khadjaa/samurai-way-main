import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogsItemsProps = {
    id: number
    name: string
}

const DialogsItems = (props: DialogsItemsProps) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogsItems;