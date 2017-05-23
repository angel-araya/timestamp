
const MONTHS = ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December']

/*
  Input is an unix timestamp or a natural date in the format "Month day, year"
  Returns an object with the unix timestamp and natural date fields
  The natural date is "Month day, year"
*/
module.exports = function processDate(input) {

  if (isNaN(input)) {
    return { unix: Date.parse(input) / 1000,
             natural: input}
  } else {
    let date = new Date(Number(input))
    let month = MONTHS[date.getMonth()]
    let day = date.getDate()
    let year = date.getFullYear()
    return { unix: input,
             natural: `${month} ${day}, ${year}`}
  }
}
