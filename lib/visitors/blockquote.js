'use strict'

module.exports = blockquote

var lineFeed = '\n'
var space = ' '
var greaterThan = '>'

function blockquote(node) {
  var values = this.block(node).split(lineFeed)
  // values.forEach(data => {
    // return lescape(data)
  // });
  // console.log(values)
  var result = []
  var length = values.length
  var index = -1
  var value

  // while (++index < length) {
  //   value = values[index]
  //   result[index] = (value ? space : '') + value
  // }
  const quoteBegin = `\\begin{QUOTE}{}`
  const quoteEnd = `\\end{QUOTE}`
  return quoteBegin + lineFeed + values.join(lineFeed + lineFeed) + lineFeed + quoteEnd
  // return greaterThan + result.join(lineFeed + greaterThan)
}
