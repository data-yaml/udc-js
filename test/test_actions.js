const { expect } = require('chai')
const { it } = require('mocha')
const childProcess = require('child_process')
// helper method to run command in shell
const exec = function (command) {
  return childProcess.execSync(command, { encoding: 'utf8' })
}
const run = function (args) {
  return exec('npx udc-js ' + args)
}
before(function () {
  exec('npm install -g')
  console.log('Installed CLI')
})
after(function () {
  exec('npm uninstall -g')
  console.log('Uninstalled CLI')
})

it('should print hello world', function () {
  const output = run('hello')
  expect(output).to.equal('Hello, World!\n')
})

it('should print a greeting', function () {
  const output = run('hello Rahul')
  expect(output).to.equal('Hello, Rahul!\n')
})

it('should perform the specified operation', function () {
  const output = run('calc 3 4 -o multiply')
  expect(output).to.equal('12\n')
})

it('should print the typical age for a given name', function () {
  const output = run('age Rahul')
  expect(output).to.equal('Rahul - 40\n')
})
