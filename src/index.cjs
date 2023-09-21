#! /usr/bin/env node
// Adapted from https://blog.logrocket.com/creating-a-cli-tool-with-node-js/

var program = require('commander').program
var tasks = require('./tasks.cjs')
var actions = require('./actions.cjs')

program
  .command('list')
  .description('List all the TODO tasks')
  .action(tasks.list)

program
  .command('add <task>')
  .description('Add a new TODO task')
  .action(function (task) {
    tasks.add(task)
  })

program
  .command('mark-done')
  .description('Mark commands done')
  .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
  .action(tasks.markDone)

program
  .command('hello [name]')
  .description('Print hello world')
  .action(function (name) {
    actions.printName(name)
  })

program
  .command('calc <num1> <num2>')
  .description('Perform some math operations')
  .option('-o, --operation <operation>', 'The operation to perform')
  .action(function (num1, num2, options) {
    actions.performOperation(num1, num2, options)
  })

program
  .command('age <name>')
  .description('Get the age for a given name')
  .action(function (name) {
    actions.getAge(name)
  })

// console.error('Arguments: ', process.argv)
program.parse(process.argv)
