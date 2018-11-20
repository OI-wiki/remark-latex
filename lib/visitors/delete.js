'use strict'

module.exports = strikethrough

function strikethrough(node) {
  return `\\st{` + this.all(node).join('') + `}`
}
