const chalk = require('chalk')

function list() {
    //user does not have tasks in todoList
    console.log(chalk.red.bold('No tasks in your TODO list.'))
}

function add(task) {
    console.log(chalk.green.bold(`Added "${task}" to your TODO list.`))
}

module.exports = {
    list,
    add
}
