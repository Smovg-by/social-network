import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export type DialogItemType = {
  id: string
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

export function Message(props:MessageType) {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}


export function Dialogs() {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={"Dimych"} id="1"/>
        <DialogItem name={"Andrey"} id="2"/>
        <DialogItem name={"Sveta"} id="3"/>
        <DialogItem name={"Sasha"} id="4"/>
        <DialogItem name={"Victor"} id="5"/>
        <DialogItem name={"Valera"} id="6"/>
      </div>
      <div className={classes.messages}>
        <Message message={'Hello!'}/>
        <Message message={'How is your ITkamasutra?'}/>
        <Message message={'Yo!'}/>
      </div>
    </div>
  )
}