import {
  SendMessageAC,
  UpdateNewMessageBodyAC
} from '../../redux/dialogsReducer'
import { ActionType, Dialog, Messages } from '../../redux/store'
import { StoreContext } from '../../StoreContext'
import { Dialogs } from './Dialogs'

type DialogsComponentDataType = {
  dialogsData: Array<Dialog>
  messagesData: Array<Messages>
  newMessageBody: string
  dispatch: (action: ActionType) => void
}

export type MessageType = {
  message: string
}

export function DialogsContainer (props: DialogsComponentDataType) {
  // Props пока оставим, но данные в компонент приходят из StoreContextConsumer
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState()

        let updateNewMessageBody = (newText: string) => {
          props.dispatch(UpdateNewMessageBodyAC(newText))
        }

        let onSendMessageClick = (newText: string) => {
          if (newText) {
            props.dispatch(SendMessageAC(newText))
          }
        }

        return (
          <Dialogs
            UpdateNewMessageBody={updateNewMessageBody}
            SendMessage={onSendMessageClick}
            messagesData={state.dialogsPage.messages}
            dialogsData={state.dialogsPage.dialogs}
            newMessageBody={state.dialogsPage.newMessageBody}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}
