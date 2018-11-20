'use strict'

module.exports = list

function list(node) {
  const ck = node.children.some(e => {
    return typeof e.checked === 'boolean'
    // return e.checked !== undefined
  });
  console.error(ck);
  var fn = ck ? this.visitCheckboxItems : (node.ordered ? this.visitOrderedItems : this.visitUnorderedItems)
  return fn.call(this, node)
}
