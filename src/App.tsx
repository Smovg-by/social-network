import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'

export type AppPropsType = {
  store: any
}

const App: React.FC<AppPropsType> = props => {
  const state = props.store.getState()

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar sideBarData={state.sideBarData} />
        <div className='app-wrapper-content'>
          <Route
            path='/dialogs'
            render={() => (
              <DialogsContainer
              // dialogsData={state.dialogsPage.dialogs}
              // messagesData={state.dialogsPage.messages}
              // newMessageBody={state.dialogsPage.newMessageBody}
              // dispatch={props.store.dispatch.bind(props.store)}
              />
            )}
          />
          <Route
            path='/profile'
            render={() => (
              <Profile
                postsData={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
                dispatch={props.store.dispatch.bind(props.store)}
              />
            )}
          />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
