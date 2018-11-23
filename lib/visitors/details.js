'use strict'



module.exports = details

function details(node) {
  // warning: we were using \newtcbtheorem
  // but this in latex can't be nested
  
  // console.log(this)
  // console.log(node)
  // console.error(typeof(node.value))
  let res = this.all(node)
  // console.log(res)
  let begin = ''
  let insert = node.title || ''
  if (insert != '') {
    var unified = require('unified')
    var parse = require('remark-parse')
    var math = require('remark-math')
    var latex = require('../../index.js')
    var details = require('remark-details')
    var processor = unified()
      .use(parse)
      .use(math)
      .use(details)
      .use(latex, {
        // options
      })
    processor.process(insert, (err, file) => {
      if (err) {
        console.error(err);
      }
      // console.log(file)
      insert = file.contents.trim()
    })
  }
  let val = node.value.toUpperCase() || 'NOTE'
  begin = `\\begin{${val}}{${insert}}{}\n`
  let end = `\n\\end{${val}}\n`
  return begin + res.join('\n') + end
}
