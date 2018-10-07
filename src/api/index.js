import login from './login'
import account from './account'
export default {
    login: login.login,
    accountAddOrUpdate: account.addOrUpdate,
    accountSearchByOpenId: account.searchByOpenId
}