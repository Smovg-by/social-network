import {
  ActionType,
  SendMessageActionType,
  UpdateNewMessageBodyActionType
} from './state'

export const UPDATE_NEW_MESSAGE_BODY: 'UPDATE_NEW_MESSAGE_BODY' =
  'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE: 'SEND_MESSAGE' = 'SEND_MESSAGE'

export const UpdateNewMessageBodyAC = (
  text: string
): UpdateNewMessageBodyActionType => {
  return {
    type: 'UPDATE_NEW_MESSAGE_BODY',
    body: text
  }
}

export const SendMessageAC = (text: string): SendMessageActionType => {
  return {
    type: 'SEND_MESSAGE',
    body: text
  }
}

//state = this._state.dialogsPage

export const dialogsReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({ id: 6, message: body })
      return state
    default:
      return state
  }

  // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
  //   state.newMessageBody = action.body
  //   // this._callSubscriber(this._state)
  // } else if (action.type === 'SEND_MESSAGE') {
  //   let body = state.newMessageBody
  //   state.newMessageBody = ''
  //   state.messages.push({ id: 6, message: body })
  //   // this._callSubscriber(this._state)
  // }
  // return state
}

export default dialogsReducer
