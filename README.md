# remark-latex

It's a tool to compile [mdast](https://github.com/syntax-tree/mdast) to latex.

## usage

```node
var unified = require('unified')
var createStream = require('unified-stream')
var parse = require('remark-parse')
var math = require('remark-math')
var latex = require('./index.js')
var details = require('/home/ir1d/Documents/repo/remark-details/index.js')

var processor = unified()
.use(parse)
.use(math)
.use(details)
  .use(latex, {
    // options
  })

process.stdin.pipe(createStream(processor)).pipe(process.stdout)
```

## options

`options.image_prefix` sets the prefix for the link of local images.

## disclaimer

This tool is originally used to compile [**OI Wiki**](https://github.com/24OI/OI-wiki) to latex, and tested with limited cases.
