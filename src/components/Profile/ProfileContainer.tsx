import React from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import { ProfileInfoType, getProfile } from '../../redux/profileReducer'
import { RootStateType } from '../../redux/redux-store'
import { withRouter, RouteComponentProps } from 'react-router'

type withRouterParamsType = {
  userId: string
}

type ProfileContainerPropsType = {
  profile: ProfileInfoType

  getProfile: (userId: string) => void
}

type CommonPropsType = RouteComponentProps<withRouterParamsType> & ProfileContainerPropsType
class ProfileContainer extends React.Component<CommonPropsType> {

  componentDidMount() {

    let userId = this.props.match.params.userId

    if (!userId) { userId = '2' } // сделаем USER по умолчанию, если других нет

    this.props.getProfile(userId) // THUNK

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

export default connect(mapStateToProps, { getProfile })(withUrlDataContainerComponent)