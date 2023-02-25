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
}

export type StateType = {
    profilePage: postItemsArrayType
    dialogsPage: NamesArrayType
}

let state: StateType = {
    profilePage: {
        postItems: [
            {id: 1, message: 'Hello Bro!', likesCount: 12},
            {id: 2, message: 'It is so cool', likesCount: 34},]
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

export const addPost = (postMessage: string) =>{
    debugger
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postItems.push(newPost)
}

export default state;