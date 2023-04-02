import {ActionsTypes} from "./store";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    postItems: [
        {id: 1, message: 'Hello Bro!', likesCount: 12},
        {id: 2, message: 'It is so cool', likesCount: 34}
    ] as Array<PostType>,
    newPostText: 'it-kamasutra'
}

export type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            if (state.newPostText.trim()) {
                let newPost: PostType = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }
                let copyState = {...state}
                copyState.postItems = [...state.postItems]
                copyState.postItems.push(newPost)
                copyState.newPostText = ''
                return copyState
            }

            return state
        }
        case 'CHANGE-NEW-POST-TEXT': {
            let copyState = {...state}
            copyState.newPostText = action.postMessage
            return copyState
        }

        default:
            return state
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