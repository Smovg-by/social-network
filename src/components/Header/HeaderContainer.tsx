import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { Header } from './Header'
import { toggleIsFetching, getAuthUserData } from '../../redux/authReducer'
import Preloader from '../Common/Preloader/Preloader'

type HeaderContainerPropsType = {

  login: string | null
  isAuth: boolean
  isFetching: boolean
  toggleIsFetching: (isFetching: boolean) => void
  getAuthUserData: () => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType> {

  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Header isAuth={this.props.isAuth} login={this.props.login} />
      </>
    )
  }
}

type MapStatePropsType = {
  login: string | null
  isAuth: boolean
  isFetching: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  }
}

export default connect(mapStateToProps, {
  toggleIsFetching,
  getAuthUserData,
})(HeaderContainer)
