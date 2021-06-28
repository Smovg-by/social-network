//
//STORE START
//

import dialogsReducer from './dialogsReducer'
import { profileReducer } from './profileReducer'
import sidebarReducer from './sideBarReducer'

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

// STORE

export let store: StoreType = {
  _state: {
    profilePage: {
      newPostText: 'it-kamasutra',
      posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 12 },
        { id: 2, message: 'It is my first post', likesCount: 11 },
        { id: 3, message: 'BlaBla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
      ]
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
      ],
      messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How is yor IT kamasutra?' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Yo!' },
        { id: 5, message: 'Yo!' },
        { id: 6, message: 'Yo!' }
      ],
      newMessageBody: ''
    },
    sideBarData: [
      {
        id: 1,
        name: 'John',
        avatar:
          'https://im0-tub-by.yandex.net/i?id=c23ea5e31e98b34d181dc4d0907bc0a4-sr&n=13'
      },
      {
        id: 2,
        name: 'Nick',
        avatar:
          'https://im0-tub-by.yandex.net/i?id=c23ea5e31e98b34d181dc4d0907bc0a4-sr&n=13'
      },
      {
        id: 3,
        name: 'Ivan',
        avatar:
          'https://im0-tub-by.yandex.net/i?id=c23ea5e31e98b34d181dc4d0907bc0a4-sr&n=13'
      }
    ]
  },
  _callSubscriber () {
    console.log('state has been changed')
  },
  subscribe (callback) {
    this._callSubscriber = callback
  },
  getState () {
    return this._state
  },

  dispatch (action: ActionType) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sideBarData = sidebarReducer(this._state.sideBarData, action)

    this._callSubscriber(this._state) // передаем изменившийстя стейт для перерировки
  }
}

//
//STORE END
//