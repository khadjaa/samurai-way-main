import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfile, ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: number) => void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userId
        this.props.getProfile(+userID)
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
export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataProfileContainer)