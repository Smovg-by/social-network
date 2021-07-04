import { connect } from 'react-redux'
import { RootStateType } from '../../redux/redux-store'
import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
  UserType
} from '../../redux/usersReducer'
import axios from 'axios'
import React from 'react'
import { Users } from './Users'
import Preloader from '../Common/Preloader/Preloader'

type UsersAPIPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  setUsers: (items: Array<UserType>) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersAPIPropsType> {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (page: number) => {

    this.props.setCurrentPage(page)
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
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
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>
  }
}

// export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

// type mapDispatchPropsType = {
//   follow: (userId: number) => void
//   unfollow: (userId: number) => void
//   setUsers: (users: Array<UserType>) => void
//   setCurrentPage: (currentPage: number) => void
//   setTotalUsersCount: (totalCount: number) => void
//   toggleIsFetching: (isFetching: boolean) => void
// }

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//       dispatch(unFollowAC(userId))
//     },
//     setUsers: (users: Array<UserType>) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalCount: number) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(setToggleIsFetchingAC(isFetching))
//     },
//   }
// }

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
  }
)(UsersContainer)
