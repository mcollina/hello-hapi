'use strict'

var test = require('tape')
var assets = require('./')

test('assets is a function', function (t) {
  t.equal(typeof assets, 'function', 'is a function')
  t.end()
})
