import { userAPI } from '../api/api';
import { AppStateType } from './redux-store';


// ACTION TYPES
const FOLLOW: 'FOLLOW' = 'FOLLOW'
const UNFOLLOW: 'UNFOLLOW' = 'UNFOLLOW'
const SET_USERS: 'SET_USERS' = 'SET_USERS'
const SET_CURRENT_PAGE: 'SET_CURRENT_PAGE' = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT' = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING' = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS: 'TOGGLE_IS_FOLLOWING_PROGRESS' =
  'TOGGLE_IS_FOLLOWING_PROGRESS'

export type ActionType =
  | FollowType
  | UnFollowType
  | SetUsersType
  | SetCurrentPageType
  | SetTotalUsersCountType
  | SetToggleIsFetchingType
  | SetToggleIsFollowingProgressType

type FollowType = {
  type: 'FOLLOW'
  userId: number
}
type UnFollowType = {
  type: 'UNFOLLOW'
  userId: number
}
type SetUsersType = {
  type: 'SET_USERS'
  users: Array<UserType>
}
type SetCurrentPageType = {
  type: 'SET_CURRENT_PAGE'
  currentPage: number
}
type SetTotalUsersCountType = {
  type: 'SET_TOTAL_USERS_COUNT'
  totalCount: number
}
type SetToggleIsFetchingType = {
  type: 'TOGGLE_IS_FETCHING'
  isFetching: boolean
}
type SetToggleIsFollowingProgressType = {
  type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
  id: number
  isFetching: boolean
}

export const followSuccess = (userId: number): FollowType => {
  return { type: FOLLOW, userId: userId }
}
export const unfollowSuccess = (userId: number): UnFollowType => {
  return { type: UNFOLLOW, userId: userId }
}
export const setUsers = (users: Array<UserType>): SetUsersType => {
  return { type: SET_USERS, users: users }
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
  return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}
export const setTotalUsersCount = (
  totalCount: number
): SetTotalUsersCountType => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount: totalCount }
}
export const toggleIsFetching = (
  isFetching: boolean
): SetToggleIsFetchingType => {
  return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }
}
export const toggleIsFollowingProgress = (
  id: number,
  isFetching: boolean
): SetToggleIsFollowingProgressType => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, id, isFetching }
}

// INITIAL STATE

export type UserPhotosType = {
  small: string
  large: string
}

export type UserType = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: UserPhotosType
  status: string
  followed: boolean
}

type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 5,
  isFetching: false,
  followingInProgress: []
}

// REDUCER
export const usersReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            // чтобы сэкономить память, будем менять только того юзера, но не самого, а его копию, у которого совпадает id.
            return { ...u, followed: true }
          }
          // если id не совпадает, возвращаем сам объект, не копируем
          return u
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            // чтобы сэкономить память, будем менять только того юзера, но не самого, а его копию, у которого совпадает id.
            return { ...u, followed: false }
          }
          // если id не совпадает, возвращаем сам объект, не копируем
          return u
        })
      }

    case SET_USERS:
      // массив пользователей будем получать от сервера. Склеиваем два массива, которые были и которые пришли
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }
    default:
      return state
  }
}

// THUNK CREATOR

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: (action: ActionType) => AppStateType) => {
    dispatch(toggleIsFetching(true))

    userAPI.getUsers(currentPage, pageSize).then(response => {

      dispatch(toggleIsFetching(false))
      dispatch(setUsers(response.items))
      dispatch(setTotalUsersCount(response.totalCount))

    })
  }
}
// THUNK CREATORS
export const unfollow = (userId: number) => {
  return (dispatch: (action: ActionType) => AppStateType) => {
    dispatch(toggleIsFollowingProgress(userId, true))
    userAPI.unFollowUsers(userId)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
      })
      .finally(() => {
        dispatch(toggleIsFollowingProgress(userId, false))
      })
  }
}

export const follow = (userId: number) => {
  return (dispatch: (action: ActionType) => AppStateType) => {
    dispatch(toggleIsFollowingProgress(userId, true))
    userAPI.followUsers(userId)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
      })
      .finally(() => {
        dispatch(toggleIsFollowingProgress(userId, false))
      })
  }
}
