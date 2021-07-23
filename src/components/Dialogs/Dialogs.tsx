
import { Redirect } from 'react-router-dom'
import { DialogItem } from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsComponentDataType = {
  UpdateNewMessageBody: (newText: string) => void
  SendMessage: (newText: string) => void
  dialogsPage: dialogsPageType
  isAuth: boolean
}

export type Dialog = {
  id: number
  name: string
}

export type Messages = {
  id: number
  message: string
}

export type dialogsPageType = {
  dialogs: Array<Dialog>
  messages: Array<Messages>
  newMessageBody: string
}

export type MessageType = {
  message: string
}

export function Dialogs(props: DialogsComponentDataType) {
  let dialogsElements = props.dialogsPage.dialogs.map((item, i) => {
    return <DialogItem key={i} id={item.id} name={item.name} />
  })

  let messagesElements = props.dialogsPage.messages.map((item, i) => {
    return <Message key={i} message={item.message} />
  })
  let newMessageBody = props.dialogsPage.newMessageBody

  let onSendMessageClick = () => {
    let newText = props.dialogsPage.newMessageBody //? значит, что в этом поле может быть Null
    if (newText) {
      props.SendMessage(newText)
    }
  }

  // if (!props.isAuth) return <Redirect to={'/login'} />

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
                props.UpdateNewMessageBody(newText)
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
