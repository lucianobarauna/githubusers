import axios from 'axios'

const HTTP = axios.create({
  baseURL: `https://api.github.com/`
})

export default HTTP
