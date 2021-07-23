import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import {
  setCurrentPage,
  UserType,
  getUsersThunkCreator,
  unfollow,
  follow,
} from '../../redux/usersReducer'
import React, { ComponentType } from 'react'
import { Users } from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

type UsersContainerPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
  setCurrentPage: (currentPage: number) => void
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}
class UsersContainer extends React.Component<UsersContainerPropsType> {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page)
    this.props.getUsersThunkCreator(page, this.props.pageSize)
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    </>
  }
}

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// создадим контейнерную компоненту
// let AuthRedirectComponent = withAuthRedirect(UsersContainer)

// export default connect(
//   mapStateToProps,
//   {
//     setCurrentPage,
//     getUsersThunkCreator,
//     unfollow,
//     follow,
//   }
// )(AuthRedirectComponent)

export default compose<ComponentType>(connect(mapStateToProps, {
  setCurrentPage,
  getUsersThunkCreator,
  unfollow,
  follow,
}
), withAuthRedirect)(UsersContainer)
