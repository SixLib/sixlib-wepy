import { handleActions } from 'redux-actions'
import { WECHARTDATA } from '../types/wechartdata'

export default handleActions({
  [WECHARTDATA] (state, action) {
    return {
      ...state,
      code: action.payload.code,
      encryptedData: action.payload.encryptedData,
      userInfo: action.payload.userInfo,
      iv: action.payload.iv
    }
  }
}, {
  code: '',
  encryptedData: '',
  userInfo: '',
  iv: ''
})