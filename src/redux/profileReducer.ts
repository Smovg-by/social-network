import { ThunkAction } from 'redux-thunk'
import { profileAPI } from '../api/api'
import { AppStateType } from './redux-store'

// ACTION TYPES

export const ADD_POST = 'ADD_POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

// ACTION CREATORS

export const addPostAC = (text: string): AddPostActionType => {
  return { type: ADD_POST, postMessage: text }
}

export const setUserProfile = (profile: any): setUserProfileType => {
  return { type: SET_USER_PROFILE, profile }
}

export const setStatus = (status: string): setStatusType => {
  return { type: SET_STATUS, status }
}

export type AddPostActionType = {
  type: typeof ADD_POST
  postMessage: string
}

export type setUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: any
}
export type setStatusType = {
  type: typeof SET_STATUS
  status: string
}

export type ActionType = AddPostActionType | setUserProfileType | setStatusType

// INITIAL STATE

export type Posts = {
  id: number
  message: string
  likesCount: number
}

export type ProfileInfoType = {
  aboutMe: string | null
  contacts: ProfileContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number
  photos: ProfilePhotosType
}

export type ProfileContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type ProfilePhotosType = {
  small: string | null
  large: string | null
}

export type InitialStateType = {
  newPostText: string
  posts: Array<Posts>
  profile: null | ProfileInfoType
  status: string
}

let initialState = {
  newPostText: 'it-kamasutra',
  posts: [
    { id: 1, message: 'Hi! How are you?', likesCount: 12 },
    { id: 2, message: 'It is my first post', likesCount: 11 },
    { id: 3, message: 'BlaBla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ],
  profile: null as ProfileInfoType | null,
  status: ''
}

// REDUCER

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.postMessage,
        likesCount: 0
      }
      return { ...state, posts: [newPost, ...state.posts], newPostText: '' }
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    case SET_STATUS: {
      return { ...state, status: action.status }
    }

    default:
      return state
  }
}

// THUNK CREATOR

type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType>

export const getProfile = (userId: string): ThunkType => async dispatch => {
  try {
    const res = await profileAPI.getProfileInfo(userId)
    dispatch(setUserProfile(res.data))
  } catch (error) {
    throw new Error(error)
  }
}

export const getStatus = (userId: string): ThunkType => async dispatch => {
  try {
    const res = await profileAPI.getStatus(userId)
    if (res) {
      dispatch(setStatus(res))
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const updateStatus = (status: string): ThunkType => async dispatch => {
  try {
    const res = await profileAPI.updateStatus(status)
    if (res.resultCode === 0) {
      dispatch(setStatus(status))
    }
  } catch (error) {
    throw new Error(error)
  }
}
