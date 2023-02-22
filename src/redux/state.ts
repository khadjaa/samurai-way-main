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

export type StateType ={
    names: NamesType[]
    messages: MessagesType[]
    postItems: PostType[]
}

let state: StateType = {
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
    postItems: [
        {id: 1, message: 'Hello Bro!', likesCount: 12},
        {id: 2, message: 'It is so cool', likesCount: 34},]
}

export default state;