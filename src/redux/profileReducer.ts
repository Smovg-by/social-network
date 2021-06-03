import { ActionType, AddPostActionType, UpdatePostTextType } from './state'

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

// state = this._state.profilePage

export const profileReducer = (state: any, action: ActionType) => {
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

  // if (action.type === ADD_POST) {
  //   let newPost = {
  //     id: 5,
  //     message: action.postMessage,
  //     likesCount: 0
  //   }
  //   state.posts.unshift(newPost)
  //   state.newPostText = ''
  // } else if (action.type === UPDATE_POST_TEXT) {
  //   state.newPostText = action.newText
  // }
  // return state
}
