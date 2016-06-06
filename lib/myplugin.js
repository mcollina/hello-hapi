'use strict'

module.exports.register = function (server, options, next) {
  function hello (request, reply) {
    reply('Hello World')
  }

  server.route({ method: 'GET', path: '/', handler: hello })

  next()
}

module.exports.register.attributes = {
  name: 'myplugin',
  version: '0.0.1'
}
