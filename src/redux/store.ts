import {addPostAC, updateInputValueAC} from "./profileReducer";
import {addDialogsMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";

type NamesType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

export type NamesArrayType = {
    names: NamesType[]
    messages: MessagesType[]
    newMessageTextBody: string
}

export type postItemsArrayType = {
    postItems: PostType[]
    newPostText: string
}

export type StateType = {
    profilePage: postItemsArrayType
    dialogsPage: NamesArrayType
}

export type ActionsTypes = ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof addDialogsMessageAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateInputValueAC>

export type StoreType = {
    getState: () => StateType
    _state: StateType
    _renderTree: () => void
    subscriber: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

// let store: StoreType = {
//     _state: {
//         profilePage: {
//             postItems: [
//                 {id: 1, message: 'Hello Bro!', likesCount: 12},
//                 {id: 2, message: 'It is so cool', likesCount: 34}],
//             newPostText: 'it-kamasutra'
//         },
//         dialogsPage: {
//             names: [
//                 {id: 1, name: 'Islam'},
//                 {id: 2, name: 'Senya'},
//                 {id: 3, name: 'Genya'},
//                 {id: 4, name: 'Artem'},
//                 {id: 5, name: 'Sasha'}],
//             messages: [
//                 {id: 1, message: 'Hi!'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'What to learn today'},
//                 {id: 4, message: 'Good job'},
//                 {id: 5, message: 'Buy'},],
//             newMessageTextBody: ''
//         }
//     },
//     _renderTree() {
//         console.log('renderTree')
//     },
//     getState() {
//         return this._state
//     },
//     subscriber(observer) {
//         this._renderTree = observer
//     },
//
//     dispatch(action) {
//         profileReducer(this._state.profilePage, action)
//         dialogsReducer(this._state, action)
//         this._renderTree()
//     }
// }
