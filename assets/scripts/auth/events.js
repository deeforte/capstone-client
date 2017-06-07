'use strict'

// const setAPIOrigin = require('../../../lib/set-api-origin')
const userApi = require('./api.js')
const userUi = require('./ui.js')
const beerEvents = require('../beer/events')
const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.signIn(data)
    .then(userUi.signInSuccess)
    .then(beerEvents.showBeers)
    .catch(userUi.signInFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.signUp(data)
    .then(userUi.signUpSuccess)
    .catch(userUi.signUpFailure)
}

const onChgPswd = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  userApi.chgPswd(data)
    .then(userUi.chgPswdSuccess)
    .catch(userUi.chgPswdFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.signOutSuccess)
    .catch(userUi.signOutFailure)
}

const linkSignUp = function () {
  $('.sign-in').hide()
  $('.sign-up').show()
  // $('.dropdown-menu').click(stopPropagation)
}

const linkSignIn = function () {
  $('.sign-up').hide()
  $('.sign-in').show()
  // $('.dropdown-menu').click(stopPropagation)
}

const linkChangePassword = function () {
  $('.sign-out').hide()
  $('.change-password').show()
  // $('.dropdown-menu').click(stopPropagation)
}

const linkBrewer = function () {
  $('.change-password').hide()
  $('.sign-out').show()
  // $('.dropdown-menu').click(stopPropagation)
}
const addHandlers = () => {
  $('.sign-up').hide()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.linkChangePassword').on('click', linkChangePassword)
  $('.linkBrewer').on('click', linkBrewer)
  $('.linkSignUp').on('click', linkSignUp)
  $('.linkSignIn').on('click', linkSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChgPswd)
  $('.dropdown-menu').click(function (event) {
    event.stopPropagation()
  })
}

module.exports = {
  addHandlers
}
