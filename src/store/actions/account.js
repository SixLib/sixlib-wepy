import { ACCOUNT } from '../types/account'
import { createAction } from 'redux-actions'

export const asyncAccount = createAction(ACCOUNT, (e) => {
  return e
})
