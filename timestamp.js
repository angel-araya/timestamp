
var dateformat = require('dateformat')

var unixTimestamp = '4568135748'
var humanFormat = 'December 15, 2015'

var isUnix = function(input) {
  return !isNaN(input)
}

var isNatural = function (input) {
  // TODO: THIS
  return true
}

var processInput = function(input) {
  if (isUnix(input)) {
    return new Date(input * 1000).toUTCString()
  }
  else if (isNatural(input)) {
    return Date.parse(input) / 1000
  }
}

var unixDate = 1450137600
var naturalDate = 'December 15, 2015'

console.log(processInput(naturalDate))
console.log(processInput(unixDate))
