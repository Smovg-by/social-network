import { combineReducers, createStore } from 'redux'
import { profileReducer } from './profileReducer'
import { dialogsReducer } from './dialogsReducer'
import { sidebarReducer } from './sideBarReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBarData: sidebarReducer
})

export let store = createStore(reducers)
