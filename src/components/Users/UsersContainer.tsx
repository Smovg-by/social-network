import { connect } from 'react-redux'
import { RootStateType } from '../../redux/redux-store'
import { Users } from './Users'
import {
  ActionType,
  followAC,
  setUsersAC,
  unFollowAC,
  UserType
} from '../../redux/usersReducer'

type MapStatePropsType = {
  users: Array<UserType>
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
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
