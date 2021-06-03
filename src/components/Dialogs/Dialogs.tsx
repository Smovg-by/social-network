import classes from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import {
  Messages,
  Dialog,
  UpdateNewMessageBodyAC,
  ActionType,
  SendMessageAC
} from '../../redux/state'

type DialogsComponentDataType = {
  dialogsData: Array<Dialog>
  messagesData: Array<Messages>
  newMessageBody: string
  dispatch: (action: ActionType) => void
}

export type MessageType = {
  message: string
}

export function Dialogs (props: DialogsComponentDataType) {
  let dialogsElements = props.dialogsData.map(item => {
    return <DialogItem id={item.id} name={item.name} />
  })

  let messagesElements = props.messagesData.map(item => {
    return <Message message={item.message} />
  })
  let newMessageBody = props.newMessageBody

  let onSendMessageClick = () => {
    let text = props.newMessageBody //? значит, что в этом поле может быть Null
    if (text) {
      // заменили отдельные методы на dispatch
      // props.addPost(text)
      props.dispatch(SendMessageAC(text))
    }
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div> {messagesElements} </div>
        <div>
          <div>
            <textarea
              onChange={e => {
                let newText = e.currentTarget.value
                props.dispatch(UpdateNewMessageBodyAC(newText))
              }}
              value={newMessageBody}
              placeholder='Enter your message'
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
