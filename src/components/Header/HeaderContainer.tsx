import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData, UserDataType} from "../../redux/authReducer";
import axios from "axios";

type mapStateToPropsType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setAuthUserData: (data: UserDataType) => void
}
export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if( response.data.resultCode === 0){
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

//norm esli potyanul tip iz reducera ?
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
}) as mapStateToPropsType

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)