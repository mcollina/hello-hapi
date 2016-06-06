#! /usr/bin/env node

'use strict'

const Hapi = require('hapi')
const xtend = require('xtend')
const minimist = require('minimist')
const defaults = {
  port: 8989
}

function assetsService (opts, cb) {
  opts = xtend(defaults, opts)

  const server = new Hapi.Server()

  server.connection({ port: opts.port })

  server.register([
    require('./lib/myplugin')
  ], (err) => {
    cb(err, server)
  })

  return server
}

function start (opts) {
  assetsService(opts, (err, server) => {
    if (err) { throw err }

    server.start(function (err) {
      if (err) { throw err }

      console.log('Server running at:', server.info.uri)
    })
  })
}

module.exports = assetsService

if (require.main === module) {
  start(minimist(process.argv.slice(2), {
    integer: 'port',
    alias: {
      'port': 'p'
    }
  }))
}
