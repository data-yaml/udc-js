//var https = require("https");

// print a greeting on the console
function printName (name) {
  return 'Hello, ' + (name || 'World') + '!'
}
// perform simple math operations
function performOperation(num1, num2, options) {
  //console.debug(`num1: ${num1}, num2: ${num2}, options: ${JSON.stringify(options)}`)

  var result
  switch (options.operation) {
    case 'multiply':
      result = num1 * num2
      break
    case 'add':
      result = num1 + num2
      break
    case 'divide':
      result = num1 / num2
      break
    default:
      console.error('Unknown options: '+options.operation)
      process.exit(1)
  }
  return result
}

// call external REST API
function getAge (name) {
  var URI = 'https://api.agify.io/?name='+name
  return  'Rahul - 40'
}
