'use strict'

module.exports = inlineCode


// Stringify inline code.
//
// Knows about internal ticks (`\``), and ensures one more tick is used to
// enclose the inline code:
//
// ````markdown
// ```foo ``bar`` baz```
// ````
//
// Even knows about inital and final ticks:
//
// ``markdown
// `` `foo ``
// `` foo` ``
// ```
function inlineCode(node) {
  var value = node.value

  // if (value.charAt(0) === graveAccent) {
  //   start += space
  // }

  // if (value.charAt(value.length - 1) === graveAccent) {
  //   end = space + end
  // }

  return `\\texttt{` + value + `}`
}
