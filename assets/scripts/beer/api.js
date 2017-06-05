'use strict'
const config = require('../config')
const store = require('../store')

const allbeers = () => {
  console.log('all beers beer api store.user: ', store.user)
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'GET'
  })
}

const index = () => {
  console.log('show beer api store.user: ', store.user)
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'GET',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  allbeers
}
