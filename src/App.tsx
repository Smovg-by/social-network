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
import { addPost, RootStateType, updatePostTextType } from './redux/state'
import { AddPostType } from './redux/state'

export type AppPropsType = {
  stateData: RootStateType
  addPost: AddPostType
  updatePostText: updatePostTextType
}

function App (props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar sideBarData={props.stateData.sideBarData} />
        <div className='app-wrapper-content'>
          <Route
            path='/dialogs'
            render={() => (
              <Dialogs
                dialogsData={props.stateData.dialogsData}
                messagesData={props.stateData.messagesData}
              />
            )}
          />
          <Route
            path='/profile'
            render={() => (
              <Profile
                postsData={props.stateData.postsData}
                addPost={addPost}
                newPostText={props.stateData.newPostText}
                updatePostText={props.updatePostText}
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
