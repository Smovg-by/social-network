import { connect } from 'react-redux'
import { RootStateType } from '../../redux/redux-store'
import { Users } from './Users'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowAC,
  UserType
} from '../../redux/usersReducer'
import { Dispatch } from 'redux'

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

type mapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
