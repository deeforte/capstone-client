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

module.exports = {
  getBeersSuccess,
  getBeersFailure,
  showBeersSuccess,
  showBeersFailure
}
