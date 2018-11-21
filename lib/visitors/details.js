'use strict'

module.exports = details

function details(node) {
  // warning: we were using \newtcbtheorem
  // but this in latex can't be nested
  
  // console.log(node)
  // console.log(node.visitors)
  // console.error(typeof(node.value))
  let res = this.all(node)
  // console.log(res)
  let begin = ''
  let insert = node.title || ''
  begin = `\\begin{${node.value.toUpperCase()}}{${insert}}\n`
  let end = `\n\\end{${node.value.toUpperCase()}}\n`
  return begin + res.join('') + end
}
