
var dateformat = require('dateformat')
var express = require('express')

var app = express()

app.get('/', (request, response) => {
  response.json({'asd':123})
})

function isUnix (input) {
  return !isNaN(input)
}

function isNatural (input) {
  // TODO: THIS
  return true
}

function processInput (input) {
  if (isUnix(input)) {
    return new Date(input * 1000).toString()
  }
  else if (isNatural(input)) {
    return dateformat(new Date(input), 'mmmm dd, yyyy')
  }
}

var unixDate = 1450137600
var naturalDate = 'December 15, 2015'

console.log(processInput(naturalDate))
console.log(processInput(unixDate))

app.listen(1337, () =>{
  console.log('App listening on port 1337');
})
