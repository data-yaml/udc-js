#! /usr/bin/env node\
// Adapted from https://blog.logrocket.com/creating-a-cli-tool-with-node-js/

const { program } = require('commander')
const {list, add} = require('./actions.cjs')

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

// console.error('Arguments: ', process.argv)
program.parse(process.argv)
