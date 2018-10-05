import { ASYNC_INCREMENT } from '../types/counter'
import { createAction } from 'redux-actions'

export const asyncInc = createAction(ASYNC_INCREMENT, (e) => {
  return 1
})