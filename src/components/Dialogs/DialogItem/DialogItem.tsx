import classes from './../Dialogs.module.css'
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
