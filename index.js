'use strict'

var unherit = require('unherit')
var xtend = require('xtend')
var Compiler = require('./lib/compiler.js')

module.exports = latex
latex.Compiler = Compiler

function latex(options) {
  var Local = unherit(Compiler)
  Local.prototype.options = xtend(
    Local.prototype.options,
    this.data('settings'),
    options
  )
  this.Compiler = Local
}
