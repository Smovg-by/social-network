import {
  ActionType,
  SendMessageActionType,
  UpdateNewMessageBodyActionType
} from './store'

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

type DialogType = {
  id: number
  name: string
}

type MessagesType = {
  id: number
  message: string
}
// вместо прописывания типизации вручную можно взять ее из объекта
type InitialStateType = typeof initialState

// type InitialStateType = {
//   dialogs: Array<Dialog>
//   messages: Array<Messages>
//   newMessageBody: string
// }

const initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' }
    // typescript не берет автоматически типизации с глубоких вложенностей, типизируем отдельно
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'How is yor IT kamasutra?' },
    { id: 3, message: 'Yo!' },
    { id: 4, message: 'Yo!' },
    { id: 5, message: 'Yo!' },
    { id: 6, message: 'Yo!' }
    // typescript не берет автоматически типизации с глубоких вложенностей, типизируем отдельно
  ] as Array<MessagesType>,
  newMessageBody: ''
}

export const dialogsReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body }

    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      }

    default:
      return state
  }
}

export default dialogsReducer
