import login from './login'
import account from './account'
import resume from './resume'
export default {
    login: login.login,
    accountAdd: account.add,
    accountAddOrUpdate: account.addOrUpdate,
    accountSearchByOpenId: account.searchByOpenId,
    resumeAddOrUpdate: resume.addOrUpdate,
    resumeSearchByOpenId: resume.searchByOpenId
    
}