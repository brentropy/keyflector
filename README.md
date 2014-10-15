# keyflector

`keyflector(obj)` is a function returns an enumeration of keys form `obj` and
values equal to each key. This is basically the same as `keyMirror()` in 
[react](https://github.com/facebook/react) but seperated in to its own module
for use outside of react apps.

## Installation

```bash
$ npm install keyflector --save
```

## Example

```js
var keyflector = require('keyflector')

keyflector({
  FOO: null,
  BAR: null
})
/* => {
  FOO: 'FOO',
  BAR: 'BAR'
} */
```
