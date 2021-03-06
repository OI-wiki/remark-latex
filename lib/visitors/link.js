'use strict'

var uri = require('../util/enclose-uri')
var lescape = require('escape-latex')
var title = require('../util/enclose-title')

module.exports = link

var space = ' '
var leftSquareBracket = '['
var rightSquareBracket = ']'
var leftParenthesis = '('
var rightParenthesis = ')'

// Expression for a protocol:
// See <http://en.wikipedia.org/wiki/URI_scheme#Generic_syntax>.
var protocol = /^[a-z][a-z+.-]+:\/?/i
var inner = /\(([^http].*?)\)/

// Stringify a link.
//
// When no title exists, the compiled `children` equal `url`, and `url` starts
// with a protocol, an auto link is created:
//
// ```markdown
// <http://example.com>
// ```
//
// Otherwise, is smart about enclosing `url` (see `encloseURI()`) and `title`
// (see `encloseTitle()`).
// ```
//
// ```markdown
// [foo](<foo at bar dot com> 'An "example" e-mail')
// ```
//
// Supports named entities in the `url` and `title` when in `settings.encode`
// mode.
function link(node) {
  var self = this
  var content = self.encode(node.url || '', node)
  var exit = self.enterLink()
  var escaped = self.encode(self.escape(node.url || '', node))
  var value = self.all(node).join('')

  exit()

  // console.log(typeof node.url)
  // console.log(node.children[0].value)
  if (inner.test(`(` + (node.url || '') + `)`)) {
    // console.log(node.url)
    return ` ` + (value || '') + ` `
  }

  // console.log(',', esacaped)
  // console.log(value)
  if (protocol.test(content) && (value == '' || escaped === value)) {
    // Backslash escapes do not work in autolinks, so we do not escape.
    return `\\url{` + (node.url).replace('%', `\\\%`) + `}`
    // return uri(self.encode(node.url), true)
  }

  // content = uri(content)

  // if (node.children[0].value) {
  //   content += space + title(self.encode(self.escape(node.title, node), node))
  // }

  return (
    `\\href{` + (content).replace('%', `\\\%`) + `}{` + lescape(value || '') + `}`
  )
}
