import axios from 'axios'
//  axios.create({
//   baseURL: 'http://localhost:8000',
// })

export const register = newUser => {
  return axios
    .post('/signup', {
      Email: newUser.Email,
      Password: newUser.Password,
      mobileNumber: newUser.mobileNumber,
    })
    .then(res => {
      console.log('registered!')
    })
}


export const login = user => {
  return axios
    .post('/login', {
      Email: user.Email,
      Password: user.Password
    })
    .then(res => {
      console.log('login')
      // localStorage.setItem('usertoken', res.data)
      // return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

// export const studentProfile = profileuser => {
//   return axios
//     .post('users/studentProfile', {
//       studentname: profileuser. studentname,
//       address: profileuser. address,
//       email: profileuser.email,
//       mobileNumber: profileuser. mobileNumber
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }