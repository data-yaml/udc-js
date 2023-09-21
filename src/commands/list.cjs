const chalk = require('chalk')

function list() {
    //user does not have tasks in todoList
    console.log(chalk.red.bold('No tasks in your TODO list.'))
}

function add() {
    console.log(chalk.greenBright('Task added to your TODO list.'))
}

module.exports = {
    add,
    list
}
