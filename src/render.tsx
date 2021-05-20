import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addPost} from './redux/state'

export let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <React.StrictMode>
      {/*<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>*/}
      <App stateData={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
