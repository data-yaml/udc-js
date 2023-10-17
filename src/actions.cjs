var chalk = require('chalk')
var https = require("node:https");

// print a greeting on the console
function printName (name) {
  console.log(chalk.bgCyanBright.blue('Hello, ' + (name || 'World') + '!'))
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
  console.log(chalk.red(result))
}

// call external REST API
function getAge (name) {
  var URI = 'https://api.agify.io/?name='+name
  https.get(URI, function(resp){
    var data = ''
    resp.on('data', function(chunk){ data += chunk })
    resp.on('end', function(){
      var result = JSON.parse(data)
      console.log(''+result.name+' - '+result.age)
    })
  }).on('error', function(err){
    console.error('Error: '+err.message)
  })
}

module.exports = {
  printName: printName,
  performOperation: performOperation,
  getAge: getAge
}
