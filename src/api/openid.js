import wepy from 'wepy'
import { getStore } from 'wepy-redux'
const store = getStore()
import config from '../config'
const getOpenId = (jsCode) => {
  wepy.request({
    url: `https://api.weixin.qq.com/sns/jscode2session?appid=${config.appid}&secret=${config.appsecret}&js_code=${jsCode}&grant_type=authorization_code`, //仅为示例，并非真实的接口地址
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      store.dispatch({
        type: 'OPENAPPID',
        payload: {
          openappid: res.data.openid
        }
      })
    }
  })
}
export default {
  getOpenId
}