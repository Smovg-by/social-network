import {
  SendMessageAC,
  UpdateNewMessageBodyAC
} from '../../redux/dialogsReducer'
import { ActionType, Dialog, Messages } from '../../redux/store'
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
      messagesData={props.messagesData}
      dialogsData={props.dialogsData}
      newMessageBody={props.newMessageBody}
    />
  )
}
