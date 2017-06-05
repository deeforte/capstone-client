'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const beerEvents = require('./beer/events.js')
const authEvents = require('./auth/events.js')

// const showYarn = function () {
//   $('.up-btn').css('visibility', 'visible')
//   beerEvents.getBeers()
//   yarnDisplay = currentYarns.yarns.yarns
//   listYarns(yarnDisplay)
// //  console.log('in show Yarn', yarnDisplay)
// }

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
//  beerEvents.getBeers()
//  beerEvents.hideOrder()
  $('#show-beers').on('click', beerEvents.getBeers)
  $('#brewer-button').on('click', beerEvents.showBeers)
})
