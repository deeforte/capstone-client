'use strict'
const store = require('../store')
const showBeersTemplate = require('../templates/beer-list.handlebars')
const showBrewersTemplate = require('../templates/brewer-list.handlebars')

const getBeersSuccess = (data) => {
  store.beers = data.beers
  const showBeersHTML = showBeersTemplate({
    beers: data.beers
  })
  $('#brewers').empty()
  $('#beers').empty()
  $('#beers').append(showBeersHTML)
  // $('#landing').hide()
  // $('#beer').show()
}

const getBeersFailure = () => {
  $('#getBeersSuccessFailure').modal('show')
}

const showBeersSuccess = (data) => {
  store.beers = data.beers
  const showBrewersHTML = showBrewersTemplate({
    brewers: data.beers
  })
  $('#beers').empty()
  $('#brewers').empty()
  $('#brewers').append(showBrewersHTML)
  // $('#landing').hide()
  // $('#beer').show()
}

const showBeersFailure = () => {
  $('#showBeersFailure').modal('show')
}

const newBeerSuccess = (beer) => {
  store.beer = beer
  $('#addModal').modal('toggle')
  $('.form-addBeer').trigger('reset')
}

const newBeerFailure = (beer) => {
//  console.log('create bombed')
}
const updateBeerSuccess = (beer) => {
  store.beer = beer
  $('#upModal').modal('toggle')
  $('#upModal').modal('hide')
  $('.form-updateBeer').trigger('reset')
}

const updateBeerFailure = (beer) => {
//  console.log('create bombed')
}
const deleteBeerSuccess = (beer) => {
//  console.log('delete beer success ran data is ', beer)
//  console.log(store.beer)
}

const deleteBeerFailure = (beer) => {
//  console.log('delete bombed')
}

module.exports = {
  getBeersSuccess,
  getBeersFailure,
  showBeersSuccess,
  showBeersFailure,
  newBeerSuccess,
  newBeerFailure,
  updateBeerSuccess,
  updateBeerFailure,
  deleteBeerSuccess,
  deleteBeerFailure
}
