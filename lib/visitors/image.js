'use strict'

var uri = require('../util/enclose-uri')
var title = require('../util/enclose-title')
var path = require('path')

module.exports = image

var space = ' '
var leftParenthesis = '('
var rightParenthesis = ')'
var leftSquareBracket = '['
var rightSquareBracket = ']'
var exclamationMark = '!'

// Stringify an image.
//
// Is smart about enclosing `url` (see `encloseURI()`) and `title` (see
// `encloseTitle()`).
//
// ```markdown
// ![foo](</fav icon.png> 'My "favourite" icon')
// ```
//
// Supports named entities in `url`, `alt`, and `title` when in
// `settings.encode` mode.
function image(node) {
  var self = this
  var content = uri(self.encode(node.url || '', node))
  var exit = self.enterLink()
  var alt = self.encode(self.escape(node.alt || '', node))
  var txt = self.escape(node.title || node.alt || '')
  var image_prefix = self.options.image_prefix || '';

  exit()

  if (node.title) {
    content += space + title(self.encode(node.title, node))
  }

  return (
    `\\begin{figure}[h]\n\\centering\n` + 
    `\\includegraphics[width=0.5\\textwidth]{` +
    path.join(image_prefix, node.url) + `} \n` +
    (txt ? `\\caption{${txt}}` : '') + 
    `\n\\end{figure}`
  )
}
