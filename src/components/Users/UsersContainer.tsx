import { connect } from 'react-redux'
import { RootStateType } from '../../redux/redux-store'
import { Users } from './Users'
import {
  followAC,
  setUsersAC,
  unFollowAC,
  UserType
} from '../../redux/usersReducer'
import { Dispatch } from 'redux'

export type UsersPropsType = MapStatePropsType & mapDispatchPropsType

type MapStatePropsType = {
  users: Array<UserType>
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users
  }
}

type mapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
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
    }
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
