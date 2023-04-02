import {ActionsTypes, MessagesType, StateType} from "./store";

export const dialogsReducer = (state: StateType, action: ActionsTypes) => {

    switch (action.type) {
        case 'CHANGE-NEW-DIALOGS-MESSAGE-TEXT':
            state.dialogsPage.newMessageTextBody = action.dialogMessage
            return state
        case 'ADD-MESSAGE':
            let newMessage: MessagesType = {
                id: 3,
                message: state.dialogsPage.newMessageTextBody
            }
            state.dialogsPage.messages.push(newMessage)
            state.dialogsPage.newMessageTextBody = ''
            return state
        default:
            return state
    }
}

export const addDialogsMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const updateNewMessageBodyAC = (message: string) => {
    return {
        type: 'CHANGE-NEW-DIALOGS-MESSAGE-TEXT',
        dialogMessage: message
    } as const
}
