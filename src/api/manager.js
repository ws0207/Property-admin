import axios from '../axios'

export const loging = (username, password) => {
  return axios.post('/user/login', { username, password })
}
