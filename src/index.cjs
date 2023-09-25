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
  .description('Perform some math operations')
  .command("calc")
  .option("-o, --operation <operation>", "Operation to perform: add | multiply | divide")
  .argument("<num1>")
  .argument("<num2>")
  .action(actions.performOperation);

program
  .command('age <name>')
  .description('Get the age for a given name')
  .action(function (name) {
    actions.getAge(name)
  })

// console.error('Arguments: ', process.argv)
program.parse(process.argv)
