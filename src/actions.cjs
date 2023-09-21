const chalk = require('chalk')
const Conf = require('conf')
const config = new Conf({
    projectName: 'udc-js',
    accessPropertiesByDotNotation: false
});

function list() {
    const todoList = config.get('todo-list')
    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index}. ${task.text}`)
                )
            }
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}

function add(task) {
    console.log(chalk.green.bold(`Added "${task}" to your TODO list.`))
}

module.exports = {
    list,
    add
}
