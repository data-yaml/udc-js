const chalk = require('chalk')
const Conf = require('conf')
const config = new Conf({
    projectName: 'udc-js',
    accessPropertiesByDotNotation: false
});
var todoList = config.get('todo-list')

function list() {
    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are pending.')
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
    //get the current todo-list
    if (!todoList) {
        //default value for todos-list
        todoList = []
    }

    //push the new task to the todos-list
    todoList.push({
        text: task,
        done: false
    })

    //set todos-list in conf
    config.set('todo-list', todoList)

    //display message to user
    console.log(
        chalk.green.bold('Task has been added successfully: ' + task)
    )
}

function markDone({tasks}) {
    if (tasks) {
        tasks.forEach((task) => {
            todoList[task].done = true
        })
    } else {
        todoList.forEach((task) => {
            task.done = true
        })
    }
    config.set('todo-list', todoList)
    console.log(
        chalk.green.bold(`Task(s) [${tasks}] marked done successfully.`)
    )
}  

module.exports = {
    list,
    add,
    markDone
}
