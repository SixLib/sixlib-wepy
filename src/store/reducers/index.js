import { combineReducers } from 'redux'
import counter from './counter'
import wechartdata from './wechartdata'
import account from './account'

export default combineReducers({
  counter,
  wechartdata,
  account
})