#! /usr/bin/env node

// Adapted from https://blog.logrocket.com/creating-a-cli-tool-with-node-js/

const { program } = require('commander')
const list = require('./commands/list.cjs')

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

// console.error('Arguments: ', process.argv)
program.parse(process.argv)
