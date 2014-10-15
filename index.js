module.exports = keyflector

function keyflector(obj) {
  if (obj instanceof Object === false || Array.isArray(obj)) {
    throw new Error('keyflector(obj): obj must an object')
  }
  
  var keys = Object.keys(obj)
  var i = -1
  var len = keys.length
  var out = {}
  
  while (++i < len) {
    out[keys[i]] = keys[i]
  }

  return out
}
