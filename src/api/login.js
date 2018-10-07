
import databasecloud from '@/api/databaseCloud'
import { getStore } from 'wepy-redux'
const store = getStore()

const login = async () => {
  let res = await databasecloud.login.add({
    data: { loginDate: new Date() }
  })
  if (res.errMsg == 'collection.add:ok') {
    let getRes = await databasecloud.login.doc(res._id).get()
    if (getRes.errMsg =='document.get:ok') {
      store.dispatch({
        type: 'OPENAPPID',
        payload: {
          openappid: getRes.data._openid
        }
      })
      console.log(store.getState().wechartdata)
    }
  }
}
export default {
  login
}