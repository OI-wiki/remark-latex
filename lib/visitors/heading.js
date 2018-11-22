'use strict'

module.exports = heading

var lineFeed = '\n'
var space = ' '
var numberSign = '#'
var dash = '-'
var equalsTo = '='

// Stringify a heading.
//
// In `setext: true` mode and when `depth` is smaller than three, creates a
// setext header:
//
// ```markdown
// Foo
// ===
// ```
//
// Otherwise, an ATX header is generated:
//
// ```markdown
// ### Foo
// ```
//
// In `closeAtx: true` mode, the header is closed with hashes:
//
// ```markdown
// ### Foo ###
// ```
function heading(node) {
  var self = this
  var depth = node.depth
  var setext = self.options.setext
  var closeAtx = self.options.closeAtx
  var content = self.all(node).join('')
  var prefix

  // if (setext && depth < 3) {
  //   return (
  //     content + lineFeed + repeat(depth === 1 ? equalsTo : dash, content.length)
  //   )
  // }

  // prefix = repeat(numberSign, node.depth)

  var prefix
  switch (node.depth) {
    case 1:
      prefix = `\\section`
      break;
    case 2:
      prefix = `\\subsection`
      break;
    case 3:
      prefix = `\\subsubsection`
      break;
    case 4:
      prefix = `\\paragraph`
      break;
    case 5:
      prefix = `\\subparagraph`
      break;
    case 6:
      prefix = `\\subparagraph`
      break;
    default:
      prefix = `\\subparagraph`
  }
  // console.log(content)
  return `${prefix}{${(content)}}`;
  // return prefix + space + content + (closeAtx ? space + prefix : '')
}
