var chalk = require('chalk')
var axios = require('axios')

// print a greeting on the console
function printName (name) {
  console.log(chalk.bgCyanBright.blue('Hello, ' + name || 'World' + '!'))
}
// perform simple math operations
function performOperation (num1, num2, options) {
  let result
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
      console.error(('Invalid operation'))
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
  console.log('Rahul - 40')
}

module.exports = {
  printName,
  performOperation,
  getAge
}