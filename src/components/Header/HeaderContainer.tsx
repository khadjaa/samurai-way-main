import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthMe} from "../../redux/authReducer";

type mapStateToPropsType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getAuthMe: () => void
}
export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
}) as mapStateToPropsType

export default connect(mapStateToProps, {getAuthMe})(HeaderContainer)