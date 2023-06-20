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
    newPostText: 'it-kamasutra',
    profile: ''
}

export type initialStateType = typeof initialState

type ActionsTypes =  AddPostType | UpdatePostType | SetUserProfileType

export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            if (state.newPostText.trim()) {
                let newPost: PostType = {id: 5, message: state.newPostText, likesCount: 0}
                return {...state, postItems: [...state.postItems, newPost], newPostText: ''}
            }
            return state
        }
        case 'CHANGE-NEW-POST-TEXT': {
            return {...state, newPostText: action.postMessage}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

type UpdatePostType = ReturnType<typeof updateInputValueAC>
export const updateInputValueAC = (message: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        postMessage: message
    } as const
}

type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}