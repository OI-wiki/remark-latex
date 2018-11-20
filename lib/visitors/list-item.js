'use strict'

var repeat = require('repeat-string')
var pad = require('../util/pad')

module.exports = listItem

var lineFeed = '\n'
var space = ' '
var leftSquareBracket = '['
var rightSquareBracket = ']'
var lowercaseX = 'x'

var ceil = Math.ceil
var blank = lineFeed + lineFeed

var tabSize = 4

// Stringify a list item.
//
// Prefixes the content with a checked checkbox when `checked: true`:
//
// ```markdown
// [x] foo
// ```
//
// Prefixes the content with an unchecked checkbox when `checked: false`:
//
// ```markdown
// [ ] foo
// ```
function listItem(node, parent, position, bullet, ordered) {
  var self = this
  var style = self.options.listItemIndent
  var marker = `\\item` || self.options.bullet // bullet
  var spread = node.spread == null ? true : node.spread
  var checked = node.checked
  var children = node.children
  var length = children.length
  var values = []
  var index = -1
  var value
  var indent
  var spacing = space

  while (++index < length) {
    values[index] = self.visit(children[index], node)
  }

  value = values.join(lineFeed)

  if (typeof checked === 'boolean') {
    // Note: I’d like to be able to only add the space between the check and
    // the value, but unfortunately github does not support empty list-items
    // with a checkbox :(
    value =
      (checked ? `[\\done] ` : ' ') +
      value
  } else {
    marker += ' '
  }

  indent = marker.length + 1

  return marker + value
}
