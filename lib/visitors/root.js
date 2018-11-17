'use strict'

module.exports = root

var lineFeed = '\n'
var header = ''

// Stringify a root.
// Adds a final newline to ensure valid POSIX files. */
function root(node) {
  return header + lineFeed + this.block(node) + lineFeed
}
