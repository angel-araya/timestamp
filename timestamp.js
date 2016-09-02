
var dateformat = require('dateformat')
var express = require('express')

var app = express()

app.get('/', function (request, response) {



  response.json({'asd':123})
})

var isUnix = function(input) {
  return !isNaN(input)
}

var isNatural = function (input) {
  // TODO: THIS
  return true
}

var processInput = function(input) {
  if (isUnix(input)) {
    return new Date(input * 1000).toString()
  }
  else if (isNatural(input)) {
    return dateformat(new Date(input), 'mmmm d, yyyy')
  }
}

var unixDate = 1450137600
var naturalDate = 'December 15, 2015'

console.log(processInput(naturalDate))
console.log(processInput(unixDate))

app.listen(1337, function () {
  console.log('App listening on port 1337');
})
