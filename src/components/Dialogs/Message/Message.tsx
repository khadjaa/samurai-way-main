import s from './../Dialogs.module.css';

export type MessageItemsProps = {
    message: string
}

const MessageItems = (props: MessageItemsProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default MessageItems;