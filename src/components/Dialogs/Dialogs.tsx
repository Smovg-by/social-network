import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {AppPropsType} from '../../App';


export type MessageType = {
  message: string
}
//
// const dialogsElements = dialogsData.map((item) => {
//   return (<DialogItem id={item.id} name={item.name}/>)
// })
//
// const messagesElements = messagesData.map((item) => {
//   return (<Message message={item.message}/>)
// })

export function Dialogs(props: AppPropsType) {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsData.map((item) => {
          return (
            <DialogItem id={item.id} name={item.name}/>)
        })}

      </div>
      <div className={classes.messages}>
        {props.messagesData.map((item) => {
          return (<Message message={item.message}/>)
        })}
      </div>
    </div>
  )
}