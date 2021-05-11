import classes from './../Dialogs.module.css'

export type MessageType = {
  message: string
}

export function Message(props: MessageType) {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}
