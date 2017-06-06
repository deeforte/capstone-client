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
}

const hideBeers = function () {
  console.log('in hide beers')
  $('#beer').hide()
}
const deleteBeer = function (event) {
  event.preventDefault()
  console.log('event target id: ' + event.target.id)
  console.log('hit delete beer button')
  const data = event.target.id.split('-')
  const beerId = data[2]
  console.log('beerId: ', beerId)
  beerApi.destroy(beerId)
    .then(beerUi.deleteBeerSuccess)
    .then(showBeers)
    .catch(beerUi.deleteBeerFailure)
}

const updateBeer = function (event) {
  event.preventDefault()
  console.log('event target id: ' + event.target.id)
  console.log('hit update beer button')
  const data = event.target.id.split('-')
  const beerId = data[2]
  console.log('beerId: ', beerId)
}

const addBeer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('hit add beer button')
  beerApi.create(data)
  .then(beerUi.addBeerSuccess)
  .then(showBeers)
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
//  $('.form-delete-beer').on('submit', deleteBeer)
  $(document).on('click', '.btn-update-beer', updateBeer)
  $(document).on('click', '.btn-delete-beer', deleteBeer)
}

module.exports = {
  addHandlers,
  getBeers,
  hideBeers,
  showBeers,
  deleteBeer,
  updateBeer,
  addBeer
}
