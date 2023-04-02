import {ActionsTypes, MessagesType, StateType} from "./store";

let initState = {
    names: [
        {id: 1, name: 'Islam'},
        {id: 2, name: 'Senya'},
        {id: 3, name: 'Genya'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Sasha'}],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What to learn today'},
        {id: 4, message: 'Good job'},
        {id: 5, message: 'Buy'},],
    newMessageTextBody: ''
}


export const dialogsReducer = (state = initState, action: ActionsTypes) => {

    switch (action.type) {
        case 'CHANGE-NEW-DIALOGS-MESSAGE-TEXT':
            state.newMessageTextBody = action.dialogMessage
            return state
        case 'ADD-MESSAGE':
            let newMessage: MessagesType = {
                id: 3,
                message: state.newMessageTextBody
            }
            state.messages.push(newMessage)
            state.newMessageTextBody = ''
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
