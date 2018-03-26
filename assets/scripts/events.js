// 'use scrict'
// const getFormFields = require('../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')
//
// const onSignUp = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changePassword(data)
//     .then(ui.changeSuccess)
//     .catch(ui.changeFailure)
// }
//
// const onSignOut = function () {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.signOut(data)
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const addHandlers = () => {
//   $('#sign-up').on('submit', onSignUp)
//   $('#sign-in').on('submit', onSignIn)
//   $('#change-password').on('submit', onChangePassword)
//   $('#sign-out').on('submit', onSignOut)
// }
//
// module.exports = {
//   addHandlers
// }
