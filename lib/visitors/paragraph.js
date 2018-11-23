'use strict'

module.exports = paragraph

function paragraph(node) {
  // console.log('...', this.all(node))
  return this.all(node).join('')
}
