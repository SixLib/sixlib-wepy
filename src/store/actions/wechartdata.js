import wepy from 'wepy'
import { wechartdata } from '../types/wechartdata'
import { createAction } from 'redux-actions'

export const asyncInc = createAction(wechartdata, (e) => {
  return e
})