import {Dispatch} from "redux";
import {usersApi} from "../api/api";
import axios from "axios";

export type UserType = {
    id: number,
    photos: { small: string, large: string },
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, county: string }
}

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

// export type initialStateType = typeof initialState

type ActionsType = FollowType | UnFollowType
    | SetUsersType | SetCurrentPage
    | SetTotalUsersCount | ToggleIsFetching
    | ToggleFollowingInProgress


export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId
                    ? {...el, followed: !el.followed}
                    : el)
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId
                    ? {...el, followed: !el.followed}
                    : el)
            }
        }
        case 'SET-USERS' : {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_IN_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

type FollowType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

type UnFollowType = ReturnType<typeof unFollowSuccess>
export const unFollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

type SetUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

type SetCurrentPage = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

type SetTotalUsersCount = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        count: totalUsersCount
    } as const
}

type ToggleIsFetching = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}

type ToggleFollowingInProgress = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS',
        isFetching,
        userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const unFollow = (user: UserType) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, user.id))
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
        {
            withCredentials: true,
            headers: {
                'API-KEY': 'ec578b22-e0ab-48ce-86ed-f73094d8dad1'
            }
        })
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowSuccess(user.id))
            }
            dispatch(toggleFollowingInProgress(false, user.id))
        })
}


export const follow = (user: UserType) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, user.id))
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
        {
            withCredentials: true,
            headers: {
                'API-KEY': 'ec578b22-e0ab-48ce-86ed-f73094d8dad1'
            }
        })
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followSuccess(user.id))
            }
            dispatch(toggleFollowingInProgress(false, user.id))
        })
}