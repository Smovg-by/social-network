import { ActionType } from './store'

type Friends = {
  id: number
  name: string
  avatar: string
}

type InitialStateType = Array<Friends>

const initialState = [
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

export const sidebarReducer = (
  state: InitialStateType = initialState,
  action: ActionType
) => {
  // code

  return state
}

export default sidebarReducer
