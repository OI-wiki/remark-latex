'use strict'

var path = require('path')

module.exports = imageReference

var leftSquareBracket = '['
var rightSquareBracket = ']'
var exclamationMark = '!'

function imageReference(node) {
  var image_prefix = self.options.image_prefix || '';
  return (
    `\\begin{figure}[h]\n\\centering\n` +
    `\\includegraphics[width=0.5\\textwidth]{` +
    path.join(image_prefix, node.url) + `} \n` +
    (txt ? `\\caption{${txt}}` : '') +
    `\n\\end{figure}`
  )
  // NOT TESTED
  
  // return (
  //   exclamationMark +
  //   leftSquareBracket +
  //   (this.encode(node.alt, node) || '') +
  //   rightSquareBracket +
  //   label(node)
  // )
}
