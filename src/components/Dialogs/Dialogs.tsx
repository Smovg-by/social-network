import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export type DialogItemType = {
  id: number
  name: string
}

export function DialogItem(props: DialogItemType) {

  return (
    <div
      className={classes.dialog + ' ' + classes.active}>
      <NavLink
        to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export type MessageType = {
  message: string
}

export function Message(props: MessageType) {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const dialogsData = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Valera'},
];

const messagesData = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: 'How is yor ITkamasutra?'},
  {id: 3, message: 'Yo!'},
]

const dialogsElements = dialogsData.map((item) => {
  return (<DialogItem id={item.id} name={item.name}/>)
})

const messagesElements = messagesData.map((item) => {
  return (<Message message={item.message}/>)
})


export function Dialogs() {
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