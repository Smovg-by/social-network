import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { Header } from './Header'
import { setAuthUserData, toggleIsFetching } from '../../redux/authReducer'
import Preloader from '../Common/Preloader/Preloader'

type HeaderContainerPropsType = {
  // id: number | null
  // email: string | null
  login: string | null
  isAuth: boolean
  isFetching: boolean
  toggleIsFetching: (isFetching: boolean) => void
  setAuthUserData: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          this.props.toggleIsFetching(false)
          let { id, email, login } = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
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
  // id: number | null
  // email: string | null
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
  setAuthUserData,
  toggleIsFetching
})(HeaderContainer)
