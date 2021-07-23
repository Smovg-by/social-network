import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { ProfileInfoType, getProfile } from '../../redux/profileReducer'
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
  getProfile: (userId: string) => void
}

type MapStateToPropsType = {
  profile: ProfileInfoType | null
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
        <Profile profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  }
}

// создадим контейнерную компоненту

// let withUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, { getProfile })(withUrlDataContainerComponent))

export default compose<ComponentType>(connect(mapStateToProps, { getProfile }), withRouter, withAuthRedirect)(ProfileContainer)