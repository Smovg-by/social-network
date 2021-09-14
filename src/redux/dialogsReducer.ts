// ACTION TYPES
export const SEND_MESSAGE: 'SEND_MESSAGE' = 'SEND_MESSAGE'
// ACTION CREATORS
export const SendMessageAC = (text: string): SendMessageActionType => {
  return {
    type: 'SEND_MESSAGE',
    body: text
  }
}
// INITIAL STATE
type DialogType = {
  id: number
  name: string
}

type MessagesType = {
  id: number
  message: string
}

export type dialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessagesType>
  newMessageBody: string
}

export type SendMessageActionType = {
  type: 'SEND_MESSAGE'
  body: string
}

export type ActionType = SendMessageActionType
type InitialStateType = typeof initialState

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
// REDUCER
export const dialogsReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.body }]
      }

    default:
      return state
  }
}