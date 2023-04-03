// import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialState, setUsersAC, unFollowAC} from "../../redux/usersReducer";

type mapStateToPropsType = {
    users: InitialState
}

type mapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: any) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

