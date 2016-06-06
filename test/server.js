'use strict'

const code = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script({ output: process.stdout })
const assetsService = require('../')

lab.experiment('Hello', () => {
  let server

  lab.beforeEach((done) => {
    assetsService({ port: 8989 }, (err, s) => {
      server = s
      done(err)
    })
  })

  lab.test('Testing for "Hello World"', (done) => {
    const options = { method: 'GET', url: '/' }
    server.inject(options, function (response) {
      const result = response.result
      code.expect(result).to.equal('Hello World')
      done()
    })
  })
})
