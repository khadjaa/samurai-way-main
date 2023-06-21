import React from 'react';
import {addDialogsMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {NamesArrayType} from "../../redux/store";

type MapStatePropsType = {
    dialogsPage: NamesArrayType
    isAuth: boolean
}

type DispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody:(text: string) => void
}

export type DialogsPropsType = MapStatePropsType & DispatchPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        sendMessage:() => {
            dispatch(addDialogsMessageAC())
        },
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) // ?

export default DialogsContainer;