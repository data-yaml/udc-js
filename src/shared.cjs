//var https = require("https");

// print a greeting on the console
function printName (name) {
  return 'Hello, ' + (name || 'World') + '!'
}
// perform simple math operations
function performOperation(num1, num2, options) {
  //console.debug(`num1: ${num1}, num2: ${num2}, options: ${JSON.stringify(options)}`)

  switch (options.operation) {
    case 'multiply':
      return num1 * num2
    case 'add':
      return num1 + num2
    case 'divide':
      return num1 / num2
    default:
      console.error('Unknown options: '+options.operation)
      process.exit(1)
  }
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

