import { ActionType, AddPostActionType, UpdatePostTextType } from './store'

export const ADD_POST: 'ADD_POST' = 'ADD_POST'
export const UPDATE_POST_TEXT: 'UPDATE_POST_TEXT' = 'UPDATE_POST_TEXT'

export const addPostAC = (text: string): AddPostActionType => {
  return { type: ADD_POST, postMessage: text }
}

export const updatePostTextAC = (newText: string): UpdatePostTextType => {
  return {
    type: UPDATE_POST_TEXT,
    newText: newText
  }
}

type Posts = {
  id: number
  message: string
  likesCount: number
}

type InitialStateType = {
  newPostText: string
  posts: Array<Posts>
}

let initialState = {
  newPostText: 'it-kamasutra',
  posts: [
    { id: 1, message: 'Hi! How are you?', likesCount: 12 },
    { id: 2, message: 'It is my first post', likesCount: 11 },
    { id: 3, message: 'BlaBla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ]
}

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.postMessage,
        likesCount: 0
      }
      state.posts.unshift(newPost)
      state.newPostText = ''
      return state
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}
