import { handleActions } from 'redux-actions'
import { ACCOUNT } from '../types/account'

export default handleActions({
  [ACCOUNT](state, action) {
    return {
      ...state,
      nickName: action.payload.nickName,
      gender: action.payload.gender,
      birthday: action.payload.birthday,
      mobile: action.payload.mobile,
      avatarId: action.payload.avatarId,
      QRCodeId: action.payload.QRCodeId
    }
  }
}, {
    nickName: '',
    gender: 0,
    birthday: '',
    mobile: '',
    avatarId: '',
    QRCodeId: ''
  })