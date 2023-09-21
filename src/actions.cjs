const chalk = require('chalk');
const axios = require('axios');

// print a greeting on the console
const printName = (name) => {
    console.log(chalk.bgCyanBright.blue(`Hello, ${name || "World"}!`));
};
// perform simple math operations
const performOperation = (num1, num2, options) => {
    let result;
    switch (options.operation) {
        case "multiply":
            result = num1 * num2;
            break;
        case "add":
            result = num1 + num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            console.error(("Invalid operation"));
            process.exit(1);
    }
    console.log(chalk.red(result));
};

// call external REST API
const getAge = (name) => {
    /*
    const response = yield axios.get(`https://api.agify.io/?name=${name}`);
    const data = yield response.data;
    console.log(`${chalk.yellow(data["name"])} - ${chalk.yellowBright(data["age"])}`);
    */
    console.log("Rahul - 40");
};

module.exports = {
    printName,
    performOperation,
    getAge
}
