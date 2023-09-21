#! /usr/bin/env node
// Adapted from https://blog.logrocket.com/creating-a-cli-tool-with-node-js/

const { program } = require('commander')
const { list, add, markDone } = require('./actions.cjs')

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

// console.error('Arguments: ', process.argv)
program.parse(process.argv)
