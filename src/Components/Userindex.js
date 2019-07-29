import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/signup', {
      Firstname:newUser.Firstname,
      Lastname:newUser.Lastname,
      Email: newUser.Email,
      Password: newUser.Password,
      Phone: newUser.Phone,
    })
    .then(res => {
      console.log('user registerd sucessfully')
    })
}


export const login = user => {
  return axios
    .post('/signin', {
      Email: user.Email,
      Password: user.Password
    })
    .then(res => {
      console.log('login sucessfully')
    })
    .catch(err => {
      console.log(err)
    })
}