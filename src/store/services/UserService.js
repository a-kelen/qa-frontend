import User from '../../model/User'
import ax from '../axios'
function sign(user) {
    return 1;
} 
function register(user) {
    let res;
    ax({url: 'https://localhost:44382/api/user/', data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.Token
        res = resp.data
        localStorage.setItem('token', token)
        ax.defaults.headers.common['Authorization'] = token
        resolve(resp)
      })
      .catch(err => {
        localStorage.removeItem('token')
        reject(err)
      })
      return res
} 
export default {
   sign,
   register 
}