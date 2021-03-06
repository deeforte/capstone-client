'use strict'
require('../index')

const store = require('../store')

const signUpSuccess = () => {
  $('#sign-up').trigger('reset')
  $('.sign-in').show()
  $('.sign-up').hide()
  $('.dropdown-menu').trigger('click')
}
const signUpFailure = () => {
  $('#sign-up').trigger('reset')
  $('.dropdown-menu').trigger('click')
  $('#signUpFailure').modal('show')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('.sign-in').hide()
  $('.sign-out').show()
  $('.dropdown-menu').trigger('click')
  // $('.dropdown-menu').trigger('click')
}

const signInFailure = () => {
  $('#sign-in').trigger('reset')
  $('#signInFailure').modal('show')
  $('.dropdown-menu').trigger('click')
}

const signOutSuccess = (data) => {
  $('.sign-in').show()
  $('.sign-out').hide()
  store.user = {}
  $('#beers').empty()
  $('#brewers').empty()
  $('.form-addBeer').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
}

const signOutFailure = () => {
//  console.error('signout failure ran error is ', error)
}

const chgPswdSuccess = () => {
  $('#change-password').trigger('reset')
  $('.sign-out').show()
  $('.change-password').hide()
}

const chgPswdFailure = () => {
  $('#chgPswdFailure').modal('show')
  $('#change-password').trigger('reset')
  $('.sign-out').show()
  $('.change-password').hide()
//  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  chgPswdSuccess,
  chgPswdFailure
}
