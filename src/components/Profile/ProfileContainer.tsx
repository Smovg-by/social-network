import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { ProfileInfoType, getProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { AppStateType } from '../../redux/redux-store'
import { withRouter, RouteComponentProps } from 'react-router'
import { Profile } from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


type withRouterParamsType = {
  userId: string
}

type ProfileContainerPropsType = {
  profile: ProfileInfoType | null
  isAuth: boolean
  status: string
  getProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}

type MapStateToPropsType = {
  profile: ProfileInfoType | null
  status: string
}

type CommonPropsType = RouteComponentProps<withRouterParamsType> & ProfileContainerPropsType
class ProfileContainer extends React.Component<CommonPropsType> {

  componentDidMount() {

    let userId = this.props.match.params.userId

    if (!userId) { userId = '17787' } // сделаем USER по умолчанию, если других нет

    this.props.getProfile(userId) // THUNK

    this.props.getStatus(userId)

  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  }
}

// создадим контейнерную компоненту

// let withUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, { getProfile })(withUrlDataContainerComponent))

export default compose<ComponentType>(connect(mapStateToProps, { getProfile, getStatus, updateStatus }), withRouter, withAuthRedirect)(ProfileContainer)