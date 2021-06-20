import { combineReducers, createStore } from 'redux'
import { profileReducer } from './profileReducer'
import { dialogsReducer } from './dialogsReducer'
import { sidebarReducer } from './sideBarReducer'

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBarData: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

export type Dialog = {
  id: number
  name: string
}

export type Messages = {
  id: number
  message: string
}

export type Posts = {
  id: number
  message: string
  likesCount: number
}

export type Friends = {
  id: number
  name: string
  avatar: string
}

export type profilePageType = {
  newPostText: string
  posts: Array<Posts>
}

export type dialogsPageType = {
  dialogs: Array<Dialog>
  messages: Array<Messages>
  newMessageBody: string
}

export type RootStateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
  sideBarData: Array<Friends>
}

export type StoreType = {
  _state: RootStateType
  // addPost: (postMessage: string) => void
  // updatePostText: (newText: string) => void
  _callSubscriber: (_state: RootStateType) => void
  subscribe: (callback: () => void) => void
  getState: () => RootStateType
  dispatch: (action: any) => void
}

export type AddPostActionType = {
  type: 'ADD_POST'
  postMessage: string
}
export type UpdatePostTextType = {
  type: 'UPDATE_POST_TEXT'
  newText: string
}

export type UpdateNewMessageBodyActionType = {
  type: 'UPDATE_NEW_MESSAGE_BODY'
  body: string
}
export type SendMessageActionType = {
  type: 'SEND_MESSAGE'
  body: string
}

export type ActionType =
  | AddPostActionType
  | UpdatePostTextType
  | UpdateNewMessageBodyActionType
  | SendMessageActionType
