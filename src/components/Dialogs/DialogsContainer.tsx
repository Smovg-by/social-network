import { connect } from 'react-redux'
import {
  SendMessageAC,
  UpdateNewMessageBodyAC
} from '../../redux/dialogsReducer'
import {
  ActionType,
  dialogsPageType,
  RootStateType
} from '../../redux/redux-store'
import { Dialogs } from './Dialogs'

export type MessageType = {
  message: string
}

type MapStatePropsType = {
  dialogsPage: dialogsPageType
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    // отправляем данные из СТЕЙТА
    // Dilogs перерисуется, если мы изменим это поле
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
