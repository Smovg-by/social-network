// ACTION TYPES
const FOLLOW: 'FOLLOW' = 'FOLLOW'
const UNFOLLOW: 'UNFOLLOW' = 'UNFOLLOW'
const SET_USERS: 'SET_USERS' = 'SET_USERS'

export type ActionType = FollowType | UnFollowType | SetUsersType

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

export const followAC = (userId: number): FollowType => {
  return { type: FOLLOW, userId: userId }
}
export const unFollowAC = (userId: number): UnFollowType => {
  return { type: UNFOLLOW, userId: userId }
}
export const setUsersAC = (users: Array<UserType>): SetUsersType => {
  return { type: SET_USERS, users: users }
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
}

let initialState: InitialStateType = {
  users: []
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
      return { ...state, users: [...state.users, ...action.users] }

    default:
      return state
  }
}
