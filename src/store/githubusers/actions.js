
import axios from 'axios'

const actions = {
  teste () {
    return axios.get('https://api.github.com/users/lucianobarauna').then((resp) => {
      return resp
    })
  }
}

export default actions
