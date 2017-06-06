'use strict'

// const setAPIOrigin = require('../../../lib/set-api-origin')
const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.signIn(data)
    .then(userUi.signInSuccess)
    .catch(userUi.signInFailure)
}
const addHandlers = () => {
  $('.sign-up').hide()
  $('.change-password').hide()
  $('.sign-out').hide()
  // $('.linkChangePassword').on('click', linkChangePassword)
  // $('.linkAccount').on('click', linkAccount)
  // $('.linkSignUp').on('click', linkSignUp)
  // $('.linkSignIn').on('click', linkSignIn)
  // $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChgPswd)
  // $('.dropdown-menu').click(function (event) {
  //   event.stopPropagation()
  // })
}

module.exports = {
  addHandlers
}
