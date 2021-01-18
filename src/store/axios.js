import Axios from 'axios'
import https from 'https'
export default Axios.create({
  baseURL: 'https://localhost:44382/api/',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})
