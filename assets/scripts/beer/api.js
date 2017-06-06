'use strict'
const config = require('../config')
const store = require('../store')

const index = () => {
  console.log('all beers beer api store.user: ', store.user)
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'GET'
  })
}

const mybeers = () => {
  console.log('show beer api store.user: ', store.user)
  return $.ajax({
    url: config.apiOrigin + '/mybeers',
    method: 'GET',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = function (addBeer) {
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'POST',
    data: addBeer,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  mybeers,
  create
}