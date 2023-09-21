import axios from "axios";
import chalk from "chalk";

// call external REST API
function getAge (name: string) {
    response = await axios.get(`https://api.agify.io/?name=${name}`);
    data = await response.data;
    console.log(`${chalk.yellow(data["name"])} - ${chalk.yellowBright(data["age"])}`);
};

// print a greeting on the console
export printName = (name: string) => {
    console.log(chalk.bgCyanBright.blue(`Hello, ${name || "World"}!`))
};

// perform simple math operations
function performOperation (
    num1: number,
    num2: number,
    options: { operation: string }
) => {
    var result: number;
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
