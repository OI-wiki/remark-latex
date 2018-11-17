'use strict'

module.exports = strong

// Stringify a `strong`.
//
// The marker used is configurable by `strong`, which defaults to an asterisk
// (`'*'`) but also accepts an underscore (`'_'`):
//
// ```markdown
// __foo__
// ```
function strong(node) {
  // var marker = repeat(this.options.strong, 2)
  return `\\textbf{` + (this.all(node).join('')) + `}`
}
