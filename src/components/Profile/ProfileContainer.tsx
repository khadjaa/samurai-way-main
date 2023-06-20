import React from 'react';
import axios from "axios";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(res => {
                this.props.setUserProfile(res.data)
                console.log(res.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)