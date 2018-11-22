'use strict'

module.exports = strikethrough

function strikethrough(node) {
  return `\\sout{` + this.all(node).join('') + `}`
}
