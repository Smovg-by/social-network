import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import { InitialStateType, ProfileInfoType, setUserProfile } from '../../redux/profileReducer'
import { RootStateType } from '../../redux/redux-store'

type ProfileContainerPropsType = {
  profile: any
  setUserProfile: (profile: any) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    // this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />

      </div>
    )
  }
}

type MapStateToPropsType = {
  profile: ProfileInfoType | null
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)