import React from 'react';
import axios from "axios";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/29349')
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

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)