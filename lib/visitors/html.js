'use strict'

module.exports = html

var strip = require('strip-markdown')
var remark = require('remark')

function html(node) {
  console.error('HTML can\'t be compiled into latex, using strip-markdown to extract txt')
  remark()
    .use(strip)
    .process(node.value, (err, file) => {
      if (err) throw err
      return file
    })
  // return node.value
}
