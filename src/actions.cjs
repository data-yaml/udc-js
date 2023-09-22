var chalk = require('chalk')
var https = require("node:https");

// print a greeting on the console
function printName (name) {
  console.log(chalk.bgCyanBright.blue('Hello, ' + (name || 'World') + '!'))
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
      console.error(`Unknown options: ${options.operation}`)
      process.exit(1)
  }
  console.log(chalk.red(result))
}

// call external REST API
function getAge (name) {
  /*
    response = yield axios.get(`https://api.agify.io/?name=${name}`);
    data = yield response.data;
    console.log(`${chalk.yellow(data["name"])} - ${chalk.yellowBright(data["age"])}`);
    */
  console.log('Rahul - 40')
}

module.exports = {
  printName: printName,
  performOperation: performOperation,
  getAge: getAge
}
