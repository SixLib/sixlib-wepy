import { WECHARTDATA, OPENAPPID } from '../types/wechartdata'
import { createAction } from 'redux-actions'

export const asyncOpenAppId = createAction(OPENAPPID, (e) => {
  return e
})
export const asyncWechartData = createAction(WECHARTDATA, (e) => {
  return e
})
