import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import singleBoard from './single-board'
import singleTask from './tasks'
import allBoards from './all-boards'
import mantras from './mantras'
import allTasks from './all-tasks'
import checklist from './checklist'

const reducer = combineReducers({
  user,
  singleBoard,
  singleTask,
  allBoards,
  mantras,
  allTasks,
  checklist
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
export * from './user'
