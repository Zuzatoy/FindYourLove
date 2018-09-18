import request from 'superagent'

const rootUrl = 'http://localhost:3000/api'

export function getAllUsers () {
  return request.get(rootUrl + '/getAllUsers')
    .then(res => {
      return res.body.users
    })
}

export function getUser (id) {
  const reqStr = `getUser/${id}`
  return request.get(rootUrl + reqStr)
    .then(res => {
      return res.body.user
    })
}

export function addUser (userData) {
  request
    .post(rootUrl + '/addUser')
    .set('Content-Type', 'application/json')
    .send(userData)
    .end()
}
