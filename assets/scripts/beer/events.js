'use strict'

const beerApi = require('./api.js')
const beerUi = require('./ui.js')
const store = require('../store.js')

const getBeers = function () {
  console.log('in get Beers')
  beerApi.allbeers()
  .then(beerUi.getBeersSuccess)
  .catch(beerUi.getBeersFailure)
}

const showBeers = function () {
  store.beers = []
  console.log('store.beers: ', store.beers)
  console.log('in show Beers')
  beerApi.index()
  .then(beerUi.showBeersSuccess)
  .catch(beerUi.showBeersFailure)
//  $('#delete').on('click', deleteBeer(this))
}

const hideBeers = function () {
  $('#beer').hide()
}
const deleteBeer = function (delBeer) {
  console.log('hit delete beer button', delBeer)
}

// const addHandlers = () => {
//   $('show-beers').on('click', getBeers)
// }
// $('#delete').on('click', function () {
//   deleteBeer(this)
// })
// const addHandlers = () => {
$('#delete').on('click', deleteBeer(this))
// }

module.exports = {
  getBeers,
  hideBeers,
  showBeers,
  deleteBeer
}
