import { combineReducers } from 'redux'
import counter from './counter'
import wechartdata from './wechartdata'

export default combineReducers({
  counter,
  wechartdata
})