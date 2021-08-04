import { AppStateType } from './redux-store'
import { FormAction, stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../api/api'

// ACTION TYPES
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type ActionType = SetAuthUserDataType | SetToggleIsFetchingType

type SetAuthUserDataType = {
  type: typeof SET_AUTH_USER_DATA
  data: userAuthDataType
}

type userAuthDataType = {
  id: number
  email: string
  login: string
  isAuth: boolean
}

type SetToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

// ACTION CREATORS

export const setAuthUserData = (
  id: number,
  email: string,
  login: string,
  isAuth: boolean
): SetAuthUserDataType => {
  return { type: SET_AUTH_USER_DATA, data: { id, email, login, isAuth } }
}

export const toggleIsFetching = (
  isFetching: boolean
): SetToggleIsFetchingType => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}

// INITIAL STATE

type InitialStateType = typeof initialState

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
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
        ...action.data
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

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType | FormAction>

export const getAuthUserData = (): ThunkType => async dispatch => {
  dispatch(toggleIsFetching(true))
  try {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
      dispatch(toggleIsFetching(false))
      let { id, email, login } = res.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const loginTC = (
  login: string,
  password: string,
  rememberMe: boolean = false
): ThunkType => async dispatch => {
  try {
    const res = await authAPI.logIn(login, password, rememberMe)
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      let message =
        res.data.messages.length > 0 ? res.data.messages[0] : 'some error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const logoutTC = (): ThunkType => async dispatch => {
  try {
    const res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(0, '', '', false))
    }
  } catch (error) {
    throw new Error(error)
  }
}
