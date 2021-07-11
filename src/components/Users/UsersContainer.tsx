import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
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
import { getUsers } from '../../api/api'

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

    getUsers(this.props.currentPage, this.props.pageSize).then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.items)
      this.props.setTotalUsersCount(response.totalCount)
    })
  }

  onPageChanged = (page: number) => {

    this.props.setCurrentPage(page)
    this.props.toggleIsFetching(true)

    getUsers(page, this.props.pageSize)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.items)
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

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

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
