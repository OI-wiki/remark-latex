'use strict'

module.exports = checkboxItems

var lineFeed = '\n'

var blank = lineFeed + lineFeed

// Visit unordered list items.  Uses `options.bullet` as each item’s bullet.
function checkboxItems(node) {
  var self = this
  var bullet = `\\item `
  var fn = self.visitors.listItem
  var children = node.children
  var length = children.length
  var index = -1
  var values = []

  while (++index < length) {
    values[index] = fn.call(self, children[index], node, index, bullet, false)
  }

  return `\\begin{todolist}` + lineFeed + values.join(lineFeed) + lineFeed + `\\end{todolist}`
  // return `\\begin{itemize}` + lineFeed + values.join(node.spread ? blank : lineFeed) + lineFeed + `\\end{itemize}`
}
