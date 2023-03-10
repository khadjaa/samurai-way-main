export type NamesType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostType = {
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

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateInputValueAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof addDialogsMessageAC>

export type StoreType = {
    getState: () => StateType
    _state: StateType
    _renderTree: () => void
    subscriber: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            postItems: [
                {id: 1, message: 'Hello Bro!', likesCount: 12},
                {id: 2, message: 'It is so cool', likesCount: 34}],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
    },
    _renderTree() {
        console.log('renderTree')
    },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._renderTree = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            if (this._state.profilePage.newPostText.trim()) {
                let newPost: PostType = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.postItems.push(newPost)
            }

            this._state.profilePage.newPostText = ''
            this._renderTree()
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.postMessage
            this._renderTree()
        } else if (action.type === 'CHANGE-NEW-DIALOGS-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageTextBody = action.dialogMessage
            this._renderTree()
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessagesType = {
                id: 3,
                message: this._state.dialogsPage.newMessageTextBody
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageTextBody = ''
            this._renderTree()
        }
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateInputValueAC = (message: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        postMessage: message
    } as const
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