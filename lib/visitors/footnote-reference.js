'use strict'

module.exports = footnoteReference

var leftSquareBracket = '['
var rightSquareBracket = ']'
var caret = '^'

function footnoteReference(node) {
  return (
    `\\footnotemark{` + (node.label || node.identifier) + `}`
    // leftSquareBracket +
    // caret +
    // (node.label || node.identifier) +
    // rightSquareBracket
  )
}
