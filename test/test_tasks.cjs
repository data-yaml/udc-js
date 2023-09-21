var expect = require('chai').expect
var it = require('mocha').it
var childProcess = require('child_process')

// helper method to run command in shell
var exec = function (command) {
  return childProcess.execSync(command, { encoding: 'utf8' })
}

var run = function (args) {
  return exec('npx udc-js ' + args)
}

it('should talk about Tasks', function () {
  var output = run('list')
  expect(output).to.contain('Tasks')
})
