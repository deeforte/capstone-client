'use strict'
const store = require('../store')
const showBeersTemplate = require('../templates/beer-list.handlebars')

const getBeersSuccess = (data) => {
  store.beers = data.beers
  const showBeersHTML = showBeersTemplate({
    beers: data.beers
  })
  console.log('data beers is: ', data.beers)
//  console.log('token is: ', token)
  $('#beers').empty()
  $('#beers').append(showBeersHTML)
  // $('#landing').hide()
  // $('#beer').show()
}

const getBeersFailure = (error) => {
  console.log(error)
}

module.exports = {
  getBeersSuccess,
  getBeersFailure
}
