import {ActionsTypes, PostType, StateType} from "./state";

export const profileReducer = (state: StateType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            if (state.profilePage.newPostText.trim()) {
                let newPost: PostType = {
                    id: 5,
                    message: state.profilePage.newPostText,
                    likesCount: 0
                }
                state.profilePage.postItems.push(newPost)
            }

            state.profilePage.newPostText = ''
            return state
        case 'CHANGE-NEW-POST-TEXT':
            state.profilePage.newPostText = action.postMessage
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