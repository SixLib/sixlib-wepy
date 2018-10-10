
import databasecloud from '@/api/databaseCloud'
import { getStore } from 'wepy-redux'
const store = getStore()

const addOrUpdate = async (e) => {
  let searchRes = await databasecloud.resume.where({
    _openid: store.getState().wechartdata.openappid
  }).get()

  if (searchRes.errMsg == 'collection.get:ok' && searchRes.data.length > 0) {
    let updateRes = await databasecloud.resume.doc(searchRes._id).update({
      data: {
        avatarId: e.avatarId,
        name: e.name,
        gender: e.gender,
        age: e.age,
        email: e.email,
        nativePlace: e.nativePlace,
        mobile: e.mobile
      }
    })
    console.log(updateRes)
    if (updateRes.errMsg == 'document.update:ok') {
      return { code: 200 }
    } else {
      return { code: 400 }
    }
  } else {
    let res = await databasecloud.resume.add({
      data: {
        avatarId: e.avatarId,
        name: e.name,
        gender: e.gender,
        age: e.age,
        email: e.email,
        nativePlace: e.nativePlace,
        mobile: e.mobile
      }
    })
    if (res.errMsg == 'collection.add:ok') {
      return { code: 200 }
    } else {
      return { code: 400 }
    }
  }
}
const searchByOpenId = async () => {
  let searchRes = await databasecloud.resume.where({
    _openid: store.getState().wechartdata.openappid
  }).get()
  if (searchRes.errMsg == 'collection.get:ok' && searchRes.data.length > 0) {
    return {
      code: 200,
      data: searchRes.data[0]
    }
  }
}
export default {
  addOrUpdate,
  searchByOpenId
}