import { store } from './redux/state'
import { renderTree } from './render'

store.subscribe(renderTree)
renderTree()
