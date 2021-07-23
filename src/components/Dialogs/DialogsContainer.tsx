import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
  ActionType,
  dialogsPageType,
  SendMessageAC,
  UpdateNewMessageBodyAC
} from '../../redux/dialogsReducer'
import {
  AppStateType
} from '../../redux/redux-store'
import { Dialogs } from './Dialogs'


export type MessageType = {
  message: string
}

type MapStatePropsType = {
  dialogsPage: dialogsPageType
  isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

export const DialogsContainer = withAuthRedirect(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs))