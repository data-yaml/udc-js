var expect = require('chai').expect
var it = require('mocha').it
var childProcess = require('child_process')

// helper method to run command in shell
function exec (command) {
  return childProcess.execSync(command, { encoding: 'utf8' })
}
function run (args) {
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
  var output = run('hello')
  expect(output).to.equal('Hello, World!\n')
})

it('should print a greeting', function () {
  var output = run('hello Rahul')
  expect(output).to.equal('Hello, Rahul!\n')
})

it('should perform the specified operation', function () {
  var output = run('calc 3 4 -o multiply')
  expect(output).to.equal('12\n')
})

it('should print the typical age for a given name', function () {
  var output = run('age Rahul')
  expect(output).to.equal('Rahul - 40\n')
})
