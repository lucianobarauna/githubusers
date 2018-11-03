
// import axios from 'axios'
import Unsplash from 'unsplash-js'

const actions = {
  // fetchReimbursementList ({ commit }) {
  //   axios
  //     .get('https://jarbas.serenata.ai/api/chamber_of_deputies/reimbursement/?state=RJ')
  //     .then((resp) => {
  //       commit('SET_REIMBURSEMENT_LIST', resp.data.results)
  //     }).catch(err => console.error(err))
  // },
  teste () {
    // autorization - 834631b2fd6375202a74100f003c6d7ceb64669d47e79c4314ae877f1fd868ed
    // url autorization - https://unsplash.com/oauth/authorize/native?code=05662504c7e93200825e66b39f926c1db904f338e3ea8bd4ec643ea19fb5fb78
    const AUTHORIZATION = '834631b2fd6375202a74100f003c6d7ceb64669d47e79c4314ae877f1fd868ed'
    const APP_ACCESS_KEY = 'c38eb0ea7dfe82f58f8c086517d8e96bd96b7037b5a81296f4a8031c61eec6e1'
    const APP_SECRET = 'b040a9db53e6442f9d234c28cbec76297192f7e7af089ef294b6f77c995f3d15'
    const CALLBACK_URL = 'urn:ietf:wg:oauth:2.0:oob'
    const unsplash = new Unsplash({
      applicationId: APP_ACCESS_KEY,
      secret: APP_SECRET,
      callbackUrl: CALLBACK_URL,
      bearerToken: AUTHORIZATION,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      'public',
      'read_user',
      'write_user',
      'read_photos',
      'write_photos'
    ])
    console.log(unsplash)
    unsplash.auth.userAuthentication('https://unsplash.com/oauth/authorize/native?code=05662504c7e93200825e66b39f926c1db904f338e3ea8bd4ec643ea19fb5fb78')
      .then(json => {
        console.log(json)
      })
  }

}

export default actions
