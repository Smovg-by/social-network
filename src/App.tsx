import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { Login } from './components/Login/Login'




export type AppPropsType = {
  store: any
}

const App: React.FC<AppPropsType> = props => {
  const state = props.store.getState()

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar sideBarData={state.sideBarData} />
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

export default App
