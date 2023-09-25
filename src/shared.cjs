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

// mock external REST API
function getAge (name) {
  return name + ' - 40'
}

function getURI (name) {
  return 'https://api.agify.io/?name=' + name
}

// call external REST API
function callAge (name) {
  var URI = getURI(name)
  console.log('URI: ' + URI + '-> axios: ' + axios)
  if (axios === undefined) {
    axios = require('axios');
  }
  axios.get(URI)
    .then(function (response) {
      return (response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

