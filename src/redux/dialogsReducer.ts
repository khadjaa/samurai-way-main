import {ActionsTypes} from "./store";

export type NamesType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

let initState = {
    names: [
        {id: 1, name: 'Islam'},
        {id: 2, name: 'Senya'},
        {id: 3, name: 'Genya'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Sasha'}
    ] as Array<NamesType>,
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What to learn today'},
        {id: 4, message: 'Good job'},
        {id: 5, message: 'Buy'},
    ] as Array<MessagesType>,
    newMessageTextBody: ''
}

export type InitialStateType = typeof initState

export const dialogsReducer = (state: InitialStateType = initState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'CHANGE-NEW-DIALOGS-MESSAGE-TEXT': {
            return {...state, newMessageTextBody: action.dialogMessage}
        }
        case 'ADD-MESSAGE': {
            let newMessage: MessagesType = {id: 3, message: state.newMessageTextBody}
            return {...state, messages: [...state.messages, newMessage], newMessageTextBody: ''}
        }
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
