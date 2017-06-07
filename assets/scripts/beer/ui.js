'use strict'
const store = require('../store')
const showBeersTemplate = require('../templates/beer-list.handlebars')
const showBrewersTemplate = require('../templates/brewer-list.handlebars')

const getBeersSuccess = (data) => {
  store.beers = data.beers
  const showBeersHTML = showBeersTemplate({
    beers: data.beers
  })
  console.log('data beers is: ', data.beers)
  console.log('beer ui store.user: ', store.user)
  $('#brewers').empty()
  $('#beers').empty()
  $('#beers').append(showBeersHTML)
  // $('#landing').hide()
  // $('#beer').show()
}

const getBeersFailure = (error) => {
  console.log(error)
}

const showBeersSuccess = (data) => {
  store.beers = data.beers
  const showBrewersHTML = showBrewersTemplate({
    brewers: data.beers
  })
  console.log('data beers is: ', data.beers)
  console.log('beer ui store.user: ', store.user)
  $('#beers').empty()
  $('#brewers').empty()
  $('#brewers').append(showBrewersHTML)
  // $('#landing').hide()
  // $('#beer').show()
}

const showBeersFailure = (error) => {
  console.log(error)
}

const getBeerSuccess = (data) => {
  store.beer = data
  console.log('in ui store.beer: ', store.beer)
  // const showBeersHTML = showBeersTemplate({
  //   beers: data.beers
  // })
  console.log('data beers is: ', data)
  console.log('beer ui store.user: ', store.user)
  // $('#beers').empty()
  // $('#beers').append(showBeersHTML)
  // $('#landing').hide()
  // $('#beer').show()
}

const getBeerFailure = (error) => {
  console.log(error)
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
  deleteBeerFailure,
  getBeerSuccess,
  getBeerFailure
}
