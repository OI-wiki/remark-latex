'use strict'

// var markdownTable = require('markdown-table')

module.exports = table

var space = ' '
var verticalBar = '|'

// Stringify table.
//
// Creates a fenced table by default, but not in `looseTable: true` mode:
//
// ```markdown
//  Foo | Bar
// :-: | ---
// Baz | Qux
//
// NOTE: Be careful with `looseTable: true` mode, as a loose table inside an
// indented code block on GitHub renders as an actual table!
//
// Creates a spaced table by default, but not in `spacedTable: false`:
//
// ```markdown
// |Foo|Bar|
// |:-:|---|
// |Baz|Qux|
// ```
function table(node) {
  var self = this
  var options = self.options
  var loose = options.looseTable
  var spaced = options.spacedTable
  var pad = options.paddedTable
  var stringLength = options.stringLength
  var rows = node.children
  var index = rows.length
  var exit = self.enterTable()
  var result = []
  var start
  var end

  while (index--) {
    result[index] = self.all(rows[index])
  }

  exit()
  node.align.forEach((e, idx) => {
    switch(e) {
      case 'left':
        node.align[idx] = 'l'
        break;
      case 'right':
        node.align[idx] = 'r'
        break;
      case 'center':
        node.align[idx] = 'c'
        break;
      default:
        node.align[idx] = 'c'
    }
  });
  const align = node.align.join('')
  // if (loose) {
  //   start = ''
  //   end = ''
  // } else if (spaced) {
  //   start = verticalBar + space
  //   end = space + verticalBar
  // } else {
  //   start = verticalBar
  //   end = verticalBar
  // }
  let res = []
  node.children.forEach(e => {
    let cur = []
    // console.log(e)
    // console.log(typeof cur)
    e.children.forEach(w => {
      // console.log(w.children[0])
      if (w && w.children[0]) {
        cur.push(w.children[0].value)
      } else {
        cur.push(' ')
      }
    })
    res.push(cur.join(`& `) + '\\\\')
  });
  // console.log(res)
  res = res.join('')
  return (
    `\\begin{tabular}{${align}}\n\\hline\n` +
    res + 
    `\\hline\n\\end{tabular}`
  )
  // TODO
  // return markdownTable(result, {
  //   align: node.align,
  //   pad: pad,
  //   start: start,
  //   end: end,
  //   stringLength: stringLength,
  //   delimiter: spaced ? space + verticalBar + space : verticalBar
  // })
}
