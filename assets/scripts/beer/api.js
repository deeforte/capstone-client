'use strict'
const config = require('../config')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'GET'
//    headers: {
//      Authorization: 'Token token=' + store.user.token
//    }
  })
}

module.exports = {
  index
}
