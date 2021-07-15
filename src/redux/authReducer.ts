import { authAPI } from "../api/api"
import { AppStateType } from "./redux-store"

// ACTION TYPES
const SET_AUTH_USER_DATA: 'SET_AUTH_USER_DATA' = 'SET_AUTH_USER_DATA'
const TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING' = 'TOGGLE_IS_FETCHING'

export type ActionType = SetAuthUserDataType | SetToggleIsFetchingType

type SetAuthUserDataType = {
  type: 'SET_AUTH_USER_DATA'
  data: userAuthDataType
}

type userAuthDataType = {
  id: number
  email: string
  login: string
}

type SetToggleIsFetchingType = {
  type: 'TOGGLE_IS_FETCHING'
  isFetching: boolean
}

// ACTION CREATORS

export const setAuthUserData = (
  id: number,
  email: string,
  login: string
): SetAuthUserDataType => {
  return { type: SET_AUTH_USER_DATA, data: { id, email, login } }
}

export const toggleIsFetching = (
  isFetching: boolean
): SetToggleIsFetchingType => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}

// INITIAL STATE

type InitialStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  isFetching: boolean
}

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
}

// REDUCER
export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state
      }

    default:
      return state
  }
}

// THUNK CREATOR
export const getAuthUserData = () => {
  return (dispatch: (action: ActionType) => AppStateType) => {
    dispatch(toggleIsFetching(true))
    authAPI.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(toggleIsFetching(false))
          let { id, email, login } = response.data.data
          dispatch(setAuthUserData(id, email, login))
        }
      })
  }
}
