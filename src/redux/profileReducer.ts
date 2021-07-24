import { profileAPI } from "../api/api"
import { AppStateType } from "./redux-store"

export const ADD_POST: 'ADD_POST' = 'ADD_POST'
export const UPDATE_POST_TEXT: 'UPDATE_POST_TEXT' = 'UPDATE_POST_TEXT'
export const SET_USER_PROFILE: 'SET_USER_PROFILE' = 'SET_USER_PROFILE'
export const SET_STATUS: 'SET_STATUS' = 'SET_STATUS'

export const addPostAC = (text: string): AddPostActionType => {
  return { type: ADD_POST, postMessage: text }
}

export const updatePostTextAC = (newText: string): UpdatePostTextType => {
  return {
    type: UPDATE_POST_TEXT,
    newText: newText
  }
}

export const setUserProfile = (profile: any): setUserProfileType => {
  return { type: SET_USER_PROFILE, profile }
}

export const setStatus = (status: string | null): setStatusType => {
  return { type: SET_STATUS, status }
}

export type AddPostActionType = {
  type: 'ADD_POST'
  postMessage: string
}
export type UpdatePostTextType = {
  type: 'UPDATE_POST_TEXT'
  newText: string
}
export type setUserProfileType = {
  type: 'SET_USER_PROFILE'
  profile: any
}
export type setStatusType = {
  type: 'SET_STATUS'
  status: string | null
}

export type ActionType =
  | AddPostActionType
  | UpdatePostTextType
  | setUserProfileType
  | setStatusType

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
  status: string | null
}

let initialState = {
  newPostText: 'it-kamasutra',
  posts: [
    { id: 1, message: 'Hi! How are you?', likesCount: 12 },
    { id: 2, message: 'It is my first post', likesCount: 11 },
    { id: 3, message: 'BlaBla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ],
  profile: null,
  status: null,
}

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
    case UPDATE_POST_TEXT: {
      return { ...state, newPostText: action.newText }
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
export const getProfile = (userId: string) => {
  return (dispatch: (action: ActionType) => AppStateType) => {
    profileAPI.getProfileInfo(userId)
      .then(response => {

        dispatch(setUserProfile(response.data))
      })
  }
}

export const getStatus = (userId: string) => {
  return (dispatch: (action: ActionType) => AppStateType) => {
    profileAPI.getStatus(userId)
      .then(response => {
        if (response) {
          console.log(response);
          dispatch(setStatus(response))
        } else { dispatch(setStatus('no status')) }
      })
  }
}

export const updateStatus = (status: string) => {
  return (dispatch: (action: ActionType) => AppStateType) => {
    console.log('update status');
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.resultCode === 0) {
          // dispatch(setStatus(response.data))
          dispatch(setStatus(status))
        }
      })
  }
}
