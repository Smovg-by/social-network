import './index.css'
import { store } from './redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

console.log(store)

//TODO типизация store
export let renderTree = (store: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderTree(store)

store.subscribe(() => {
  renderTree(store)
})
