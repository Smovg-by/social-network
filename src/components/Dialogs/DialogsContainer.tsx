import { connect } from 'react-redux'
import {
  SendMessageAC,
  UpdateNewMessageBodyAC
} from '../../redux/dialogsReducer'
import { ActionType, RootStateType } from '../../redux/store'
import { Dialogs } from './Dialogs'

export type MessageType = {
  message: string
}

let mapStateToProps = (state: RootStateType) => {
  return {
    // отправляем данные из СТЕЙТА
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
  // колл-беки, которые будем отправлять в презентационую компоненту
  return {
    UpdateNewMessageBody: (newText: string) => {
      dispatch(UpdateNewMessageBodyAC(newText))
    },
    SendMessage: (newText: string) => {
      dispatch(SendMessageAC(newText))
    }
  }
}

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)
