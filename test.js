'use strict'

var code = require('code')
var Lab = require('lab')
var lab = exports.lab = Lab.script({ output: process.stdout })
var assetsService = require('./')

lab.experiment('Hello', function () {
  lab.test('Testing for "Hello World"', function (done) {
    var server = assetsService({ port: 8989 })
    var options = { method: 'GET', url: '/' }
    server.inject(options, function (response) {
      var result = response.result
      code.expect(result).to.equal('Hello World')
      done()
    })
  })
})
