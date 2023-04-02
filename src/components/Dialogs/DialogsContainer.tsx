import React from 'react';
import {addDialogsMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {AppStateType, rootReducerType, store} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {NamesArrayType} from "../../redux/store";

// export type DialogsPropsType = {
//     store: rootReducerType
// }

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const sendMessage = () => store.dispatch(addDialogsMessageAC())
//
//                 const updateNewMessageBody = (text: string) => {
//                     store.dispatch(updateNewMessageBodyAC(text))
//                 }
//                 return (
//                     <Dialogs state={store.getState().dialogsPage} updateNewMessageBody={updateNewMessageBody}
//                              sendMessage={sendMessage}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
//
// }

type MapStatePropsType = {
    dialogsPage: NamesArrayType
}

type DispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody:(text: string) => void
}

export type DialogsPropsType = MapStatePropsType & DispatchPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
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