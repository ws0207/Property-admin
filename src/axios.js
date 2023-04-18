import axios from 'axios'

const service = axios.create({
  baseURL: 'http://120.48.48.64:8096/api'
})
export default service
