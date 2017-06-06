'use strict'
require('../index')

const store = require('../store')

const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('.sign-in').hide()
  $('.sign-out').show()
  $('.dropdown-menu').trigger('click')
  $('#welcome').modal('show')
  console.log(store.user)
}

const signInFailure = () => {
  $('#sign-in').trigger('reset')
  $('#signInFailure').modal('show')
  $('.dropdown-menu').trigger('click')
}

module.exports = {
  // signUpSuccess,
  // signUpFailure,
  signInSuccess,
  signInFailure
  // signOutSuccess,
  // signOutFailure,
  // chgPswdSuccess,
  // chgPswdFailure
}
