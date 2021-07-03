// ACTION TYPES
const FOLLOW: 'FOLLOW' = 'FOLLOW'
const UNFOLLOW: 'UNFOLLOW' = 'UNFOLLOW'
const SET_USERS: 'SET_USERS' = 'SET_USERS'
const SET_CURRENT_PAGE: 'SET_CURRENT_PAGE' = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT' = 'SET_TOTAL_USERS_COUNT'

export type ActionType =
  | FollowType
  | UnFollowType
  | SetUsersType
  | SetCurrentPageType
  | SetTotalUsersCountType

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

export const followAC = (userId: number): FollowType => {
  return { type: FOLLOW, userId: userId }
}
export const unFollowAC = (userId: number): UnFollowType => {
  return { type: UNFOLLOW, userId: userId }
}
export const setUsersAC = (users: Array<UserType>): SetUsersType => {
  return { type: SET_USERS, users: users }
}
export const setCurrentPageAC = (currentPage: number): SetCurrentPageType => {
  return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}
export const setTotalUsersCountAC = (
  totalCount: number
): SetTotalUsersCountType => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount: totalCount }
}

// INITIAL STATE

type UserPhotosType = {
  small: string
  large: string
}

export type UserType = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: UserPhotosType
  status: string | null
  followed: boolean
}

type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 3
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

    default:
      return state
  }
}
