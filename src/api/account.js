
import databasecloud from '@/api/databaseCloud'
import { getStore } from 'wepy-redux'
import { ACCOUNT } from '@/store/types/account'
const store = getStore()

const add = async (e) => {
  let searchRes = await databasecloud.account.where({
    _openid: store.getState().wechartdata.openappid
  }).get()

  if (searchRes.errMsg == 'collection.get:ok' && searchRes.data.length === 0) {
    let res = await databasecloud.account.add({
      data: {
        QRCodeId: e.QRCodeId,
        avatarId: e.avatarId,
        nickName: e.nickName,
        gender: e.gender,
        birthday: e.birthday,
        mobile: e.mobile
      }
    })
    if (res.errMsg == 'collection.add:ok') {
      store.dispatch({
        type: ACCOUNT,
        payload: {
          QRCodeId: e.QRCodeId,
          avatarId: e.avatarId,
          nickName: e.nickName,
          gender: e.gender,
          birthday: e.birthday,
          mobile: e.mobile
          }
      })
      return { code: 200 }
    } else {
      return { code: 400 }
    }
  }
}
const addOrUpdate = async (e) => {
  let searchRes = await databasecloud.account.where({
    _openid: store.getState().wechartdata.openappid
  }).get()

  if (searchRes.errMsg == 'collection.get:ok' && searchRes.data.length > 0) {
    let updateRes = await databasecloud.account.doc(searchRes._id).update({
      data: {
        QRCodeId: e.QRCodeId,
        avatarId: e.avatarId,
        nickName: e.nickName,
        gender: e.gender,
        birthday: e.birthday,
        mobile: e.mobile
      }
    })
    if (updateRes.errMsg == 'document.update:ok') {
      store.dispatch({
        type: ACCOUNT,
        payload: {
          QRCodeId: e.QRCodeId,
          avatarId: e.avatarId,
          nickName: e.nickName,
          gender: e.gender,
          birthday: e.birthday,
          mobile: e.mobile
          }
      })
      return { code: 200 }
    } else {
      return { code: 400 }
    }
  } else {
    add()
  }
}
const searchByOpenId = async () => {
  let searchRes = await databasecloud.account.where({
    _openid: store.getState().wechartdata.openappid
  }).get()
  console.log(searchRes)
  if (searchRes.errMsg == 'collection.get:ok' && searchRes.data.length > 0) {
    return {
      code: 200,
      data: searchRes.data[0]
    }
  } else {
    return {
      code: 400
    }
  }
}
export default {
  add,
  addOrUpdate,
  searchByOpenId
}