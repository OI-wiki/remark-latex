'use strict'

module.exports = footnote

var leftSquareBracket = '['
var rightSquareBracket = ']'
var caret = '^'

function footnote(node) {
  return (
    `\\footnotemark{` + node.text + `}`
    // leftSquareBracket + caret + this.all(node).join('') + rightSquareBracket
  )
}
