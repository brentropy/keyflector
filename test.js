should = require('should')
keyflector = require('./index')

var test = {a: null, b: null}

describe('The keyflector() function', function () {
  
  it('should throw if called with a non-object', function () {
    !(function () { keyflector(null) }).should.throw()
  })

  it('should throw if called with an array', function () {
    !(function () { keyflector([]) }).should.throw()
  })

  it('should return an object with the same keys', function () {
    Object.keys(keyflector(test)).should.eql(Object.keys(test))
  })

  it('should return object with keys equal to values', function () {
    var result = keyflector(test)
    Object.keys(result).forEach(function (key) {
      result[key].should.equal(key)
    })
  })

})

