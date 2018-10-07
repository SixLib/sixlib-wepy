import { handleActions } from 'redux-actions'
import { WECHARTDATA, OPENAPPID } from '../types/wechartdata'

export default handleActions({
  [WECHARTDATA](state, action) {
    return {
      ...state,
      code: action.payload.code,
      encryptedData: action.payload.encryptedData,
      userInfo: action.payload.userInfo,
      iv: action.payload.iv
    }
  }, [OPENAPPID](state, action) {
    return {
      ...state,
      openappid: action.payload.openappid
    }
  }
}, {
    code: '',
    encryptedData: '',
    userInfo: '',
    iv: '',
    openappid: ''
  })