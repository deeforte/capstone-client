'use strict'
const config = require('../config')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'GET'
  })
}

const mybeers = () => {
  return $.ajax({
    url: config.apiOrigin + '/mybeers',
    method: 'GET',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getBeer = (beerId) => {
  return $.ajax({
    url: config.apiOrigin + '/beers/' + beerId,
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

const update = function (upBeer) {
  return $.ajax({
    url: config.apiOrigin + '/beers/' + upBeer.beer.id,
    method: 'PATCH',
    data: upBeer,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (beerId) {
//  console.log(updatedID)
//  console.log(store)
//  console.log(updatedYarn)
  return $.ajax({
//    url: 'http://localhost:4741/beers/' + beerDelId,
    url: config.apiOrigin + '/beers/' + beerId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  mybeers,
  create,
  destroy,
  getBeer,
  update
}
