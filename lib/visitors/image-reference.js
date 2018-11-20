'use strict'

var label = require('../util/label')

module.exports = imageReference

var leftSquareBracket = '['
var rightSquareBracket = ']'
var exclamationMark = '!'

function imageReference(node) {
  return (
    `\\begin{figure}[h]\n\\centering\n` +
    `\\includegraphics[width=0.5\\textwidth]{` +
    node.url + `} \n` +
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
