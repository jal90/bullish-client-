const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Sign up Success!!!! All Youu Need To Do Is Sign In Now')
  $('#message').css('background-color', 'green')
  $('#message').hide(9000)
  $('#message').css('color', 'white')
  $('#email-field').val('')
  $('#password-field').val('')
  $('#password-conformation-field').val('')
  $('#sign-up').hide()
  $('.show-form').hide()
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Opps, Sign up Error. Please try again')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  $('#message').hide(9000)
  $('#email-field').val('')
  $('#password-field').val('')
  $('#password-conformation-field').val('')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Sign In Success!!! Let\'s create a survey')
  $('#message').css('color', 'white')
  $('#message').css('background-color', 'green')
  $('#message').hide(9000)
  $('#signInEmail').val('')
  $('#signInPassword').val('')
  $('.container').show()
  $('.show-form').hide()
  $('.show-in').hide()
  $('#sign-in').hide()
  $('#showPass').show()
  $('#sign-out').show()
  // $('#create').show()
  // $('#showAll').show()
  // $('#update').show()
  // $('#delete').show()
  // $('#all-users').show()
  store.user = data.user
}

const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Oops, Signed in Error. Please Try Again')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  $('#message').hide(9000)
  $('#signInEmail').val('')
  $('#signInPassword').val('')
}

const changeSuccess = function () {
  $('#message').text('NO ONE SHALL PASS!!!-Changed Password Success')
  $('#message').css('background-color', 'green')
  $('#oldPasswordField').val('')
  $('#newPasswordField').val('')
}

const changeFailure = function (error) {
  console.log(error)
  $('#message').text('Oops, error changing password. Please try again.')
  $('#message').css('background-color', 'red')
  $('#oldPasswordField').val('')
  $('#newPasswordField').val('')
}

const signOutSuccess = function () {
  $('#message').text('Signed out Successful. Come Back Soon')
  $('#message').css('background-color', 'green')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create').hide()
  $('#showAll').hide()
  $('#update').hide()
  $('#delete').hide()
  $('#content').hide()
  $('.show-form').show()
  $('.show-in').show()
  $('#sign-out').hide()
  $('#showPass').hide()
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Signout Error, I thought you were leaving')
  $('#message').css('background-color', 'red')
}

const showAllSuccess = function (data) {
  $('body').append(JSON.stringify(data))
}

const createSuccessful = function (data) {
  console.log(data)
  $('#message').text('Survey Created')
  $('#message').css('background-color', 'green')
  $('#createOptionOne').val('')
  $('#createOptionTwo').val('')
  store.movie = data.movie
}

const createFailed = function (data) {
  $('#message').text('Creation Failed, Please try again')
  $('#message').css('background-color', 'red')
  $('#createSurvey').val('')
}

const updateSuccess = function (data) {
  $('#message').text('Survey Updated')
  $('#message').css('background-color', 'green')
  $('#updateId').val('')
  $('#updateOptionOne').val('')
  $('#updateOptionTwo').val('')
  console.log('update was success ', data)
}

const updateFailed = function (data) {
  $('#message').text('Problem Updating, Please try again')
  $('#message').css('background-color', 'red')
  $('#updateId').val('')
  $('#updateOptionOne').val('')
  $('#updateOptionTwo').val('')
}

const deleteSuccess = function () {
  $('#message').text('Delete Successfully')
  $('#message').css('background-color', 'green')
  $('#deleteSurvey').val('')
  console.log('deleteSuccessful')
}

const deleteFailed = function () {
  $('#message').text('Failed to Delete')
  $('#message').css('background-color', 'red')
  $('#deleteSurvey').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changeSuccess,
  changeFailure,
  signOutSuccess,
  signOutFailure,
  createSuccessful,
  createFailed,
  showAllSuccess,
  updateSuccess,
  updateFailed,
  deleteSuccess,
  deleteFailed
}
