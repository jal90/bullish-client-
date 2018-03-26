const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('"You Had Me at Hello"-Sign up Success')
  $('#message').css('background-color', 'green')
  $('#email-field').val('')
  $('#password-field').val('')
  $('#password-conformation-field').val('')
  // $('#sign-up').hide()
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('"Houston, We Have a Problem"-Sign up Error')
  $('#message').css('background-color', 'red')
  $('#email-field').val('')
  $('#password-field').val('')
  $('#password-conformation-field').val('')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('"Welcome to THUNDERDOME!!!!!"-Sign In Success')
  $('#message').css('background-color', 'green')
  $('#signInEmail').val('')
  $('#signInPassword').val('')
  // $('#change-password').show()
  // $('#sign-out').show()
  // $('#create').show()
  // $('#showAll').show()
  // $('#update').show()
  // $('#delete').show()
  // $('#all-users').show()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  store.user = data.user
}

const signInFailure = function (error) {
  console.log(error)
  $('#message').text('"DANGER Will Robinson DANGER"-Signed in Error')
  $('#message').css('background-color', 'yellow')
  $('#signInEmail').val('')
  $('#signInPassword').val('')
}

const changeSuccess = function () {
  $('#message').text('"May The Force Be With You"-Changed Password Successfully')
  $('#message').css('background-color', 'green')
  $('#oldPasswordField').val('')
  $('#newPasswordField').val('')
}

const changeFailure = function (error) {
  console.log(error)
  $('#message').text('"I Drink Your MilkShake!!!"-Error changing password')
  $('#message').css('background-color', 'red')
  $('#oldPasswordField').val('')
  $('#newPasswordField').val('')
}

const signOutSuccess = function () {
  $('#message').text('"I\'ll be Back"-Signed out Successfully')
  $('#message').css('background-color', 'green')
  // $('#change-password').hide()
  // $('#sign-out').hide()
  // // $('#create').hide()
  // // $('#showAll').hide()
  // // $('#update').hide()
  // // $('#delete').hide()
  // // $('#content').hide()
  // $('#sign-up').show()
  // $('#sign-in').show()
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('"Get Your Stinking Paws Off Me, You damned dirty ape!!!"-Signout Error')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changeSuccess,
  changeFailure,
  signOutSuccess,
  signOutFailure
}
