let renderTree = () => {
    console.log('renderTree')
}

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
}

export type postItemsArrayType = {
    postItems: PostType[]
    newPostText: string
}

export type StateType = {
    profilePage: postItemsArrayType
    dialogsPage: NamesArrayType
}

let state: StateType = {
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
    }
}

export const addPost = () => {
    if (state.profilePage.newPostText.trim()) {
        let newPost: PostType = {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: 0
        }
        state.profilePage.postItems.push(newPost)
    }

    state.profilePage.newPostText = ''
    renderTree()
}

export const updateInputValue = (postMessage: string) => {
    state.profilePage.newPostText = postMessage
    renderTree()
}

export const subscriber = (observer: () => void) => {
    renderTree = observer
}

export default state;