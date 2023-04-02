import {ActionsTypes, postItemsArrayType, PostType} from "./store";

let initialState: postItemsArrayType = {
    postItems: [
        {id: 1, message: 'Hello Bro!', likesCount: 12},
        {id: 2, message: 'It is so cool', likesCount: 34}],
    newPostText: 'it-kamasutra'
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            if (state.newPostText.trim()) {
                let newPost: PostType = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }
                state.postItems.push(newPost)
            }

            state.newPostText = ''
            return state
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.postMessage
            return state
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