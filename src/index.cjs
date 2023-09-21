#! /usr/bin/env node
// Adapted from https://blog.logrocket.com/creating-a-cli-tool-with-node-js/

const { program } = require('commander')
const { list, add, markDone } = require('./tasks.cjs')
const { printName, performOperation, getAge } = require('./actions.cjs')

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action((task) => {
        add(task)
    })

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)

program
    .command('hello [name]')
    .description('Print hello world')
    .action((name) => {
        printName(name)
    })

program
    .command('calc <num1> <num2>')
    .description('Perform some math operations')
    .option('-o, --operation <operation>', 'The operation to perform')
    .action((num1, num2, options) => {
        performOperation(num1, num2, options)
    })

program
    .command('age <name>')
    .description('Get the age for a given name')
    .action((name) => {
        getAge(name)
    })

// console.error('Arguments: ', process.argv)
program.parse(process.argv)
