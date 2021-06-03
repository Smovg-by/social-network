import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { StoreType } from './redux/state'

export type AppPropsType = {
  store: StoreType
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
              <Dialogs
                dialogsData={state.dialogsPage.dialogs}
                messagesData={state.dialogsPage.messages}
                newMessageBody={state.dialogsPage.newMessageBody}
                dispatch={props.store.dispatch.bind(props.store)}
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
                // заменили отдельные методы на dispatch
                // addPost={props.store.dispatch.bind(props.store)}
                // updatePostText={props.store.dispatch.bind(props.store)}
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
