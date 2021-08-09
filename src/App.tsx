import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import { AppStateType } from './redux/redux-store'
import Preloader from './components/Common/Preloader/Preloader'

type AppComponentPropsType = {
  initializeApp: () => void
  initialized: boolean
}
class App extends React.Component<AppComponentPropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

type MapStatePropsType = {
  initialized: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {
  initializeApp,
})(App)
