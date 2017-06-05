'use strict'

const beerApi = require('./api.js')
const beerUi = require('./ui.js')
const store = require('../store.js')

const getBeers = function () {
  console.log('in get Beers')
  beerApi.index()
  .then(beerUi.getBeersSuccess)
  .catch(beerUi.getBeersFailure)
}

const hideBeers = function () {
  $('#beer').hide()
}

const addHandlers = () => {
  $('show-beers').on('click', getBeers)
}

module.exports = {
  getBeers,
  hideBeers
}
