'use strict'

module.exports = inlineMath
function inlineMath(node) {
  return '$' + node.value + '$'
}
