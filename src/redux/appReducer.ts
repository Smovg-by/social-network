import { AppStateType } from './redux-store'
import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../api/api'
import { getAuthUserData, setAuthUserData } from './authReducer'

// ACTION TYPES
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type ActionType = initializedSuccessDataType

type initializedSuccessDataType = {
  type: typeof INITIALIZED_SUCCESS
}

// ACTION CREATORS

export const initializedSuccess = (): initializedSuccessDataType => {
  return { type: INITIALIZED_SUCCESS } as const
}

// INITIAL STATE

type InitialStateType = typeof initialState

let initialState = {
  initialized: false
}

// REDUCER
export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

// THUNK CREATOR

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType>

export const initializeApp = (): ThunkType => async dispatch => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => dispatch(initializedSuccess()))
}
