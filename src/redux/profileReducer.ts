export const ADD_POST: 'ADD_POST' = 'ADD_POST'
export const UPDATE_POST_TEXT: 'UPDATE_POST_TEXT' = 'UPDATE_POST_TEXT'
export const SET_USER_PROFILE: 'SET_USER_PROFILE' = 'SET_USER_PROFILE'

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

export type ActionType =
  | AddPostActionType
  | UpdatePostTextType
  | setUserProfileType

type Posts = {
  id: number
  message: string
  likesCount: number
}

export type InitialStateType = {
  newPostText: string
  posts: Array<Posts>
  profile: string
}

let initialState = {
  newPostText: 'it-kamasutra',
  posts: [
    { id: 1, message: 'Hi! How are you?', likesCount: 12 },
    { id: 2, message: 'It is my first post', likesCount: 11 },
    { id: 3, message: 'BlaBla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ],
  profile: 'this is a profile info'
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
    default:
      return state
  }
}
