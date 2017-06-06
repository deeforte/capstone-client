'use strict'

const beerApi = require('./api.js')
const beerUi = require('./ui.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields')

const getBeers = function () {
  console.log('in get Beers')
  beerApi.index()
  .then(beerUi.getBeersSuccess)
  .catch(beerUi.getBeersFailure)
}

const showBeers = function () {
  store.beers = []
  console.log('store.beers: ', store.beers)
  console.log('in show Beers')
  beerApi.mybeers()
  .then(beerUi.showBeersSuccess)
  .catch(beerUi.showBeersFailure)
//  $('#delete').on('click', deleteBeer(this))
  $('.delete').on('click', function () {
    deleteBeer(this)
  })
}

const hideBeers = function () {
  console.log('in hide beers')
  $('#beer').hide()
}
const deleteBeer = function (delButton) {
  console.log('hit delete beer button')
}
const addBeer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('hit add beer button')
  beerApi.create(data)
  .then(beerUi.addBeerSuccess)
  .catch(beerUi.addBeerFailure)
}

const addHandlers = () => {
//  beerEvents.getBeers()
//  beerEvents.hideOrder()
  $('#show-beers').on('click', getBeers)
  $('#brewer-button').on('click', showBeers)
//  $('#delete').on('click', deleteBeer)
//  $('#add').on('click', addBeer)
  $('.form-addBeer').on('submit', addBeer)
  $('.form-delete-beer').on('submit', deleteBeer)
}

module.exports = {
  addHandlers,
  getBeers,
  hideBeers,
  showBeers,
  deleteBeer,
  addBeer
}
