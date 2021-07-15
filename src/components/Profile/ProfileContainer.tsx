import React from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import { ProfileInfoType, setUserProfile } from '../../redux/profileReducer'
import { RootStateType } from '../../redux/redux-store'
import { withRouter, RouteComponentProps } from 'react-router'
import { userAPI } from '../../api/api'


type withRouterParamsType = {
  userId: string
}

type ProfileContainerPropsType = {
  profile: ProfileInfoType
  setUserProfile: (profile: ProfileInfoType) => void
}

type CommonPropsType = RouteComponentProps<withRouterParamsType> & ProfileContainerPropsType
class ProfileContainer extends React.Component<CommonPropsType> {

  componentDidMount() {

    let userId = this.props.match.params.userId

    if (!userId) { userId = '2' } // сделаем USER по умолчанию, если других нет

    userAPI.getProfileInfo(userId)
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
  profile: ProfileInfoType
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent)