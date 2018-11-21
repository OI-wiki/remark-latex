'use strict'

module.exports = emphasis

// Stringify an `emphasis`.
//
// The marker used is configurable through `emphasis`, which defaults to an
// underscore (`'_'`) but also accepts an asterisk (`'*'`):
//
// ```markdown
// *foo*
// ```
//
// In `pedantic` mode, text which itself contains an underscore will cause the
// marker to default to an asterisk instead:
//
// ```markdown
// *foo_bar*
// ```
function emphasis(node) {
  var content = this.all(node).join('')
  // console.log(node.type)
  // should there be an option to add `\/` ?
  return `{\\em ` + content + ` }`
  // return marker + content + marker
}
