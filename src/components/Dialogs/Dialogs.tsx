import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {Messages, Dialog} from '../../redux/state';

type DialogsComponentDataType = {
  dialogsData: Array<Dialog>
  messagesData: Array<Messages>
}

export type MessageType = {
  message: string
}

export function Dialogs(props: DialogsComponentDataType) {

  let dialogsElements = props.dialogsData.map((item) => {
    return (
      <DialogItem id={item.id} name={item.name}/>)
  })

  let messagesElements = props.messagesData.map((item) => {
    return (<Message message={item.message}/>)
  })

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}