import React from 'react'
import { connect } from 'react-redux'
import { ProfileInfoType, getProfile } from '../../redux/profileReducer'
import { AppStateType, RootStateType } from '../../redux/redux-store'
import { withRouter, RouteComponentProps } from 'react-router'
import { Profile } from './Profile'
import { Redirect } from 'react-router-dom'


type withRouterParamsType = {
  userId: string
}

type ProfileContainerPropsType = {

  profile: ProfileInfoType | null
  isAuth: boolean
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

    if (!this.props.isAuth) return <Redirect to={'/login'} />

    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    )
  }
}

type MapStateToPropsType = {
  profile: ProfileInfoType | null
  isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfile })(withUrlDataContainerComponent)